import Link from "next/link";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function PregnantPage() {
  return (
    <main
      style={{
        padding: "60px 24px",
        backgroundColor: "#F7EFE9",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Back */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#555" }}>
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <Section
        title="Pregnancy Journey"
        subtitle="Pregnancy is not one phase — it is three powerful biological transformations. Each trimester has unique physical, emotional, and nutritional needs."
      />

      {/* TRIMESTER 1 */}
      <Section
        title="First Trimester (0–12 Weeks)"
        subtitle="Foundation stage — organ development, hormonal shifts, and maximum vulnerability."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <FeatureCard
            icon="🧠"
            title="What’s Happening"
            description="Neural tube, heart, brain, and spinal cord begin forming. Hormonal changes are intense."
          />

          <FeatureCard
            icon="🥬"
            title="Nutrition Focus"
            description="Folate, iron, vitamin B6, hydration, small frequent meals to manage nausea."
          />

          <FeatureCard
            icon="🚫"
            title="Avoid Completely"
            description="Alcohol, smoking, raw foods, excessive caffeine, self-medication."
          />

          <FeatureCard
            icon="😴"
            title="Rest & Energy"
            description="Extreme fatigue is normal. Sleep is not laziness — it is biological necessity."
          />
        </div>
      </Section>

      {/* TRIMESTER 2 */}
      <Section
        title="Second Trimester (13–27 Weeks)"
        subtitle="Growth stage — increased energy, visible bump, muscle and bone development."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <FeatureCard
            icon="👶"
            title="Baby Development"
            description="Bones harden, organs mature, movements become noticeable."
          />

          <FeatureCard
            icon="🍛"
            title="Nutrition Focus"
            description="Protein, calcium, omega-3 fats, iron, fruits, vegetables."
          />

          <FeatureCard
            icon="🧘‍♀️"
            title="Movement"
            description="Prenatal yoga, walking, gentle stretching improve circulation and posture."
          />

          <FeatureCard
            icon="⚠️"
            title="Watch For"
            description="Back pain, leg cramps, heartburn — manageable with posture and diet."
          />
        </div>
      </Section>

      {/* TRIMESTER 3 */}
      <Section
        title="Third Trimester (28–40 Weeks)"
        subtitle="Preparation stage — rapid baby growth and maternal readiness for birth."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          <FeatureCard
            icon="⚖️"
            title="Rapid Growth"
            description="Baby gains weight, lungs mature, brain development accelerates."
          />

          <FeatureCard
            icon="🥣"
            title="Nutrition Focus"
            description="Iron, fiber, hydration, smaller meals to manage pressure and digestion."
          />

          <FeatureCard
            icon="🧠"
            title="Mental Preparation"
            description="Birth planning, anxiety management, emotional reassurance."
          />

          <FeatureCard
            icon="👜"
            title="Birth Readiness"
            description="Hospital bag, newborn essentials, rest, pelvic floor awareness."
          />
        </div>
      </Section>
    </main>
  );
}
