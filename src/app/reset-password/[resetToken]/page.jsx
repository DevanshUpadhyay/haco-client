"use client";

import { resetPassword } from "@/redux/actions/profile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = ({ params }) => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.resetToken, password));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      router.push("/login");
    }
    // add or remove navigate from useEffect dependency
  }, [dispatch, error, message]);

  return (
    <>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center p-2">
        <form onSubmit={(e) => submitHandler(e)} className="w-full">
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
              <button
                className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md"
                type="submit"
              >
                {" "}
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
