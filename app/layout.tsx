import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";

const MonaSans = Mona_Sans({
  variable: "--font-Mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepView",
  description: "AI interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // only dark theme will be used later
    <html lang="en" className={"dark"}>
      <body
          // applied that font everywhere on website
        className={`${MonaSans.className} antialiased pattern`}
      >
        {children}

      <Toaster />
      </body>
    </html>
  );
}
