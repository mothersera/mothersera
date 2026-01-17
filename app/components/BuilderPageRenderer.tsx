"use client";

import { BuilderComponent, builder } from "@builder.io/react";

interface BuilderPageRendererProps {
  content: any;
  urlPath: string;
}

// Initialize builder on client side
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey) {
  builder.init(apiKey);
}

export default function BuilderPageRenderer({
  content,
  urlPath,
}: BuilderPageRendererProps) {
  if (!content) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          color: "#666",
        }}
      >
        Page not found
      </div>
    );
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
