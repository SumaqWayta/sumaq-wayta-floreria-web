import { Footer, Navbar } from "@/components";
import "@/styles/index.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sumaq Wayta",
  description: "Plataforma web para comprar flores en el Perú",
  openGraph: {
    title: "Sumaq Wayta",
    description: "Plataforma web para comprar flores en el Perú",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
