import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import "../fontello/css/amazon-icons.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amazon Redesign",
  description: "Generated by Federico Bellezza",
  author: "Federico Bellezza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ProtestStrike `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
