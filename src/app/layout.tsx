import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const poppin = Montserrat({
  subsets: ['latin'], // Include only required subsets
  weight: ['400', '700'], // Add required font weights
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'Montserrat.className'}
      >
        {children}
      </body>
    </html>
  );
}
