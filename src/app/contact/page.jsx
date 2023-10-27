"use client";
import ButtonLoader from "@/components/ButtonLoader";
import { contactUs } from "@/redux/actions/other";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const {
    loading,
    message: stateMessage,
    error,
  } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <div className="flex flex-col h-[90vh] justify-center items-center p-3">
      <div className="flex flex-col w-full gap-6 items-center">
        <p className="text-[30px] font-bold">Contact Us</p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2"
        >
          <div className=" flex flex-col gap-3">
            <label htmlFor="password">Name</label>
            <input
              className=" py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Abc"
              type={"text"}
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="email">Email Address</label>
            <input
              className=" py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
            />
          </div>

          <div className=" flex flex-col gap-3">
            <label htmlFor="message">Message</label>

            <textarea
              className=" py-[3px] px-[10px] rounded-[3px]  bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              required
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message...."
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <button
            className="flex items-center gap-1 justify-center bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-[150px]"
            type="submit"
          >
            Send Mail
            {loading && <ButtonLoader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
