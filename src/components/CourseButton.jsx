"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import Loader from "./Loader";
import ButtonLoader from "./ButtonLoader";
import { isAuthenticated } from "@/functions";

const CourseButton = ({ course }) => {
  const [isClient, setIsClient] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  useLayoutEffect(() => {
    const isAuth = isAuthenticated(course._id);
    if (isAuth) {
      setSubscribed(true);
    }
    setIsClient(true);
  }, []);
  return (
    <div className="w-fit m-2">
      <div className="flex items-center gap-3">
        {subscribed ? (
          <Link
            className="w-fit py-[7px] px-[15px] text-white bg-yellow-500 rounded-2xl hover:bg-yellow-600 transition-all duration-150 ease-in-out"
            href={`/course/${course.title.replace(/\s+/g, "-")}/${
              course._id
            }/learn`}
          >
            Watch Now
          </Link>
        ) : (
          <Link
            className="w-fit py-[7px] px-[15px] text-white bg-purple-600 rounded-2xl hover:bg-purple-700 transition-all duration-150 ease-in-out"
            href={`/subscribe/${course.title.replace(/\s+/g, "-")}/${
              course._id
            }`}
          >
            Subscribe
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseButton;
