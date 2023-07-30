import { type PropsWithChildren } from "react";
import FiltersBar from "~/components/FiltersBar/FiltersBar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <FiltersBar />
      <main className="h-[calc(100%-56px)]">{children}</main>
    </div>
  );
}
