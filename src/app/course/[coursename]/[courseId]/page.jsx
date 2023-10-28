import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { MdInfo } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import Accordion from "@/components/Accordion";
import Link from "next/link";

import { getSingleCourse } from "@/functions";
import CourseButton from "@/components/CourseButton";

const CourseDetails = async ({ params }) => {
  const course = await getSingleCourse(params.courseId);

  return (
    <>
      <div className="flex flex-col gap-10 justify-center ">
        <div className="grid grid-cols-1  lg:grid-cols-2  justify-around lg:p-[20px] md:p-[20px] gap-[10px] lg:gap-[30px] p-[15px]">
          <div className="w-full flex justify-center">
            <div className="w-full">
              {/* <iframe
                className="w-[100%] h-[230px] md:h-[425px] lg:h-[350px]"
                src={`https://geo.dailymotion.com/player/xjs1z.html?video=k2TwL9Abn1t7uYzvTK1`}
                // allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                frameborder="0"
              ></iframe> */}
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-[17px] font-bold bg-red-300 w-fit p-[5px] rounded-lg text-white">
              {course?.category}
            </p>
            <p className="font-bold text-[18px]">{course?.title}</p>
            <p>{course?.description}</p>
            <div className="flex items-center gap-2">
              <BsPeopleFill />
              <p>{course?.createdBy}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdInfo />
              <p>Last Updated {course?.createdAt}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLanguage />
              <p>{course?.language}</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillEye />
              <p>{course?.views}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPersonAdd />
              <p>{course?.subscriptions}</p>
            </div>

            <CourseButton course={course} />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[10px] lg:p-10 gap-10 "
          // style={{ border: "2px solid red" }}
        >
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">What you'll learn</p>
            <ul className="grid grid-cols-2 gap-3">
              {course?.details?.learningPoints?.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <BiCheck /> <p> {item.points}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">Course content</p>
            <ul className="flex flex-col gap-3">
              {course?.details?.content?.map((item, index) => (
                <li
                  key={index}
                  className="border-[1px] border-gray-400 py-[10px] px-[25px] shadow-sm font-medium"
                >
                  {item.points}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">Course content in Details</p>
            <Accordion course={course} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
