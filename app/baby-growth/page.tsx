import PageContainer from "../components/PageContainer";
import InfoSection from "../components/InfoSection";
import BabyGrowthClient from "./BabyGrowthClient";

export default function BabyGrowthPage() {
  return (
    <PageContainer title="Baby Growth">
      {/* FREE CONTENT */}
      <InfoSection
        title="6–12 Months"
        subtitle="Introducing solids"
        points={[
          "Start with soft purees",
          "Introduce one food at a time",
          "Avoid added sugar & salt",
        ]}
      />

      <InfoSection
        title="1–3 Years"
        subtitle="Balanced toddler nutrition"
        points={[
          "Family meals encouraged",
          "High-fiber foods",
          "Limit junk food & sugary drinks",
        ]}
      />

      {/* PREMIUM SECTION */}
      <BabyGrowthClient />
    </PageContainer>
  );
}
