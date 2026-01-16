type InfoSectionProps = {
  title: string;
  subtitle: string;
  points: string[];
};

export default function InfoSection({
  title,
  subtitle,
  points,
}: InfoSectionProps) {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: "36px",
        borderRadius: "20px",
        marginBottom: "36px",
        boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "18px",
          lineHeight: 1.7,
          maxWidth: "820px",
        }}
      >
        {subtitle}
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          lineHeight: 1.9,
          fontSize: "15.5px",
        }}
      >
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
