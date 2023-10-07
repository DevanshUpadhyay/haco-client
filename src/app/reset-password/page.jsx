"use client";

import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center p-2">
        <div className="flex flex-col w-full items-center gap-6">
          <div className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2">
            <p className="text-[30px] font-bold uppercase">Reset Password</p>
            <input
              className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              type={"password"}
            />
            <button className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md">
              {" "}
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;