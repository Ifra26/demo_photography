import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waseem Saleem Photography | Wedding Photographer",
  description: "Waseem Saleem Photography - cinematic and timeless wedding photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
