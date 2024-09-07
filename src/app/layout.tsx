import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const commissioner = Commissioner({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "UCan Power Ukraine",
  description: "Інвертори та батареї для дому та бізнесу. Офіційний партнер UCanPower в Україні.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={commissioner.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
