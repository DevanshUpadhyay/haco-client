"use client";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <p className="text-[30px] font-bold">Contact Us</p>
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
          <div className=" flex flex-col gap-3">
            <label htmlFor="message">Message</label>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              className="w-[500px] py-[3px] px-[10px] rounded-[3px]  bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              placeholder="Your Message...."
            ></textarea>
          </div>

          <button className=" bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-[150px]">
            Send Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
