import React from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // ✅ OPTIONAL (THIS FIXES EVERYTHING)
};

export default function Section({
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto 64px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#3E2F2A",
          marginBottom: "12px",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: "18px",
            color: "#6B5B53",
            maxWidth: "720px",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Children are OPTIONAL */}
      {children && <div>{children}</div>}
    </section>
  );
}
