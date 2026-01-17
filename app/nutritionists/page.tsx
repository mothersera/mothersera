"use client";

import Link from "next/link";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function NutritionistPage() {
  return (
    <main className="nutritionist-main">
      {/* TOP NAV */}
      <header className="nutritionist-header">
        <div className="nav-container">
          <Link href="/" className="logo">
            Mother Era
          </Link>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/pricing">Premium</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Personalized Nutrition Guidance for Every Stage of Motherhood
          </h1>
          <p className="hero-subtitle">
            Expert nutritionists supporting pregnancy, postpartum recovery, and child growth
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Book a Nutritionist</button>
            <button className="btn-secondary">Learn How It Works</button>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <Section
        title="Who This Is For"
        subtitle="Our nutritionists specialize in every stage of motherhood. Whether you're planning for pregnancy or nurturing your growing child, we have the expertise you need."
      >
        <div className="cards-grid">
          <FeatureCard
            icon="🤰"
            title="Pregnant Women"
            description="Trimester-based nutrition plans for optimal fetal development, managing cravings, weight gain, and energy levels throughout pregnancy."
          />
          <FeatureCard
            icon="🍼"
            title="New Mothers"
            description="Postpartum recovery support, lactation nutrition optimization, energy restoration, and safe eating for breastfeeding."
          />
          <FeatureCard
            icon="⚕️"
            title="Mothers with Specific Conditions"
            description="Specialized guidance for gestational diabetes, anemia, PCOS, thyroid issues, and other maternal health conditions."
          />
          <FeatureCard
            icon="👶"
            title="Mothers Focused on Child Nutrition"
            description="Expert meal planning for children 0–5 years, introducing solids, growth tracking, and building healthy eating habits."
          />
        </div>
      </Section>

      {/* WHAT WE HELP WITH */}
      <Section
        title="What Our Nutritionists Help With"
        subtitle="Expert support across all your nutritional needs at every stage of motherhood."
      >
        <div className="benefits-container">
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🥗</span>
              <h3 className="benefit-title">Personalized Diet Plans</h3>
              <p className="benefit-text">
                Customized meal plans tailored to your health goals, food preferences, and cultural dietary needs.
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚖️</span>
              <h3 className="benefit-title">Weight & Nutrient Management</h3>
              <p className="benefit-text">
                Healthy weight gain during pregnancy, postpartum weight management, and essential nutrient optimization.
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🥛</span>
              <h3 className="benefit-title">Lactation & Breastfeeding Nutrition</h3>
              <p className="benefit-text">
                Nutrition strategies to boost milk supply, maintain energy, and support both mother and baby's health.
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏥</span>
              <h3 className="benefit-title">Managing Pregnancy-Related Conditions</h3>
              <p className="benefit-text">
                Evidence-based nutrition therapy for gestational diabetes, anemia, hyperemesis, and other maternal conditions.
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🍽️</span>
              <h3 className="benefit-title">Child Meal Planning & Growth Tracking</h3>
              <p className="benefit-text">
                Balanced meals for growing children, micronutrient optimization, and alignment with developmental milestones.
              </p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📊</span>
              <h3 className="benefit-title">Ongoing Nutritional Counseling</h3>
              <p className="benefit-text">
                Regular check-ins, plan adjustments, and expert guidance as your needs evolve through motherhood.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        title="How It Works"
        subtitle="A simple, 4-step process to get personalized nutrition support."
      >
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Choose a Nutritionist</h3>
            <p className="step-text">
              Browse certified maternal nutritionists with expertise in pregnancy, postpartum, and child nutrition.
            </p>
          </div>
          <div className="step-divider">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Share Health Details</h3>
            <p className="step-text">
              Provide your medical history, dietary preferences, goals, and any specific health concerns.
            </p>
          </div>
          <div className="step-divider">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Get Customized Nutrition Plan</h3>
            <p className="step-text">
              Receive a personalized meal plan aligned with your health needs, culture, and lifestyle.
            </p>
          </div>
          <div className="step-divider">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Ongoing Expert Support</h3>
            <p className="step-text">
              Stay connected via chat or video consultations for adjustments and continuous guidance.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE MOTHER ERA */}
      <Section
        title="Why Choose Mother Era"
        subtitle="Trust, expertise, and personalized care at every step of your motherhood journey."
      >
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3 className="trust-title">Certified Maternal Nutritionists</h3>
            <p className="trust-text">
              All nutritionists are certified and specialize in pregnancy, postpartum, and pediatric nutrition.
            </p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3 className="trust-title">Evidence-Based Guidance</h3>
            <p className="trust-text">
              Every recommendation is backed by latest research and international maternal health guidelines.
            </p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3 className="trust-title">Private & Secure Consultations</h3>
            <p className="trust-text">
              Your health data is encrypted and protected. Complete privacy for your nutrition journey.
            </p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3 className="trust-title">Designed for Indian Mothers</h3>
            <p className="trust-text">
              Nutrition guidance respects Indian dietary traditions, local foods, and cultural health practices.
            </p>
          </div>
        </div>
      </Section>

      {/* EXPERT GUIDANCE HIGHLIGHT */}
      <section className="expert-guidance-section">
        <div className="expert-container">
          <h2 className="expert-title">Expert Guidance You Can Trust</h2>
          <p className="expert-subtitle">
            More than just meal plans — a holistic approach to your health and your baby's development.
          </p>
          <div className="expert-features">
            <div className="expert-feature">
              <span className="expert-feature-icon">👥</span>
              <h3>One-on-One Live Consultations</h3>
              <p>
                Connect with your nutritionist via video or phone for personalized advice and real-time answers to your questions.
              </p>
            </div>
            <div className="expert-feature">
              <span className="expert-feature-icon">👶</span>
              <h3>Holistic Approach (Mother + Baby)</h3>
              <p>
                We consider both maternal health and your child's development, ensuring optimal nutrition for the entire family.
              </p>
            </div>
            <div className="expert-feature">
              <span className="expert-feature-icon">📅</span>
              <h3>Continuous Follow-Ups</h3>
              <p>
                Regular check-ins ensure your nutrition plan evolves with your changing needs and your child's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section
        title="What Mothers Are Saying"
        subtitle="Real stories from mothers who transformed their nutrition and their families' health."
      >
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The nutrition plan helped me manage gestational diabetes without stress. My nutritionist explained everything in simple terms and adjusted the plan based on my test results. Highly recommend!"
              </p>
            </div>
            <div className="testimonial-author">
              <p className="author-name">Priya Sharma</p>
              <p className="author-title">Pregnant, 28 Weeks</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Post-delivery, I struggled with energy and breastfeeding. The lactation nutrition plan made such a difference. My milk supply improved and I felt stronger within weeks."
              </p>
            </div>
            <div className="testimonial-author">
              <p className="author-name">Anjali Desai</p>
              <p className="author-title">New Mother, 3 Months Postpartum</p>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "My 2-year-old was a picky eater until we got help with meal planning. Now she enjoys a variety of healthy foods, and I'm confident she's getting all the nutrients she needs."
              </p>
            </div>
            <div className="testimonial-author">
              <p className="author-name">Meera Patel</p>
              <p className="author-title">Mother of Toddler</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Start Your Nutrition Journey Today</h2>
          <p className="cta-subtitle">
            Get personalized guidance from certified nutritionists who understand every stage of motherhood.
          </p>
          <button className="btn-primary btn-large">Talk to a Nutrition Expert</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nutritionist-footer">
        <p>Designed with care. Built for generations.</p>
        <div className="footer-links">
          <Link href="/terms">Terms</Link> ·{" "}
          <Link href="/privacy">Privacy</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-copyright">
          © Mother Era — Premium Maternal & Child Health Platform
        </p>
      </footer>

      <style jsx>{`
        /* Layout & Structure */
        .nutritionist-main {
          min-height: 100vh;
          background-color: #f7efe9;
          font-family: system-ui, -apple-system, BlinkMacSystemFont;
          color: #3e2f2a;
        }

        /* Header */
        .nutritionist-header {
          padding: 20px 24px;
          border-bottom: 1px solid #efe6e1;
          background-color: #fdf7f3;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
          color: #3e2f2a;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          font-size: 14px;
        }

        .nav-links a {
          text-decoration: none;
          color: #5f5f5f;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #3e2f2a;
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 24px;
          text-align: center;
          background: linear-gradient(135deg, #fdf7f3 0%, #fef1ea 100%);
        }

        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #2e2e2e;
          line-height: 1.3;
        }

        .hero-subtitle {
          font-size: 18px;
          max-width: 720px;
          margin: 0 auto 40px;
          color: #5f5f5f;
          line-height: 1.7;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Buttons */
        .btn-primary {
          background-color: #e8a8a0;
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(232, 168, 160, 0.3);
        }

        .btn-primary:hover {
          background-color: #e06c75;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: #e8a8a0;
          padding: 14px 28px;
          border: 2px solid #e8a8a0;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background-color: #f3c6c0;
          border-color: #e06c75;
          color: #fff;
        }

        .btn-large {
          padding: 16px 40px;
          font-size: 16px;
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Benefits Section */
        .benefits-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .benefit-item {
          padding: 32px 24px;
          background-color: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          text-align: center;
          transition: box-shadow 0.2s ease;
        }

        .benefit-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .benefit-icon {
          font-size: 36px;
          display: block;
          margin-bottom: 16px;
        }

        .benefit-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #2e2e2e;
        }

        .benefit-text {
          font-size: 14px;
          color: #5f5f5f;
          line-height: 1.6;
        }

        /* Steps Section */
        .steps-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .step {
          flex: 1;
          min-width: 200px;
          text-align: center;
          padding: 24px;
          background-color: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: #e8a8a0;
          color: white;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #2e2e2e;
        }

        .step-text {
          font-size: 14px;
          color: #5f5f5f;
          line-height: 1.6;
        }

        .step-divider {
          font-size: 24px;
          color: #e8a8a0;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
        }

        @media (max-width: 768px) {
          .steps-container {
            flex-direction: column;
          }

          .step-divider {
            transform: rotate(90deg);
          }
        }

        /* Trust Cards */
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .trust-card {
          padding: 28px;
          background-color: #ffffff;
          border: 2px solid #e8a8a0;
          border-radius: 14px;
          text-align: center;
        }

        .trust-icon {
          font-size: 32px;
          color: #e8a8a0;
          margin-bottom: 12px;
          display: block;
        }

        .trust-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #2e2e2e;
        }

        .trust-text {
          font-size: 14px;
          color: #5f5f5f;
          line-height: 1.6;
        }

        /* Expert Guidance Section */
        .expert-guidance-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #fef1ea 0%, #f7efe9 100%);
          margin: 60px 0;
        }

        .expert-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .expert-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #2e2e2e;
        }

        .expert-subtitle {
          font-size: 18px;
          max-width: 720px;
          margin: 0 auto 48px;
          color: #5f5f5f;
          line-height: 1.7;
        }

        .expert-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .expert-feature {
          padding: 32px 24px;
          background-color: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          text-align: center;
        }

        .expert-feature-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 16px;
        }

        .expert-feature h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #2e2e2e;
        }

        .expert-feature p {
          font-size: 14px;
          color: #5f5f5f;
          line-height: 1.6;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .testimonial-card {
          padding: 32px;
          background-color: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border-left: 4px solid #e8a8a0;
        }

        .testimonial-content {
          margin-bottom: 24px;
        }

        .testimonial-text {
          font-size: 15px;
          color: #5f5f5f;
          line-height: 1.8;
          font-style: italic;
        }

        .testimonial-author {
          border-top: 1px solid #efe6e1;
          padding-top: 16px;
        }

        .author-name {
          font-size: 15px;
          font-weight: 600;
          color: #2e2e2e;
          margin: 0;
        }

        .author-title {
          font-size: 13px;
          color: #8a8a8a;
          margin: 4px 0 0 0;
        }

        /* Final CTA */
        .final-cta-section {
          padding: 80px 24px;
          text-align: center;
          background: linear-gradient(135deg, #fdf7f3 0%, #fef1ea 100%);
        }

        .cta-container {
          max-width: 720px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #2e2e2e;
        }

        .cta-subtitle {
          font-size: 18px;
          color: #5f5f5f;
          margin-bottom: 32px;
          line-height: 1.7;
        }

        /* Footer */
        .nutritionist-footer {
          padding: 40px 24px;
          margin-top: 80px;
          border-top: 1px solid #efe6e1;
          text-align: center;
          font-size: 14px;
          color: #7a6a63;
          background-color: #fdf7f3;
        }

        .footer-links {
          margin-top: 12px;
        }

        .footer-links a {
          text-decoration: none;
          color: #7a6a63;
          margin: 0 8px;
        }

        .footer-links a:hover {
          color: #3e2f2a;
        }

        .footer-copyright {
          margin-top: 12px;
          font-size: 12px;
          color: #9a8a83;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .nav-links {
            gap: 12px;
            font-size: 12px;
          }

          .expert-title {
            font-size: 28px;
          }

          .cta-title {
            font-size: 28px;
          }

          .benefits-grid,
          .trust-grid,
          .expert-features,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .step-divider {
            display: none;
          }

          .steps-container {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
