import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anton D - Web Developer",
  description: "...",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Menu />
        {children}
        </body>
    </html>
  );
}
