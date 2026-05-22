"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

type MenuItem = {
  title: string;
  url: string;
};


export default function LayoutWrapper({
  children, 
  menuItems,
}: {
  children: React.ReactNode;
  menuItems: MenuItem[];
}) {

  const pathname = usePathname();

  const hideLayout =
    pathname === "/cv";


  return (
    <>
      {!hideLayout && <Header menuItems={menuItems}/>}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}