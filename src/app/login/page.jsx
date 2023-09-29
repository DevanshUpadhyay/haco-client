"use client";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <p className="text-[30px] font-bold">Welcome to haco.study</p>
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col gap-3">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-[500px] py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type="email"
              required
              id="email"
              value={email}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              className="w-[500px] py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type="password"
              required
              id="password"
              value={password}
              placeholder="Enter Your Password"
            />
          </div>
          <div>
            <Link
              href={"/forgetpassword"}
              className="hover:underline transition-all duration-300 ease-in-out text-gray-500"
            >
              Forget Password?
            </Link>
          </div>
          <button className=" bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-[150px]">
            Login
          </button>
          <div>
            New User?{" "}
            <Link
              href={"/register"}
              className="hover:underline transition-all duration-300 ease-in-out  text-yellow-500"
            >
              Sign Up
            </Link>{" "}
            here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
