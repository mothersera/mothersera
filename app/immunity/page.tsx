import Link from "next/link";

export default function ImmunityPage() {
  return (
    <main>
      <Link href="/" className="button">
        ← Back to Home
      </Link>

      <h1>Immunity, Illness & When to Worry (0–5 Years)</h1>

      <p>
        A child’s immune system develops gradually. Frequent minor illnesses
        during early childhood are normal and help build long-term immunity.
        Understanding what is normal and when to seek medical care is essential.
      </p>

      <div className="divider" />

      <Section
        title="How Immunity Develops"
        items={[
          "Newborns receive temporary immunity from the mother",
          "Breastfeeding supports immune protection",
          "Exposure to common infections strengthens immunity",
          "Vaccinations train the immune system safely",
        ]}
      />

      <Section
        title="Common Childhood Illnesses"
        items={[
          "Common cold and cough",
          "Mild fever",
          "Diarrhea or stomach upset",
          "Ear infections",
          "Skin rashes",
        ]}
      />

      <Section
        title="Supporting Natural Immunity"
        items={[
          "Balanced nutrition with fruits and vegetables",
          "Adequate sleep and rest",
          "Daily physical activity and play",
          "Good hygiene habits (hand washing)",
        ]}
      />

      <Section
        title="Home Care for Mild Illness"
        items={[
          "Ensure adequate fluids",
          "Allow rest and sleep",
          "Light, easily digestible meals",
          "Monitor symptoms calmly",
        ]}
      />

      <div className="divider" />

      <div className="alert">
        <h2>When to See a Doctor Immediately</h2>
        <ul>
          <li>High fever lasting more than 2 days</li>
          <li>Difficulty breathing or rapid breathing</li>
          <li>Signs of dehydration (dry mouth, no urine)</li>
          <li>Persistent vomiting or diarrhea</li>
          <li>Unusual drowsiness or unresponsiveness</li>
          <li>Convulsions or seizures</li>
        </ul>
      </div>

      <div className="divider" />

      <Section
        title="Vaccinations & Preventive Care"
        items={[
          "Follow recommended immunization schedule",
          "Do not delay vaccines without medical advice",
          "Vaccines protect both the child and community",
          "Regular pediatric checkups are essential",
        ]}
      />

      <p style={{ fontSize: "13px", color: "#777", marginTop: "24px" }}>
        Disclaimer: This information is for educational purposes only and does
        not replace professional medical advice. Always consult a qualified
        healthcare provider for diagnosis and treatment.
      </p>
    </main>
  );
}

/* ---------- COMPONENT ---------- */

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
