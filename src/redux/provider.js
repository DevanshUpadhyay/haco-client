"use client";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
export function ReduxProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  return (
    <Provider store={store}>
      <Navbar user={user} />
      {children}
      <Footer />
      <Toaster />
    </Provider>
  );
}
