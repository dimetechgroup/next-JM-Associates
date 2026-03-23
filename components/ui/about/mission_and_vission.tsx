"use client";
import { MarginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  FaRegSmile,
  FaRegFileAlt,
  FaUserFriends,
  FaAward,
} from "react-icons/fa";

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const pct = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 3);
            setValue(Math.round(eased * target));
            if (pct < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

/* ── Stat card ── */
const statData = [
  { icon: FaAward, label: "Years of Experience", value: 10, suffix: "+" },
  { icon: FaRegFileAlt, label: "Projects Completed", value: 1240, suffix: "" },
  { icon: FaRegSmile, label: "Happy Clients", value: 2187, suffix: "" },
  { icon: FaUserFriends, label: "Client Satisfaction", value: 98, suffix: "%" },
];

function StatCard({ icon: Icon, label, value, suffix }: (typeof statData)[0]) {
  const { value: count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "2px",
        padding: "2.5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        borderTop: "4px solid #C0392B",
        boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 40px rgba(192,57,43,0.18)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 24px rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{ background: "#FEF0EE", borderRadius: "50%", padding: "1rem" }}
      >
        <Icon size={28} color="#C0392B" />
      </div>
      <p
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          fontFamily: "'Playfair Display', serif",
          color: "#1a1a1a",
          lineHeight: 1,
          margin: 0,
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </p>
      <p
        style={{
          fontSize: "0.72rem",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.12em",
          color: "#888",
          textTransform: "uppercase",
          margin: 0,
          fontWeight: 600,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Tab content ── */
const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    heading: "What Drives Us",
    body: "To be a brand that delivers quality service to our clients and lasting value to our employees and stakeholders — fostering growth, trust, and excellence at every engagement.",
    accent: "MISSION",
  },
  {
    id: "vision",
    label: "Our Vision",
    heading: "Where We're Headed",
    body: "To be the preferred innovative audit and assurance, tax, and advisory firm across Africa — setting new benchmarks for integrity, insight, and impact on the continent.",
    accent: "VISION",
  },
  {
    id: "values",
    label: "Core Values",
    heading: "The Principles We Stand By",
    body: "To ensure relevance, quality, and effectiveness in each assignment, we embrace four foundational principles: Integrity, Excellence, Collaboration, and Innovation — the pillars supporting every service we deliver.",
    accent: "VALUES",
  },
];

/* ── Main component ── */
const CompanyOverview = () => {
  const [active, setActive] = useState("mission");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .stat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .stat-grid { grid-template-columns: 1fr; } }

        .tab-btn {
          background: none; border: none; cursor: pointer; padding: 0.75rem 0;
          font-family: 'DM Sans', sans-serif; font-size: 0.78rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 600; color: #aaa;
          position: relative; transition: color 0.2s;
        }
        .tab-btn.active { color: #C0392B; }
        .tab-btn::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0;
          height: 2px; background: #C0392B; transition: width 0.3s ease;
        }
        .tab-btn.active::after { width: 100%; }
        .tab-btn:hover { color: #C0392B; }

        .tab-panel { animation: fadeUp 0.4s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .divider-line {
          display: inline-block;
          width: 48px; height: 3px; background: #C0392B;
          vertical-align: middle; margin-right: 12px;
        }
      `}</style>

      <Box py={14} bg="#F7F6F3" fontFamily="'DM Sans', sans-serif">
        <Box marginX={MarginX}>
          {/* ── Stats ── */}
          <div className="stat-grid">
            {statData.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* ── Section header ── */}
          <Box mt={16} mb={8} textAlign="center">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C0392B",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              Who We Are
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Company Overview
            </h2>
            <div
              style={{
                margin: "1rem auto 0",
                width: "56px",
                height: "3px",
                background: "#C0392B",
                borderRadius: "2px",
              }}
            />
          </Box>

          {/* ── Overview panel ── */}
          <Box
            bg="#fff"
            borderRadius="2px"
            boxShadow="0 2px 32px rgba(0,0,0,0.07)"
            overflow="hidden"
            display={{ md: "grid" }}
            style={{ gridTemplateColumns: "1fr 2fr" }}
          >
            {/* Left sidebar — tab list */}
            <Box
              bg="#1a1a1a"
              p={8}
              display="flex"
              flexDir="column"
              gap={2}
              justifyContent="center"
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  color: "#666",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                Navigate
              </p>
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn${active === t.id ? " active" : ""}`}
                  onClick={() => setActive(t.id)}
                  style={{ textAlign: "left" }}
                >
                  {t.label}
                </button>
              ))}

              {/* Decorative accent */}
              <div style={{ marginTop: "auto", paddingTop: "3rem" }}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.04)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    userSelect: "none",
                    transition: "opacity 0.4s",
                  }}
                >
                  {activeTab.accent}
                </p>
              </div>
            </Box>

            {/* Right content */}
            <Box
              p={{ base: 8, md: 12 }}
              display="flex"
              flexDir="column"
              justifyContent="center"
            >
              <div key={active} className="tab-panel">
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    color: "#C0392B",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  <span className="divider-line" />
                  {activeTab.label}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                    marginBottom: "1.25rem",
                  }}
                >
                  {activeTab.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
                    color: "#555",
                    lineHeight: 1.8,
                    maxWidth: "540px",
                  }}
                >
                  {activeTab.body}
                </p>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CompanyOverview;
