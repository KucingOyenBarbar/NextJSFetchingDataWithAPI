import "./globals.css";
import { Inter } from "next/font/google";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "@/components/HeaderNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className=" bg-black text-white">
        <div id="__next">
          <HeaderNav />
          {children}
        </div>
      </body>
    </html>
  );
}
