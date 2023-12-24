import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SITHOLE K4MOGELO",
  description: "Personal Website",
};
// bg-[#111010]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}   `}>
        <Navbar />
        <div className="p-14 "></div>
        <div className="">{children}</div>
        <div className="fixed bottom-4 right-4 text-white cursor-help">
          <span
            className=" space-x-1  border-b border-dashed border-white"
            title="website under development,STAY TUNED  "
          >
            Website in <span className="text-yellow-500">Beta Mode</span>{" "}
          </span>
        </div>
      </body>
    </html>
  );
}
