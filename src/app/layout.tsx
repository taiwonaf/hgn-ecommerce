import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StoreProvider from "./StoreProvider";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Shop now",
  description: "shop now ecommerce store",
};

const sf = localFont({
  src: [
    {
      path: "../assets/fonts/sf-pro-display-light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/sf-pro-display-regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/sf-pro-display-medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/sf-pro-display-semibold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/sf-pro-display-bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/sf-pro-display-black.woff2",
      weight: "800",
    },
  ],
  variable: "--sf",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background antialiased ${sf.variable} font-SF`
          // fontSans.variable
          // sf.variable
        )}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
