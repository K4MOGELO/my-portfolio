import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KAMOGELO SITHOLE",
  description: "KAMOGELO'S ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-zinc-950">
        <Navbar />
        <div className="min-h-screen text-white ">
          <div className="p-14 "></div>
          {children}
        </div>
      </body>
    </html>
  );
}
