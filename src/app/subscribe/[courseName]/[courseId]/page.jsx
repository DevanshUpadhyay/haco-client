"use client";
import Checkout from "@/components/Checkout";
import Loader from "@/components/Loader";

import { useEffect, useState } from "react";
const Payment = async ({ params }) => {
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState({});
  const id = params.courseId;

  useEffect(() => {
    setIsClient(true);
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      {!isClient ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center gap-6 p-3">
          <p className="text-[20px] font-bold text-center lg:w-[30%]">
            Just one step away from The Greater version of yourself...{" "}
          </p>
          <div className="flex flex-col rounded-lg shadow-md w-full lg:w-[35%] md:w-[70%]">
            <p className="p-4 bg-yellow-500 rounded-t-[8px]">
              Unlock @ just $149
            </p>
            <div className="flex flex-col items-center p-8 gap-2">
              <p className="text-center">
                Purchase Course and Get Access to the content.
              </p>
              <p className="text-[20px] font-bold">$149only</p>
            </div>
            <div className="flex justify-center w-full">
              <Checkout
                courseId={id}
                amount={user?.cashback >= 149 ? 0.1 : 149 - user?.cashback}
              />
            </div>
            <div className="bg-gray-500 p-4 rounded-b-[8px]">
              <p className="text-white uppercase text-sm font-semibold">
                Visit Terms & Conditions to see Refund Policy
              </p>
              <p className="text-xs text-white">*Terms & Conditions Apply</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
