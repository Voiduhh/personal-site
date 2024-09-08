import { Titillium_Web } from "next/font/google";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import "./globals.css";
import TransitionEffect from "@/components/transitionEffect";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titilliumWeb",
});

export const metadata = {
  title: "JP Portfolio",
  description: "Jacob's Portfolio site. Created using NextJS and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titilliumWeb.variable}>
        <Header />
        <TransitionEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
