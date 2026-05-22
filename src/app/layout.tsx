import "./globals.css";
import localFont from "next/font/local";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { getMenu } from "@/lib/menu";

const manrope = localFont({
  src: [
    {
      path: "../fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Manrope/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Manrope/Manrope-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-manrope",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const menuItems = await getMenu();
  
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-[var(--font-manrope)] bg-black text-white">
        <LayoutWrapper menuItems={menuItems}>
        {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}