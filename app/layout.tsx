import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXFLOW AI — Business Automation",
  description: "One intelligent workspace for leads, sales and business workflows."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}