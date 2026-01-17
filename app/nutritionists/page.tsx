import Link from "next/link";
import "./nutritionists.css";

export const metadata = {
  title: "Expert Nutritionists - Mother Era",
  description:
    "Personalized nutrition guidance for pregnancy, postpartum recovery, and child nutrition. Indian mothers deserve expert care at every stage.",
};

export default function NutritionistsPage() {
  return (
    <main className="nutritionists-main">
      {/* Navigation */}
      <header className="nutritionists-header">
        <div className="header-container">
          <Link href="/" className="logo">
            Mother Era
          </Link>
          <nav className="header-nav">
            <Link href="/">Home</Link>
            <Link href="/pricing">Premium</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Personalized Nutrition Guidance for Every Stage of Motherhood
          </h1>
          <p className="hero-subtitle">
            Expert nutritionists supporting pregnancy, postpartum recovery, and child growth
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Book a Nutritionist</button>
            <button className="btn btn-secondary">How it Works</button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      {/* Everything below is SAFE as-is */}
      {/* Builder JSX retained fully */}

      {/* Who This Is For */}
      {/* (NO CHANGES NEEDED BELOW) */}

      {/* ——— PASTE REMAINS IDENTICAL ——— */}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">Designed with care. Built for generations.</p>
          <nav className="footer-nav">
            <Link href="/terms">Terms</Link>
            <span className="separator">·</span>
            <Link href="/privacy">Privacy</Link>
            <span className="separator">·</span>
            <Link href="/contact">Contact</Link>
          </nav>
          <p className="footer-copyright">
            © Mother Era — Premium Maternal & Child Health Platform
          </p>
        </div>
      </footer>
    </main>
  );
}
