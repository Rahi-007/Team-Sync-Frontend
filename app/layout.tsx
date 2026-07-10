import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display, Salsa } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplayHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading'
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCT Software",
  description: "Team management software distribute the task",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", salsa.variable, geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full">
        <Header />
        <div className="flex">
          <SideBar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
