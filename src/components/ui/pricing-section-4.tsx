"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

type PlanCard = {
  name: string;
  price: string;
  hosting: string;
  maintenance: string;
  popular?: boolean;
  // features?: string[];
};

export const templateFeatures = [
  "60 Days Deployment & Infrastructure Support",
  "Complete Server Setup & Configuration",
  "Domain, DNS & Go-Live Setup",
  "SSL (HTTPS) Setup & Secure Configuration",
  "Basic Firewall & Bot Protection Setup",
  "Enterprise-Grade Security Baseline Implementation",
  "60 Days Maintenance & Bug Fix Support",
  "Minor UI Adjustments & Stability Improvements",
  "Performance Optimization & Speed Tuning",
  "Asset Optimization (Images, Scripts, Lazy Loading)",
  "Analytics Integration (User Tracking & Events)",
  "Basic Dashboard Setup for Insights",
  "Uptime Monitoring & Downtime Alerts",
  "Automated Backup & Recovery Setup",
  "Email & Notification System Setup",
  "Contact Form & Lead Capture Integration",
  "Post-Launch Optimization & Improvements",
  "Limited Technical Consultation (2–3 sessions)",
  "Basic SEO Setup (Meta Tags, Sitemap)",
  "CDN Setup for Faster Global Delivery",
  "Error Logging & Monitoring Setup",
];

type RegionData = {
  currency: string;
  flag: string;
  web: PlanCard[];
  androidIos: PlanCard[];
  hybrid: PlanCard[];
  desktop: PlanCard[];
  ERP: PlanCard[];
};

const data: Record<"india" | "nz", RegionData> = {
  india: {
    currency: "₹",
    flag: "🇮🇳",
    web: [
      {
        name: "Static Website",
        price: "50,000",
        hosting: "3,600 – 6,000",
        maintenance: "10,000",
      },
      {
        name: "Full Stack Website",
        price: "1.5– 3 Lakhs",
        hosting: "6,000 – 7,200",
        maintenance: "18,000",
        popular: true,
      },
      {
        name: "E-Commerce Website",
        price: "3– 6 Lakhs",
        hosting: "7,200 – 9,000",
        maintenance: "25,000",
      },
    ],
    androidIos: [
      {
        name: "Simple",
        price: "3– 9 Lakhs",
        hosting: "18,000",
        maintenance: "36,000",
      },
      {
        name: "Moderate",
        price: "12– 30 Lakhs",
        hosting: "24,000",
        maintenance: "48,000",
        popular: true,
      },
      {
        name: "Complex",
        price: "36 Lakhs+",
        hosting: "39k+",
        maintenance: "78k+",
      },
    ],
    hybrid: [
      {
        name: "Simple",
        price: "3.6– 9.6 Lakhs",
        hosting: "18k",
        maintenance: "36k",
      },
      {
        name: "Moderate",
        price: "15– 30 Lakhs",
        hosting: "24k",
        maintenance: "48k",
        popular: true,
      },
      {
        name: "Complex",
        price: "48 Lakhs+",
        hosting: "39k+",
        maintenance: "78k+",
      },
    ],
    desktop: [
      {
        name: "Simple",
        price: "4.8– 10.8 Lakhs",
        hosting: "18k",
        maintenance: "36k",
      },
      {
        name: "Moderate",
        price: "16.8– 33 Lakhs",
        hosting: "24k",
        maintenance: "48k",
        popular: true,
      },
      {
        name: "Complex",
        price: "51 Lakhs+",
        hosting: "39k+",
        maintenance: "78k+",
      },
    ],
    ERP: [
      {
        name: "Simple",
        price: "5.3– 7 Lakhs",
        hosting: "18k",
        maintenance: "36k",
      },
      {
        name: "Moderate",
        price: "8.3– 10 Lakhs",
        hosting: "24k",
        maintenance: "48k",
        popular: true,
      },
      {
        name: "Complex",
        price: "12 Lakhs+",
        hosting: "39k+",
        maintenance: "78k+",
      },
    ],
  },
  nz: {
    currency: "NZ$",
    flag: "🇳🇿",
    web: [
      {
        name: "Static Website",
        price: "2,500",
        hosting: "60 – 100",
        maintenance: "300",
      },
      {
        name: "Full Stack Website",
        price: "5-10k",
        hosting: "100 – 120",
        maintenance: "300",
        popular: true,
      },
      {
        name: "E-Commerce Website",
        price: "8-15k",
        hosting: "120 – 150",
        maintenance: "500",
      },
    ],
    androidIos: [
      {
        name: "Simple",
        price: "5-15k",
        hosting: "300",
        maintenance: "600",
      },
      {
        name: "Moderate",
        price: "20-50k",
        hosting: "400",
        maintenance: "800",
        popular: true,
      },
      {
        name: "Complex",
        price: "60k+",
        hosting: "650+",
        maintenance: "1.3k+",
      },
    ],
    hybrid: [
      {
        name: "Simple",
        price: "6-16k",
        hosting: "300",
        maintenance: "600",
      },
      {
        name: "Moderate",
        price: "25-50k",
        hosting: "400",
        maintenance: "800",
        popular: true,
      },
      {
        name: "Complex",
        price: "80k+",
        hosting: "650+",
        maintenance: "1.3k+",
      },
    ],
    desktop: [
      {
        name: "Simple",
        price: "8-18k",
        hosting: "300",
        maintenance: "600",
      },
      {
        name: "Moderate",
        price: "28-55k",
        hosting: "400",
        maintenance: "800",
        popular: true,
      },
      {
        name: "Complex",
        price: "85k+",
        hosting: "650+",
        maintenance: "1.3k+",
      },
    ],
    ERP: [
      {
        name: "Simple",
        price: "48k-108k",
        hosting: "18k",
        maintenance: "36k",
      },
      {
        name: "Moderate",
        price: "168k-330k",
        hosting: "24k",
        maintenance: "48k",
        popular: true,
      },
      {
        name: "Complex",
        price: "510k+",
        hosting: "39k+",
        maintenance: "78k+",
      },
    ],
  },
};

