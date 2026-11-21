import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gomatic | Qualified Site Visits for Renovation Contractors",
  description:
    "4+ qualified site visits in 60 days for whole-house renovation contractors in Greater Manila, or your setup fee back. Pay per visit that shows up.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
