"use client";

import ButtonLoader from "@/components/ButtonLoader";
import { forgetPassword } from "@/redux/actions/profile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center p-3">
        <form onSubmit={(e) => submitHandler(e)} className="w-full">
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
              <button
                className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <p>Send Reset Link</p>
                    <ButtonLoader />
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
