import { type PropsWithChildren } from "react";
import Navbar from "~/components/Navbar/Navbar";

export default function NavbarLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="h-[calc(100%-56px)]">{children}</main>
    </div>
  );
}
