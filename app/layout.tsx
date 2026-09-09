import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waseem Saleem Photography | Wedding Photographer",
  description:
    "Waseem Saleem Photography offers cinematic & timeless wedding photography in Lahore, Islamabad, Karachi and Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}