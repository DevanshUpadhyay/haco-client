"use client";
import CourseContent from "@/components/CourseContent";
import Loader from "@/components/Loader";
import { isAuthenticated } from "@/functions";

import { redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const Learn = ({ params }) => {
  const [isClient, setIsClient] = useState(false);
  useLayoutEffect(() => {
    const isAuth = isAuthenticated(params.courseId);
    if (!isAuth) {
      redirect("/");
    }
    setIsClient(true);
  }, []);

  return (
    <>
      {!isClient ? (
        <Loader />
      ) : (
        <div className="flex flex-col ">
          <div className=" px-[10px] pt-[20px]">
            <p
              className="text-[30px] font-bold"
              // style={{ border: "2px solid red" }}
            >
              Java Prodigy: Turbocharge your- rogramming skills
            </p>
            <p>
              Learn java programming through examples for absolute beginner !
              Become a java developer and obtain core java skills!
            </p>
          </div>

          <CourseContent />
        </div>
      )}
    </>
  );
};

export default Learn;
