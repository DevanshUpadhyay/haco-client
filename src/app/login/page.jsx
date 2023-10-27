"use client";
import { login } from "@/redux/actions/user";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: "clearError" });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: "clearMessage" });
        // router.push("/");
        location.replace("/");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, error, message]);
  return (
    <div
      className="flex flex-col h-[90vh] justify-center items-center"
      // style={{ border: "2px solid red" }}
    >
      <div
        className="flex flex-col w-full gap-6 items-center"
        // style={{ border: "2px solid green" }}
      >
        <p className="text-[30px] font-bold">Welcome to Haco</p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-[90%] sm:w-[70%] lg:w-[40%] gap-4 p-2"
        >
          <div
            className=" flex flex-col gap-3"
            // style={{ border: "2px solid red" }}
          >
            <label htmlFor="email">Email Address</label>
            <input
              className=" py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type="email"
              required
              id="email"
              value={email}
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type="password"
              required
              id="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link
              href={"/forget-password"}
              className="hover:underline transition-all duration-300 ease-in-out text-gray-500"
            >
              Forget Password?
            </Link>
          </div>
          <button
            className=" bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-[150px]"
            type="submit"
          >
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
        </form>
      </div>
    </div>
  );
};

export default Login;
