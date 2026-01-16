import React from "react";

type PageContainerProps = {
  title?: string; // ✅ title is now OPTIONAL
  children: React.ReactNode;
};

export default function PageContainer({
  title,
  children,
}: PageContainerProps) {
  return (
    <main style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      {title && <h1>{title}</h1>}
      {children}
    </main>
  );
}
