"use client";
import { isAuthenticated } from "@/functions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
const PaymentFail = () => {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      redirect("/");
    }
  }, []);
  return (
    <>
      <div className="flex flex-col h-[70vh] justify-center items-center">
        <RiErrorWarningFill size={"5rem"} />
        <p className="text-[30px] font-bold uppercase">Payment Fail</p>
        <Link
          href={"/"}
          className="hover:bg-gray-300 py-2 px-3 transition-all duration-300 ease-in-out rounded-md"
        >
          Try Again
        </Link>
      </div>
    </>
  );
};

export default PaymentFail;
