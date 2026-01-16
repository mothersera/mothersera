"use client";

import { useEffect, useState } from "react";

function getInitialPremiumState(): boolean {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);

  if (params.get("premium") === "success") {
    localStorage.setItem("babyGrowthPremium", "true");
    return true;
  }

  return localStorage.getItem("babyGrowthPremium") === "true";
}

export default function BabyGrowthClient() {
  // ✅ Compute once, before render (NO cascading renders)
  const [isPremium] = useState<boolean>(getInitialPremiumState);

  // ✅ Side-effect only (URL cleanup)
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("premium")) {
      url.searchParams.delete("premium");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return (
    <section style={{ marginTop: "48px" }}>
      {isPremium ? (
        <div
          style={{
            padding: "28px",
            borderRadius: "20px",
            backgroundColor: "#ECFEFF",
            border: "1px solid #67E8F9",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            ✅ Premium Growth Plans Unlocked
          </h2>

          <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>Personalized nutrition schedules</li>
            <li>Doctor-approved meal plans</li>
            <li>Growth milestone tracking</li>
            <li>Smart food substitutions</li>
          </ul>
        </div>
      ) : (
        <div
          style={{
            padding: "28px",
            borderRadius: "20px",
            backgroundColor: "#FFF7ED",
            border: "1px solid #FDBA74",
          }}
        >
          <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
            🔒 Premium Growth Plans
          </h2>

          <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
            Unlock personalized nutrition plans and expert growth guidance.
          </p>

          <a
            href="/api/checkout"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: "12px",
              backgroundColor: "#0EA5E9",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Unlock Premium (£20)
          </a>
        </div>
      )}
    </section>
  );
}
