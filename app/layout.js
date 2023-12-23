import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SITHOLE K4MOGELO",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="p-14 bg-black "></div>
        <div className="p-2  ">{children}</div>
      </body>
    </html>
  );
}
