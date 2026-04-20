import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sqwizee | Web3 Portfolio",
  description: "Web3 UI/UX Designer & Frontend Developer. Unique infographics, original content strategy, and clean code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased min-h-screen bg-black text-white relative`}
      >
        <div className="bg-pixel-grid" />
        {children}
      </body>
    </html>
  );
}
