import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xyronixlabs.com"),

  title: {
    default: "Xyronix Labs",
    template: "%s | Xyronix Labs Pvt. Ltd.",
  },

  description:
    " To develop, provide, undertake, design, and consult in the fields of AI, Robotics, IoT, Defence Technologies, Space Technologies, and advanced software engineering, creating intelligent, interconnected, and autonomous systems capable of operating across terrestrial, aerial, maritime, and extra-terrestrial environments. This includes integrating real-time sensing, distributed analytics, autonomous decision-making, and high-precision control systems to deliver next-generation solutions across industries. The Company aims to drive innovation in emerging sectors such as national security, aerospace automation, satellite communication systems, smart infrastructure, and mission-critical robotics, enabling a future where machine intelligence amplifies human capability with unmatched accuracy, resilience, and scale. To establish and operate high-performance computing facilities, cloud and data-processing centers, digital command-and-control infrastructures, simulation environments, and AI research labs, and to provide consultancy and computational services to industrial, commercial, defence, governmental, and scientific organizations. This includes imparting training in electronics, robotics, AI models, autonomy systems, satellite technologies, and cutting-edge software and hardware engineering. To provide specialized consultancy in software development, information technology, AI-driven automation, data engineering, warehouse and fleet management, defence logistics systems, aerospace data solutions, and digital operations, and to act as dealers, distributors, integrators, agents, or representatives of domestic and global enterprises working in information technology, automation, robotics, space tech, defence systems, and all allied sectors. To design, develop, import, export, distribute, and implement advanced system software, mission-critical application software, AI-native platforms, robotic control stacks, microprocessor-based embedded systems, offshore development modules, space-oriented computational technologies, and internet-based services, including emerging areas such as enterprise resource planning, e-commerce, next-generation digital applications, aerospace communications, satellite payload systems, and defence-grade software. This includes developing such technologies for enterprises, manufacturers, defence organizations, aerospace agencies, telecom companies, digital infrastructure providers, and research institutions across India and abroad. To conceive, engineer, commercialize, and deploy software, AI systems, networking technologies, defence-grade communication platforms, and internet infrastructures for domestic and international markets, and to design, host, operate, or manage websites, portals, mission dashboards, digital communication systems, and online collaboration environments. This extends to creating advanced cyber-defence solutions, secure communication platforms, and enterprise email ecosystems such as XyroMail. To develop, integrate, convert, commercialize, and support products and solutions in the fields of computer software, digital authentication, robotics, autonomous machines, defence and aerospace hardware, satellite systems, sensors, AI firmware, and specialized computing systems for national and global clients. This includes providing facility management, maintenance contracts, robotics and automation integration, hardware/software support, cloud and infrastructure management, digital mapping, satellite-aligned projects, geospatial systems, and manpower provisioning for high-technology domains. To carry on the business of full-spectrum software engineering, including design, development, customization, implementation, maintenance, testing, benchmarking, lifecycle management, and distribution of proprietary and third-party software. This includes developing and hosting web-based applications, AI-driven platforms, SaaS products, internal enterprise solutions, and sector-specific technologies such as Fire Early Warning & Suppression Systems, defence automation solutions, and aerospace communication platforms. The Company shall undertake global IT assignments through onsite/offsite models, deliver HR and technology consultancy, supply skilled personnel, and provide solutions through cloud-driven or application service provider (ASP) frameworks. This also includes offering IT-enabled services such as data processing, back-office operations, network and data-center management, and specialized consultancy across all aforementioned technological areas. To conceptualize, innovate, and launch high-impact technological products across multiple sectors—public safety, enterprise communication (e.g., XyroMail), robotics, defence, space technology, smart infrastructure, and industrial automation—with a long-term vision of shaping the technological landscape of the future. This includes designing proprietary intellectual property, product ecosystems, mission-critical platforms, and breakthrough technologies aligned with national growth, global competitiveness, sustainability, and the advancement of science and engineering.",

  keywords: [
    "Xyronix Labs",
    "XyroMail",
    "AI Native Email Infrastructure",
    "Enterprise Email Infrastructure",
    "AI powered email automation",
    "Enterprise email analytics",
    "Email operational dashboards",
    "AI email drafting engine",
    "Semantic email intelligence",
    "Enterprise communication analytics",
    "Multi-tenant email platform",
    "Email SLA monitoring",
    "Email workflow automation",
    "Enterprise email security and compliance",
  ],

  authors: [
    {
      name: "Aditya Seth",
      url: "https://www.linkedin.com/in/adityaseth936",
    },
    {
      name: "Xyronix Labs Pvt. Ltd.",
      url: "https://www.linkedin.com/company/xyronixlabs",
    },
  ],

  creator: "Aditya Seth",
  publisher: "Xyronix Labs Pvt. Ltd.",

  applicationName: "XyroMail",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "contact:email:founder": "founder@xyronixlabs.com",
    "contact:email:cofounder": "co-founder@xyronixlabs.com",
    "contact:email:support": "support@xyronixlabs.com",
    "contact:phone": "+91 9220342036",
  },

  alternates: {
    canonical: "https://www.xyronixlabs.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // verification: {
  //   google: "ADD_GOOGLE_VERIFICATION_CODE",
  //   other: {
  //     "msvalidate.01": "ADD_BING_VERIFICATION_CODE",
  //   },
  // },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.xyronixlabs.com",
    siteName: "Xyronix Labs Pvt. Ltd.",
    title:
      "Xyrinix Labs Pvt. Ltd.",
    description:
      "Catalogue for Software Development Division at Xyrinix Labs Pvt. Ltd.",
    images: [
      {
        url: "https://www.xyronixlabs.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Xyrinix Labs Private Limited Catalogue.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Xyrinix Labs Pvt. Ltd.",
    description:
      "Catalogue for Software Development Division at Xyrinix Labs Pvt. Ltd.",
    images: ["https://www.xyronixlabs.com/logo.png"],
    creator: "@XyronixLabs",
  },

  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180" }],
    shortcut: ["/logo.png"],
  },

  category: "Enterprise Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"> <Analytics />
        {children}
      </body>
    </html>
  );
}
