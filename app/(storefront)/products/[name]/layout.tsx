import { type ReactNode } from "react";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className=" mx-auto px-8 py-4">{children}</main>
    </>
  );
}
