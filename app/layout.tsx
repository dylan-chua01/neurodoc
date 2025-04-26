import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const sourceSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "NeuroDoc",
  description: "Save hours of reading time, transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}