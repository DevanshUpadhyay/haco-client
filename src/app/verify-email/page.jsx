"use client";

import Loader from "@/components/Loader";
import { verifyOtp } from "@/redux/actions/profile";
import { loadUser } from "@/redux/actions/user";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(verifyOtp(otp));
    await setOtp("");
    await dispatch(loadUser());
    // await router.push("/my-account");
  };
  useEffect(() => {
    setIsClient(true);
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
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
      {!isClient ? (
        <Loader />
      ) : (
        <form className="w-full" onSubmit={(e) => submitHandler(e)}>
          <div className="w-full h-[70vh] flex flex-col items-center justify-center p-3">
            <div className="flex flex-col w-full items-center gap-6">
              <div className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2">
                <p className="text-[30px] font-bold uppercase">
                  Email Verification
                </p>
                <p className="text-[20px] opacity-50">
                  otp is sent to {user.email}
                </p>
                <input
                  className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter otp"
                  type={"text"}
                />
                <div className="flex items-center gap-3">
                  <button
                    className="w-fit px-[15px] py-[7px] text-white bg-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 rounded-md"
                    type="submit"
                  >
                    {" "}
                    Submit Code
                  </button>
                  <Link
                    href={"/my-account"}
                    className="w-fit px-[15px] py-[7px] text-white bg-purple-500 transition-all duration-300 ease-in-out hover:bg-purple-600 rounded-md"
                  >
                    Go to Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default VerifyOtp;
