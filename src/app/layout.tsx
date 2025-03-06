import type { Metadata } from "next";
import { Nunito, Instrument_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MinieMoney",
  description: "The money app for teenagers",
  openGraph: {
    title: "MinieMoney",
    url: "https://miniemoney.com",
    description: "The money app for teenagers",
    images: [
      {
        url: "https://res.cloudinary.com/dvqiawhl4/image/upload/v1740553167/minie-link/yzgz54vf5vqfzzypthmo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${nunitoSans.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
