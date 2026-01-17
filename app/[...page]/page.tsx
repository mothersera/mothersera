import { BuilderComponent, builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const page = "/" + (params.page?.join("/") || "");

  // Fetch Builder.io content for this page
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: page,
      },
    })
    .toPromise();

  // If no content found, show 404
  if (!content) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // Render the Builder.io content
  return (
    <BuilderComponent model="page" content={content} />
  );
}

// Generate static pages at build time (optional, for better performance)
export async function generateStaticParams() {
  // Fetch all published pages from Builder.io
  const pages = await builder
    .getAll("page", {
      options: { noTargeting: true },
    });

  return pages
    .map((page: any) => {
      const path = page.data?.url || "";
      const segments = path.split("/").filter((s: string) => s);
      return {
        page: segments,
      };
    })
    .filter((p: any) => p.page.length > 0);
}

// Revalidate pages every hour (ISR - Incremental Static Regeneration)
export const revalidate = 3600;
