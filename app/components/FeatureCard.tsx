import Link from "next/link";

type FeatureCardProps = {
  icon?: string;
  title: string;
  description: string;
  href?: string;
  premium?: boolean;
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  premium = false,
}: FeatureCardProps) {
  const CardContent = (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        border: premium ? "2px solid #3E2F2A" : "1px solid #E6DDD8",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        transition: "transform 0.2s ease",
        height: "100%",
      }}
    >
      {icon && (
        <div style={{ fontSize: "28px", marginBottom: "12px" }}>
          {icon}
        </div>
      )}

      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        {title}
        {premium && (
          <span
            style={{
              marginLeft: "8px",
              fontSize: "12px",
              color: "#3E2F2A",
              fontWeight: 500,
            }}
          >
            • Premium
          </span>
        )}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#6B5B53",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );

  // If href exists → clickable card
  if (href) {
    return (
      <Link
        href={href}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {CardContent}
      </Link>
    );
  }

  // If no href → static card
  return CardContent;
}
