import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ACM Student Chapter | Mohan Babu University (MBU)",
  description: "Official ACM Student Chapter of Mohan Babu University. A premium Student Utility Platform designed to Build, Connect, and Innovate. Explore events, workshops, resources, projects, and careers.",
  keywords: ["ACM", "ACM MBU", "Mohan Babu University", "ACM India", "Computer Science", "Coding Club", "Student Utility Platform", "MBU Tech", "Hackathons MBU"],
  authors: [{ name: "ACM MBU Chapter Dev Team" }],
  openGraph: {
    title: "ACM Student Chapter | Mohan Babu University",
    description: "Build. Connect. Innovate. Discover MBU's leading tech community affiliated with ACM India.",
    url: "https://mbu.acm.org",
    siteName: "ACM MBU",
    images: [
      {
        url: "https://mbu.acm.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "ACM Student Chapter at Mohan Babu University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACM Student Chapter | Mohan Babu University",
    description: "Affiliated with ACM India. Empowering student innovators through workshops, projects, and events.",
    images: ["https://mbu.acm.org/og-image.png"],
  },
  metadataBase: new URL("https://mbu.acm.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} ${firaCode.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="antialiased selection:bg-acm-cyan/30 selection:text-white">
        <div className="noise-overlay" />
        <ParticlesBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
