"use client";

import { changePassword } from "@/redux/actions/profile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };
  const { loading, message, error } = useSelector((state) => state.profile);
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
          <div className="flex flex-col items-center w-full gap-6">
            <p className="text-[30px] font-bold uppercase">CHANGE PASSWORD</p>
            <div className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2">
              <input
                className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          "
                type="password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Old Password"
              />
              <input
                className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          "
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
              />
              <button
                className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md"
                type="submit"
              >
                {" "}
                Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
