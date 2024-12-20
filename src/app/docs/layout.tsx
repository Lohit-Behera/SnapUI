import React from "react";
import SideNav from "@/components/SideNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[99%] h-full md:w-[95%] lg:w-[90%] mx-auto space-x-0 md:space-x-4">
      <aside className="fixed left-0 top-14 w-[200px] hidden h-full shrink-0 md:sticky md:block">
        <SideNav />
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}

export default Layout;
