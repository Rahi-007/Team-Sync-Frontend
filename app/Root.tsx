"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";
import Login from "@/components/layouts/LoginForm";

export default function Root({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("authorization");
    const userId = localStorage.getItem("userId");

    if (accessToken && userId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthenticated(true);
    }

    setChecking(false);
  }, []);

  const publicRoutes = ["/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  if (checking) {
    return <Loading />;
  }

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (!authenticated) {
    return (
      <div className="flex w-full items-center justify-center h-screen bg-white">
        <Login />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
