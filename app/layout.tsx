import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Dodiya — Terminal",
  description: "Terminal based interactive portfolio of Harsh Dodiya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable} antialiased`}>
      <body className="font-mono bg-[var(--color-background)] text-[var(--color-text-main)] min-h-screen overflow-hidden selection:bg-[var(--color-accent-blue)]/30">
        {children}
      </body>
    </html>
  );
}
