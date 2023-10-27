"use client";
import { getAllCourses } from "@/redux/actions/course";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

const CourseCart = () => {
  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);
  return (
    <>
      <>
        {courses?.map((item, index) => (
          <div className="w-[90%] lg:w-[350px] md:w-[360px]  rounded-[5px] flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.535)] relative hover:translate-y-[-10px] transition-all duration-500 ease-in-out">
            <div className="rounded-[5px]">
              <Image
                src={item.poster.url}
                width={0}
                height={0}
                sizes="100vw"
                alt="image"
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "5px",
                }}
                // style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="flex flex-col  w-[50px] h-[50px] bg-[#8d49f7] absolute top-[190px] right-[0px] items-center px-[8px] py-[8px]">
              <p className="text-[15px] bg-transparent text-white font-semibold">
                {item.price}
              </p>
              <del className="text-white bg-transparent text-[10px] font-semibold">
                {item.overPriced}
              </del>
            </div>
            <div className="flex flex-col justify-center items-center pt-[10px] gap-[10px]">
              <p className="text-lg font-sans font-bold w-[90%] text-center">
                {item.category}
              </p>
              <p className="text-base font-sans font-normal w-[90%] text-center">
                {item.title}
              </p>
              <div>
                <Link
                  className="px-[10px] text-[#fff]  text-[16px] py-[7px] rounded-2xl  font-medium bg-[#6b53ff] transition ease-in-out duration-300 hover:bg-[#8d49f7]  select-none"
                  href={
                    "/course/Java-Prodigy-Turbocharge-your-programming-skills"
                  }
                >
                  See Details
                </Link>
              </div>
              <div className="flex w-full box-content border-gray-300 border-t  justify-between items-center">
                <div className="w-[60%] flex items-center justify-center h-[50px]">
                  <div className="flex gap-[10px]">
                    <p className="font-semibold">Creator</p>
                    <p>{item.createdBy}</p>
                  </div>
                </div>
                <div className="w-[35%] border-l h-[50px] border-gray-300 flex items-center justify-center">
                  <div className="flex gap-[10px]">
                    <p className="font-semibold">Views</p>
                    <p>{item.views}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </>
  );
};

export default CourseCart;
