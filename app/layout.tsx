import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "ShipFast Studio | Bring Your Idea to Life",
    template: "%s | ShipFast Studio",
  },
  description: "ShipFast Studio turns product ideas into real working products.",
  metadataBase: new URL("https://shipfast.studio"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} min-h-dvh antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
