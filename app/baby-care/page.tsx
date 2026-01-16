import Link from "next/link";

export default function BabyCarePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF7F3",
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

      {/* Page Header */}
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        Baby Care & Nutrition (0–5 Years)
      </h1>
      <p style={{ maxWidth: "820px", color: "#555", lineHeight: "1.7" }}>
        Evidence-based guidance for infant and early childhood nutrition,
        supporting brain development, immunity, physical growth, and healthy
        eating habits from birth to 5 years.
      </p>

      <Divider />

      {/* 0–6 Months */}
      <AgeSection
        title="0–6 Months (Exclusive Feeding Phase)"
        principles={[
          "Exclusive breast milk or formula only",
          "Feed on demand (day & night)",
          "Supports immunity and brain development",
        ]}
        weeklyPlan={[
          "Breast milk / formula only (no solids)",
          "No water, honey, sugar, or salt",
          "Frequent small feeds",
        ]}
        avoid={[
          "Animal milk",
          "Solid or semi-solid foods",
          "Juices or sweetened liquids",
        ]}
      />

      {/* 6–12 Months */}
      <AgeSection
        title="6–12 Months (Complementary Feeding Begins)"
        principles={[
          "Introduce solids slowly alongside milk",
          "Texture progression: mashed → soft",
          "Iron-rich foods are essential",
        ]}
        weeklyPlan={[
          "Monday: Mashed banana, rice cereal",
          "Tuesday: Steamed & mashed carrot, breast milk",
          "Wednesday: Apple puree, soft dal water",
          "Thursday: Mashed potato, breast milk",
          "Friday: Oats porridge, mashed fruit",
          "Saturday: Soft khichdi (rice + lentil)",
          "Sunday: Mixed vegetable mash",
        ]}
        avoid={[
          "Salt, sugar, honey",
          "Hard foods (choking risk)",
          "Packaged baby snacks",
        ]}
      />

      {/* 1–2 Years */}
      <AgeSection
        title="1–2 Years (Family Foods Introduction)"
        principles={[
          "3 meals + 2 snacks daily",
          "Balanced carbohydrates, protein & fats",
          "Encourage self-feeding",
        ]}
        weeklyPlan={[
          "Monday: Vegetable khichdi, fruit snack",
          "Tuesday: Soft chapati + dal, curd",
          "Wednesday: Rice, vegetables, ghee",
          "Thursday: Dosa, vegetable mash",
          "Friday: Idli, sambar (soft)",
          "Saturday: Paneer mash, fruits",
          "Sunday: Home-cooked mixed meal",
        ]}
        avoid={[
          "Sugary drinks",
          "Fried foods",
          "Force feeding",
        ]}
      />

      {/* 2–3 Years */}
      <AgeSection
        title="2–3 Years (Structured Eating Habits)"
        principles={[
          "Family meals encouraged",
          "Protein for muscle growth",
          "Calcium for bone development",
        ]}
        weeklyPlan={[
          "Monday: Rice, dal, vegetables",
          "Tuesday: Chapati, paneer, fruit",
          "Wednesday: Vegetable pulao, curd",
          "Thursday: Dosa, vegetables",
          "Friday: Eggs / paneer, rice",
          "Saturday: Mixed veg meal",
          "Sunday: Balanced family food",
        ]}
        avoid={[
          "Ultra-processed foods",
          "Excess sweets",
          "Skipping meals",
        ]}
      />

      {/* 3–5 Years */}
      <AgeSection
        title="3–5 Years (Growth & Learning Phase)"
        principles={[
          "Protein-rich meals for strength",
          "Fruits & vegetables daily",
          "Healthy routine eating",
        ]}
        weeklyPlan={[
          "Monday: Rice, dal, vegetables",
          "Tuesday: Chapati, curd, fruit",
          "Wednesday: Vegetable pasta (home-made)",
          "Thursday: Egg / paneer meal",
          "Friday: Khichdi, ghee",
          "Saturday: Balanced family meal",
          "Sunday: Special home meal (controlled)",
        ]}
        avoid={[
          "Junk food dependency",
          "Sugary beverages",
          "Overeating sweets",
        ]}
      />

      <Divider />

      {/* Disclaimer */}
      <p style={{ fontSize: "13px", color: "#777", maxWidth: "800px" }}>
        Disclaimer: This content is for educational purposes only and does not
        replace professional medical advice. Always consult a pediatrician for
        personalized guidance.
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

function AgeSection({
  title,
  principles,
  weeklyPlan,
  avoid,
}: {
  title: string;
  principles: string[];
  weeklyPlan: string[];
  avoid: string[];
}) {
  return (
    <section
      style={{
        backgroundColor: "white",
        borderRadius: "18px",
        padding: "24px",
        marginBottom: "32px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        maxWidth: "900px",
      }}
    >
      <h2 style={{ marginBottom: "12px" }}>{title}</h2>

      <Block title="Key Principles" items={principles} icon="✅" />
      <Block title="Weekly Diet Plan" items={weeklyPlan} icon="🍽️" />
      <Block title="Avoid" items={avoid} icon="🚫" />
    </section>
  );
}

function Block({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3 style={{ marginBottom: "8px" }}>
        {icon} {title}
      </h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "6px", color: "#444" }}>
            {icon} {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
