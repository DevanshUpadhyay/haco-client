"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center mt-16">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-[30px] font-bold">Sign Up to haco.study</p>
        <Image
          src={"/profile.png"}
          //   src={
          //     "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318577/ramde_f3iq5v.png"
          //   }
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col gap-3">
          <div className=" flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out w-[500px]"
              type="text"
              required
              id="name"
              value={name}
              placeholder="Abc"
            />
          </div>
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
              type={show ? "text" : "password"}
              required
              id="password"
              value={password}
              placeholder="Enter Your Password"
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="referralCode">Referral Code if any</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out w-[500px]"
              type="text"
              id="referralCode"
              value={referralCode}
              placeholder="Optional"
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
            Sign Up
          </button>
          <div>
            Already Have an Account?{" "}
            <Link
              href={"/login"}
              className="hover:underline transition-all duration-300 ease-in-out  text-yellow-500"
            >
              Login
            </Link>{" "}
            here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
