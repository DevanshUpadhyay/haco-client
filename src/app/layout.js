import "./globals.css";
import { Inter } from "next/font/google";

import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "haco",
  description: "haco: An E-learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
