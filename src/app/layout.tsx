import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Header />
        
        <div className="md:hidden">
          <Navbar mobileMode={true} />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
        
        <div className="hidden md:flex min-h-[calc(100vh-4rem)]">
          <div className="w-64 fixed h-full" style={{ marginTop: "20px" }}>
            <Navbar mobileMode={false} />
          </div>
          
          <div className="flex-1 ml-64 overflow-y-auto">
            <main className="p-6 max-w-7xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}