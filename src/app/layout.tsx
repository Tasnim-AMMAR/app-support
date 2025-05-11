import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Providers } from "./providers";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supportly",
  description: "Supportly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`}
      >
        <Image
          src="/bg-gradient.svg"
          alt="Support illustration"
          width={500}
          height={500}
          className="pointer-events-none fixed -start-10 top-10 w-full max-w-3xl object-fill blur-3xl"
        />
        <Image
          src="/bg-gradient.svg"
          alt="Support illustration"
          width={500}
          height={500}
          className="pointer-events-none fixed bottom-0 end-[-50%] w-full max-w-3xl object-fill opacity-50 blur-3xl"
        />

        <Providers>
          <MantineProvider defaultColorScheme="light">
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
