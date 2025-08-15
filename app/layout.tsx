import "./globals.css";
import { ReactNode, useEffect } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { InteractionProvider } from "./context/InteractionContext";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Surya Prakash — Full Stack Developer and AI Engineer",
  description:
    "Full Stack Developer and AI Engineer, currently at KIIT. Focused on intelligent systems and real-world experiences, working remotely from Bhubaneswar, India.",
  generator: "Next.js",
  applicationName: "Surya Prakash",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Surya Prakash — Full Stack Developer and AI Engineer",
    description:
      "Full Stack Developer and AI Engineer, currently at KIIT. Focused on intelligent systems and seamless experiences, working remotely from Bhubaneswar, India.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Surya Prakash — Full Stack Developer and AI Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Prakash — Full Stack Developer and AI Engineer",
    description:
      "Full Stack Developer and AI Engineer, currently at KIIT. Focused on intelligent systems and seamless experiences, working remotely from Bhubaneswar, India.",
    creator: "Surya Prakash",
    creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        <InteractionProvider>
          {children}
          <Analytics />
        </InteractionProvider>
      </body>
    </html>
  );
}
