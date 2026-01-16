import Link from "next/link";

export default function NewMotherPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FDF6F2",
        padding: "40px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        color: "#333",
      }}
    >
      {/* Back Button */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            marginBottom: "28px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#8FAFA1",
            color: "white",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          ← Back to Home
        </button>
      </Link>

      {/* Header */}
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        New Mother Care (0–12 Months)
      </h1>

      <p style={{ maxWidth: "820px", color: "#555", lineHeight: "1.7" }}>
        Comprehensive, evidence-based care for mothers after childbirth —
        focusing on physical recovery, mental well-being, nutrition, and
        sustainable routines during the first year postpartum.
      </p>

      <Divider />

      {/* Recovery */}
      <Section
        title="Physical Recovery"
        items={[
          "Rest is essential — healing takes weeks, not days",
          "Pelvic floor & gentle core exercises after medical clearance",
          "Adequate hydration supports healing and lactation",
          "Normal fatigue is expected; persistent pain is not",
        ]}
      />

      {/* Mental Health */}
      <Section
        title="Mental & Emotional Health"
        items={[
          "Mood swings are common due to hormonal shifts",
          "Postpartum blues usually resolve within 2 weeks",
          "Persistent sadness, anxiety, or detachment needs attention",
          "Support systems significantly improve recovery",
        ]}
      />

      {/* Nutrition */}
      <Section
        title="Postpartum Nutrition (Weekly Plan)"
        items={[
          "Monday: Dal, rice, vegetables, ghee",
          "Tuesday: Chapati, paneer, fruit",
          "Wednesday: Vegetable khichdi, curd",
          "Thursday: Eggs / tofu, vegetables",
          "Friday: Rice, fish / paneer, greens",
          "Saturday: Balanced home-cooked meal",
          "Sunday: Iron-rich meal (spinach, lentils)",
        ]}
      />

      {/* Breastfeeding */}
      <Section
        title="Breastfeeding Support"
        items={[
          "Feed on demand — frequency builds milk supply",
          "Stay hydrated and well-nourished",
          "Pain or cracked nipples need early support",
          "Combination feeding is okay if needed",
        ]}
      />

      {/* Sleep */}
      <Section
        title="Sleep & Daily Routine"
        items={[
          "Sleep when the baby sleeps (short naps matter)",
          "Avoid rigid schedules early on",
          "Share nighttime responsibilities when possible",
          "Prioritize rest over household perfection",
        ]}
      />

      {/* Red Flags */}
      <Section
        title="When to Consult a Doctor"
        items={[
          "Heavy bleeding or foul-smelling discharge",
          "High fever or severe pain",
          "Persistent sadness or anxiety beyond 2 weeks",
          "Breast pain with fever (possible infection)",
        ]}
        danger
      />

      <Divider />

      {/* Disclaimer */}
      <p style={{ fontSize: "13px", color: "#777", maxWidth: "800px" }}>
        Disclaimer: This content is educational and does not replace professional
        medical advice. Always consult a qualified healthcare provider for
        personalized postpartum care.
      </p>
    </main>
  );
}

/* ---------- Components ---------- */

function Divider() {
  return (
    <hr
      style={{
        margin: "40px 0",
        border: "none",
        borderTop: "1px solid #E6DAD5",
      }}
    />
  );
}

function Section({
  title,
  items,
  danger = false,
}: {
  title: string;
  items: string[];
  danger?: boolean;
}) {
  return (
    <section
      style={{
        backgroundColor: danger ? "#FFF0F0" : "white",
        borderRadius: "18px",
        padding: "24px",
        marginBottom: "28px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        maxWidth: "900px",
        border: danger ? "1px solid #F5B5B5" : "none",
      }}
    >
      <h2 style={{ marginBottom: "12px" }}>{title}</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {danger ? "⚠️" : "✅"} {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
