import React from "react";
import SideNav from "@/components/SideNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full md:w-[95%] lg:w-[90%] mx-auto">
      <aside className="fixed left-0 top-14 w-[250px] hidden h-full shrink-0 md:sticky md:block">
        <SideNav />
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}

export default Layout;
