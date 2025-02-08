import type { Metadata } from "next";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate Connect",
  description: "Interactive Financial Analysis App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
