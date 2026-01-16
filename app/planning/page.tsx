import Link from "next/link";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function PlanningPregnancyPage() {
  return (
    <main
      style={{
        padding: "60px 24px",
        backgroundColor: "#F6EFEA",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      {/* BACK TO HOME */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 24px" }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#6B4E3D",
            fontWeight: 500,
          }}
        >
          ← Back to Home
        </Link>
      </div>

      {/* MAIN SECTION */}
      <Section
        title="Pregnancy Planning"
        subtitle="A research-backed guide to prepare your body, mind, and life for a healthy pregnancy"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          <FeatureCard
            title="Ovulation & Fertility Awareness"
            description="Understand menstrual cycles, fertile windows, ovulation tracking, and conception timing using medical best practices."
          />

          <FeatureCard
            title="Pre-Pregnancy Nutrition"
            description="Evidence-based guidance on folic acid, iron, calcium, omega-3s, and balanced diets before conception."
          />

          <FeatureCard
            title="Mental & Emotional Readiness"
            description="Stress management, sleep hygiene, emotional resilience, and psychological preparedness for pregnancy."
          />

          <FeatureCard
            title="Lifestyle & Habit Optimization"
            description="What to stop, what to avoid, and what to improve—alcohol, caffeine, exercise, sleep, and daily routines."
          />

          <FeatureCard
            title="Partner Health & Support"
            description="Male fertility, sperm health, emotional support, and shared responsibility in pregnancy planning."
          />

          <FeatureCard
            title="Medical Checkups & Screenings"
            description="Vaccinations, genetic screening, chronic condition management, and doctor consultations before pregnancy."
          />
        </div>
      </Section>
    </main>
  );
}
