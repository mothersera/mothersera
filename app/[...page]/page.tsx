"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import type { BuilderContent } from "@builder.io/sdk";
import { useEffect, useState } from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderPage({
  params,
}: {
  params: { page?: string[] };
}) {
  const [content, setContent] = useState<BuilderContent | null>(null);

  const urlPath = "/" + (params.page?.join("/") || "");

  useEffect(() => {
    builder
      .get("page", {
        userAttributes: {
          urlPath,
        },
      })
      .promise()
      .then((result) => {
        setContent(result as BuilderContent | null);
      });
  }, [urlPath]);

  if (!content) return null;

  return <BuilderComponent model="page" content={content} />;
}
