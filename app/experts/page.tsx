export default function ExpertsPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F3] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Guidance for Mothers
          </h1>
          <p className="text-lg text-gray-600">
            Connect with certified nutritionists and maternal health experts
            for every stage of motherhood.
          </p>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-gray-700">
            Whether you are planning pregnancy, currently pregnant,
            postpartum, or caring for a growing child — our experts provide
            science-backed nutrition and wellness guidance.
          </p>
        </section>

        {/* EXPERT CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ExpertCard
            title="Pregnancy Nutrition"
            description="Trimester-wise meal plans, supplements, and lifestyle advice."
          />
          <ExpertCard
            title="Postpartum Recovery"
            description="Healing, lactation nutrition, and emotional wellbeing."
          />
          <ExpertCard
            title="Child Growth"
            description="Nutrition plans for infants, toddlers, and young children."
          />
        </section>

        {/* CTA */}
        <section className="text-center">
          <button className="bg-[#E89A8C] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Book a Nutritionist
          </button>
        </section>
      </div>
    </main>
  );
}

function ExpertCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
