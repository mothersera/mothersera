import Link from "next/link";
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FDF7F3",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        color: "#3E2F2A",
      }}
    >
      {/* TOP NAV */}
      <header
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid #EFE6E1",
          backgroundColor: "#FDF7F3",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong style={{ fontSize: "20px" }}>Mother Era</strong>

          <nav style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <Link href="/">Home</Link>
            <Link href="/pricing">Premium</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 700 }}>
            Mother Era
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "720px",
              margin: "24px auto",
              color: "#6B5B53",
              lineHeight: 1.7,
            }}
          >
            A science-backed, premium motherhood platform — guiding women from
            pregnancy to early childhood with clarity, confidence, and care.
          </p>

          <Link
            href="/pricing"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#3E2F2A",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            View Premium Plans
          </Link>
        </div>
      </section>

      {/* JOURNEYS */}
      <Section
        title="Choose Your Journey"
        subtitle="Each path is research-driven, age-specific, and designed for long-term health."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <FeatureCard
            icon="🌱"
            title="Planning Pregnancy"
            description="Hormonal balance, fertility windows, nutrition, and partner readiness — before conception."
            href="/planning"
          />

          <FeatureCard
            icon="🤰"
            title="Pregnancy"
            description="Trimester-wise care, do’s & don’ts, emotional health, nutrition, and birth preparation."
            href="/pregnant"
          />

          <FeatureCard
            icon="🍼"
            title="New Mother"
            description="Postpartum recovery, mental well-being, breastfeeding guidance, and healing support."
            href="/new-mother"
          />

          <FeatureCard
            icon="👶"
            title="Baby Growth (0–5 Years)"
            description="Diet plans, milestones, brain development, physical growth, and habit building."
            href="/baby-growth"
          />

          <FeatureCard
            icon="😴"
            title="Baby Sleep"
            description="Age-wise sleep schedules, circadian rhythm care, and sleep regression handling."
            href="/baby-sleep"
          />

          <FeatureCard
            icon="🛡️"
            title="Immunity & Health"
            description="Natural immunity building, vaccinations, micronutrients, and illness prevention."
            href="/immunity"
          />
        </div>
      </Section>

      {/* EXPERT GUIDANCE */}
      <Section
        title="Expert Guidance"
        subtitle="Get trusted advice from certified professionals at every stage of motherhood."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          

          <FeatureCard
            icon="🥗"
            title="Nutritionists"
            description="Personalized diet plans for mothers and growing children."
            href="/nutritionists"
            premium
          />

          <FeatureCard
            icon="🧠"
            title="One on One Live Expert"
            description="Mental health support for mothers, stress management, and emotional well-being."
            href="/experts"
            premium
          />

          
        </div>
      </Section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          marginTop: "80px",
          borderTop: "1px solid #EFE6E1",
          textAlign: "center",
          fontSize: "14px",
          color: "#7A6A63",
        }}
      >
        <p>Designed with care. Built for generations.</p>

        <div style={{ marginTop: "12px" }}>
          <Link href="/terms">Terms</Link> ·{" "}
          <Link href="/privacy">Privacy</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </div>

        <p style={{ marginTop: "12px", fontSize: "12px", color: "#9A8A83" }}>
          © Mother Era — Premium Maternal & Child Health Platform
        </p>
      </footer>
    </main>
  );
}
