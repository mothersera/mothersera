"use client";

import { useEffect, useState } from "react";
import DefaultErrorPage from "next/error";

interface PageProps {
  params: {
    page: string[];
  };
}

export default function Page({ params }: PageProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const page = "/" + (params.page?.join("/") || "");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
        if (!apiKey) {
          console.warn("NEXT_PUBLIC_BUILDER_API_KEY is not set");
          setNotFound(true);
          return;
        }

        // Fetch from Builder.io Content API
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/page?apiKey=${apiKey}&userAttributes.urlPath=${encodeURIComponent(
            page
          )}&limit=1`
        );

        if (!response.ok) {
          setNotFound(true);
          return;
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setContent(data.results[0]);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [page]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontSize: "18px",
          color: "#666",
        }}
      >
        Loading...
      </div>
    );
  }

  if (notFound || !content) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // Render the Builder.io content
  // For now, display a simple message that content is loaded from Builder
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f7efe9",
      }}
    >
      <p style={{ color: "#666", textAlign: "center" }}>
        Page content is being loaded from Builder.io
      </p>
      <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {JSON.stringify(content, null, 2)}
      </pre>
    </div>
  );
}
