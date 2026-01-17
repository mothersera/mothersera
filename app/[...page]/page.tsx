import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

async function getBuilderContent(urlPath: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  if (!apiKey) {
    console.error("NEXT_PUBLIC_BUILDER_API_KEY is not configured");
    return null;
  }

  try {
    const response = await fetch(
      `https://cdn.builder.io/api/v2/content/page?apiKey=${apiKey}&userAttributes.urlPath=${encodeURIComponent(
        urlPath
      )}&limit=1&includeUnpublished=false`,
      {
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    );

    if (!response.ok) {
      console.error(`Builder.io API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.results?.[0] || null;
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

  // Parse and render the Builder.io JSON content
  const buildContent = content.data;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7efe9",
      }}
    >
      {/* Render HTML from Builder.io */}
      <div
        dangerouslySetInnerHTML={{
          __html: renderBuilderContent(buildContent),
        }}
      />
    </div>
  );
}

// Helper function to convert Builder.io JSON to HTML
function renderBuilderContent(data: any): string {
  if (!data) return "";

  // This is a basic implementation - Builder.io content should be properly rendered
  // For full support, you need @builder.io/react package
  let html = "";

  if (data.blocks) {
    for (const block of data.blocks) {
      html += renderBlock(block);
    }
  }

  return html;
}

function renderBlock(block: any): string {
  if (!block) return "";

  // Basic block rendering - extend as needed
  const tag = block.tag || "div";
  const className = block.class || "";
  const style = block.style ? `style="${Object.entries(block.style).map(([k, v]) => `${k}:${v}`).join(";")}"` : "";

  let content = block.text || "";

  if (block.children) {
    for (const child of block.children) {
      content += renderBlock(child);
    }
  }

  return `<${tag} class="${className}" ${style}>${content}</${tag}>`;
}
