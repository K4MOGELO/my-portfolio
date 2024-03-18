import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SITHOLE KAMOGELO",
  description: "K4MOGELO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  bg-black  text-white ${inter.className}   `}>
        <Navbar />
        <div className="min-h-screen ">
          <div className="p-14 "></div>
          {children}
        </div>
        <div className="fixed bottom-4 right-4 text-white cursor-help">
          <span
            className=" space-x-1  border-b border-dashed border-white"
            title="website under development,STAY TUNED  "
          >
            Website in <span className="text-yellow-500">Beta Mode</span> ,still
            fixing stuff
          </span>
        </div>
        <Footer />
      </body>
    </html>
  );
}
