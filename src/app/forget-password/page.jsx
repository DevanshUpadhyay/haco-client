"use client";

import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center p-3">
        <div className="flex flex-col w-full gap-6 items-center">
          <p className="text-[30px] font-bold uppercase">FORGET PASSWORD</p>
          <div className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2">
            <input
              className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
            />
            <button className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md">
              {" "}
              Send Reset Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
