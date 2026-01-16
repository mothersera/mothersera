import React from "react";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  premium?: boolean;
};

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  premium = false,
}: FeatureCardProps) {
  const CardContent = (
    <div
      style={{
        padding: "28px",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        border: premium ? "2px solid #D4AF37" : "1px solid #EEE",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {icon && (
        <div
          style={{
            fontSize: "32px",
            marginBottom: "12px",
          }}
        >
          {icon}
        </div>
      )}

      <h3
        style={{
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: "8px",
          color: "#3E2F2A",
        }}
      >
        {title}
        {premium && (
          <span
            style={{
              marginLeft: "8px",
              fontSize: "12px",
              padding: "4px 8px",
              backgroundColor: "#D4AF37",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            PREMIUM
          </span>
        )}
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.6,
          color: "#6B5B53",
        }}
      >
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
