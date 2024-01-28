import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SITHOLE K4MOGELO",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <script
          src="https://product-gallery.cloudinary.com/all.js"
          type="text/javascript"
        ></script>
      </head>
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
        <Footer />
      </body>
    </html>
  );
}
