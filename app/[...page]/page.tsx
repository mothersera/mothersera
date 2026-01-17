import { notFound } from "next/navigation";
import { BuilderComponent, builder } from "@builder.io/react";
import { BUILDER_API_KEY } from "@/lib/builder";

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

async function getBuilderContent(urlPath: string) {
  if (!BUILDER_API_KEY) {
    console.error("NEXT_PUBLIC_BUILDER_API_KEY is not configured");
    return null;
  }

  try {
    // Initialize builder if not already done
    if (!builder.authToken) {
      builder.init(BUILDER_API_KEY);
    }

    const content = await builder
      .get("page", {
        userAttributes: {
          urlPath: urlPath,
        },
      })
      .promise();

    return content || null;
  } catch (error) {
    console.error("Error fetching from Builder.io:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { page } = await params;
  const urlPath = "/" + (page?.join("/") || "");
  const content = await getBuilderContent(urlPath);

  return {
    title: content?.data?.title || "Mother Era",
    description: content?.data?.description || "Premium Maternal & Child Health Platform",
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const urlPath = "/" + (page?.join("/") || "");

  const content = await getBuilderContent(urlPath);

  if (!content) {
    notFound();
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
      data={{
        urlPath: urlPath,
      }}
    />
  );
}
