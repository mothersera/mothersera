import Link from "next/link";

export default function BabySleepPage() {
  return (
    <main>
      <Link href="/" className="button">
        ← Back to Home
      </Link>

      <h1>Baby Sleep & Daily Routines (0–5 Years)</h1>

      <p>
        Sleep plays a critical role in brain development, emotional regulation,
        immunity, and physical growth. Healthy sleep habits begin early and
        evolve gradually with age.
      </p>

      <div className="divider" />

      <SleepSection
        age="0–3 Months"
        sleepNeeds="14–17 hours per day"
        routine={[
          "Sleep occurs in short cycles (day & night)",
          "No fixed bedtime yet",
          "Feed → burp → sleep pattern",
        ]}
        tips={[
          "Always place baby on back to sleep",
          "Day-night confusion is normal",
          "Respond promptly to cries",
        ]}
      />

      <SleepSection
        age="3–6 Months"
        sleepNeeds="12–16 hours per day"
        routine={[
          "Longer night sleep begins",
          "2–3 daytime naps",
          "Gentle bedtime cues can start",
        ]}
        tips={[
          "Introduce consistent bedtime routine",
          "Dim lights before sleep",
          "Avoid overstimulation at night",
        ]}
      />

      <SleepSection
        age="6–12 Months"
        sleepNeeds="12–14 hours per day"
        routine={[
          "2 daytime naps",
          "Longer uninterrupted night sleep",
          "Bedtime routine becomes important",
        ]}
        tips={[
          "Consistent bedtime & wake time",
          "Comfort without feeding every wake",
          "Safe sleep environment is essential",
        ]}
      />

      <SleepSection
        age="1–2 Years"
        sleepNeeds="11–14 hours per day"
        routine={[
          "1–2 daytime naps",
          "Predictable bedtime routine",
          "Night awakenings may occur",
        ]}
        tips={[
          "Avoid screens before bedtime",
          "Calm activities before sleep",
          "Gentle reassurance for night waking",
        ]}
      />

      <SleepSection
        age="2–3 Years"
        sleepNeeds="11–13 hours per day"
        routine={[
          "Usually 1 nap",
          "Clear bedtime expectations",
          "Sleep resistance may appear",
        ]}
        tips={[
          "Stick to routine even on weekends",
          "Use comfort objects if helpful",
          "Avoid late naps",
        ]}
      />

      <SleepSection
        age="3–5 Years"
        sleepNeeds="10–13 hours per day"
        routine={[
          "Most children drop daytime naps",
          "Early bedtime is beneficial",
          "Imagination may affect sleep",
        ]}
        tips={[
          "Storytime before bed helps relaxation",
          "Limit sugar & screen exposure at night",
          "Night fears are common and normal",
        ]}
      />

      <div className="divider" />

      <div className="alert">
        <h2>When to Seek Help</h2>
        <ul>
          <li>Persistent sleep difficulties affecting daytime behavior</li>
          <li>Loud snoring or breathing pauses during sleep</li>
          <li>Extreme difficulty settling despite routine</li>
          <li>Sudden changes in sleep patterns</li>
        </ul>
      </div>

      <p style={{ fontSize: "13px", color: "#777", marginTop: "24px" }}>
        Disclaimer: Sleep patterns vary among children. This content is
        educational and does not replace pediatric medical advice.
      </p>
    </main>
  );
}

/* ---------- COMPONENT ---------- */

function SleepSection({
  age,
  sleepNeeds,
  routine,
  tips,
}: {
  age: string;
  sleepNeeds: string;
  routine: string[];
  tips: string[];
}) {
  return (
    <section className="card">
      <h2>{age}</h2>

      <p>
        <strong>Recommended Sleep:</strong> {sleepNeeds}
      </p>

      <h3>🕒 Typical Routine</h3>
      <ul>
        {routine.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      <h3>🌙 Sleep Tips</h3>
      <ul>
        {tips.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