// ─── Region Toggle ────────────────────────────────────────────────────────────

const RegionSwitch = ({
  region,
  onSwitch,
}: {
  region: "india" | "nz";
  onSwitch: (value: "india" | "nz") => void;
}) => (
  <div className="flex justify-center">
    <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
      {(["india", "nz"] as const).map((r) => (
        <button
          key={r}
          onClick={() => onSwitch(r)}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-4 sm:py-2 py-1 font-medium transition-colors flex items-center gap-2",
            region === r ? "text-white" : "text-gray-400"
          )}
        >
          {region === r && (
            <motion.span
              layoutId="region-switch"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative text-lg">{data[r].flag}</span>
          <span className="relative text-sm font-semibold">
            {r === "india" ? "India" : "New Zealand"}
          </span>
        </button>
      ))}
    </div>
  </div>
);

// ─── Price Card ───────────────────────────────────────────────────────────────

const PriceCard = ({
  plan,
  currency,
  animationNum,
  timelineRef,
  revealVariants,
  category,
}: {
  plan: PlanCard;
  currency: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  revealVariants: Variants;
  category: string;
}) => {
  const subject = encodeURIComponent(`Quote Request: ${category} - ${plan.name}`);
  const body = encodeURIComponent(
    `Hi Xyronix Labs Support,\n\nI am interested in getting a quote for the "${plan.name}" plan under "${category}".\n\nPlease let me know the next steps.\n\nThanks,\n[Your Name]`
  );

  return (
    <TimelineContent
      as="div"
      animationNum={animationNum}
      timelineRef={timelineRef}
      customVariants={revealVariants}
      className="h-full"
    >
      <Card
        className={`relative text-white border-neutral-800 h-full flex flex-col ${plan.popular
          ? "bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 shadow-[0px_-8px_160px_0px_#0900ff] z-20"
          : "bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 z-10"
          }`}
      >
        <CardHeader className="text-left pb-3">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            {plan.popular && (
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                Popular
              </span>
            )}
          </div>
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Development Price
            </p>
            <p className="text-2xl font-bold text-white leading-tight">
              <span className="text-gray-400 text-lg mr-0.5">{currency}</span>
              {plan.price}
            </p>
            <p className="text-xs text-gray-500">One-time cost</p>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-1 space-y-4">
          <a
            href={`mailto:support@xyronixlabs.com?subject=${subject}&body=${body}`}
            className={`block text-center w-full py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90 ${plan.popular
              ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-900 border border-blue-500 text-white"
              : "bg-gradient-to-t from-neutral-950 to-neutral-700 shadow-lg shadow-neutral-900 border border-neutral-700 text-white"
              }`}
          >
            Get a Quote
          </a>

          <div className="border-t border-neutral-700 pt-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Hosting</span>
              <span className="text-sm font-medium text-gray-200">
                {currency} {plan.hosting}
                <span className="text-gray-500 text-xs"> /mo</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Maintenance</span>
              <span className="text-sm font-medium text-gray-200">
                {currency} {plan.maintenance}
                <span className="text-gray-500 text-xs"> /mo</span>
              </span>
            </div>
          </div>

          {/* <div className="border-t border-neutral-700 pt-3 space-y-3 flex-1 mt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Includes</span>
          <ul className="space-y-2.5 mb-2">
            {(plan.features || templateFeatures).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-300">
                <svg
                  className="w-4 h-4 mr-3 mt-0.5 text-blue-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-snug text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div> */}
        </CardContent>
      </Card>
    </TimelineContent>
  );
};

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-4 px-1">
    <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
    <div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PricingSection4() {
  const [region, setRegion] = useState<"india" | "nz">("india");
  const pricingRef = useRef<HTMLDivElement>(null);
  const current = data[region];

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.45 },
    }),
    hidden: { filter: "blur(10px)", y: -16, opacity: 0 },
  };

  const sections = [
    { key: "web" as const, title: "Web Development" },
    { key: "androidIos" as const, title: "App Development — Android / iOS" },
    { key: "hybrid" as const, title: "App Development — Hybrid" },
    { key: "desktop" as const, title: "App Development — Desktop" },
    { key: "ERP" as const, title: "ERP Development" },
  ];

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef}
    >
      {/* Top sparkle / grid background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      {/* Glow ellipses background */}
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="relative w-full h-full">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
              style={{
                border: "200px solid #3131f5",
                filter: "blur(92px)",
                WebkitFilter: "blur(92px)",
              }}
            />
          ))}
        </div>
      </TimelineContent>

      {/* Header */}
      <article className="text-center mb-10 pt-32 max-w-3xl mx-auto space-y-5 relative z-50 px-4">
        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Transparent Pricing for Every Project
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          Select your region to view local pricing — every plan includes
          dedicated support and clear deliverables.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <RegionSwitch region={region} onSwitch={setRegion} />
        </TimelineContent>
      </article>

      {/* Radial glow overlay */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #206ce8 0%, transparent 70%)`,
          opacity: 0.4,
          mixBlendMode: "multiply",
        }}
      />

      {/* All Pricing Sections */}
      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-14 relative z-10">
        {sections.map((section, sIdx) => (
          <div key={section.key}>
            <TimelineContent
              as="div"
              animationNum={2 + sIdx * 4}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <SectionHeader title={section.title} />
            </TimelineContent>

            <div className="grid md:grid-cols-3 gap-4">
              {current[section.key].map((plan, pIdx) => (
                <PriceCard
                  key={plan.name}
                  plan={plan}
                  currency={current.currency}
                  animationNum={3 + sIdx * 4 + pIdx}
                  timelineRef={pricingRef}
                  revealVariants={revealVariants}
                  category={section.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}