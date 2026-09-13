import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gomatic | Turn Great Service Into Visible Growth",
  description:
    "Gomatic helps service businesses automate review requests, social proof, inquiries, and customer journey follow-up.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
