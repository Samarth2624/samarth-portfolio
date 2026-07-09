import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Samarth Phakatkar",
  description: "Electronics & Telecommunication Engineer | IoT Developer | Automation Enthusiast",
  keywords: [
    "Samarth",
    "Portfolio",
    "IoT",
    "ESP32",
    "Embedded Systems",
    "Automation",
    "Python",
    "React",
  ],
  authors: [{ name: "Samarth Phakatkar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
  className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
>
  <Providers>
    {children}
  </Providers>
</body>
    </html>
  );
}