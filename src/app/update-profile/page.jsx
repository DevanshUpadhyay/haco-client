"use client";
import { isAuthenticated } from "@/functions";
import { updateProfile } from "@/redux/actions/profile";
import { loadUser } from "@/redux/actions/user";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name));
    await dispatch(loadUser());
    await location.replace("/my-account");
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

  useLayoutEffect(() => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      redirect("/");
    }
  }, []);
  return (
    <>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center p-3">
        <div className="flex flex-col w-full items-center gap-6">
          <p className="text-[30px] font-bold uppercase">Update Profile</p>
          <div className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2">
            <input
              className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          "
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md"
              onClick={submitHandler}
            >
              {" "}
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
