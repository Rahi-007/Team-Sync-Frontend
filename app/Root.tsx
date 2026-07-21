"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHooks";
import { setAuth } from "@/context/slice/auth.slice";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";
import Login from "@/components/layouts/LoginForm";

export default function Root({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authorization");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(
        setAuth({
          accessToken: token,
          user: JSON.parse(user),
        })
      );
    }

    // setTimeout(() => {
    //   setChecking(false);
    // }, 0);
  }, [dispatch]);

  if (checking) {
    return <Loading />;
  }

  if (!accessToken) {
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
