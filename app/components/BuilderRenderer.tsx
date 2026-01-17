"use client";

import { BuilderContent } from "@builder.io/react";
import type { BuilderContent as BuilderContentType } from "@builder.io/sdk";
import type { ReactNode } from "react";

type Props = {
  content: BuilderContentType;
};

export default function BuilderRenderer({ content }: Props) {
  return (
    <BuilderContent
      model="page"
      content={content}
    >
      {(): ReactNode => null}
    </BuilderContent>
  );
}
