import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">{<Outlet />}</main>
      <Toaster />
    </>
  );
}
