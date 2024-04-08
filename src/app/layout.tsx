import type { Metadata } from "next";
import { Mulish, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
})

const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  variable: '--font-mPlusRounded1c',
  weight: '700',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={clsx(mulish.variable, mPlusRounded1c.variable)}>
      <body>{children}</body>
    </html>
  );
}