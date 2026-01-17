import { builder } from "@builder.io/react";

export const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

if (BUILDER_API_KEY) {
  builder.init(BUILDER_API_KEY);
}

export default builder;
