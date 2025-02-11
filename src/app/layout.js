import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First NextJs App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="">{children}</div>
        <footer className="bg-orange-600 text-center">
          <h3>This is a footer</h3>
        </footer>
        </body>

    </html>
  );
}

