import { type ReactNode } from "react";
import { Navbar } from "../components/storefront/Navbar";
import { Footer } from "../components/storefront/Footer";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className=" mx-auto min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
}
