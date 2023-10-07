import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { MdInfo } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import Accordion from "@/components/Accordion";
import Link from "next/link";
const CourseDetails = ({ params }) => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center ">
        <div className="grid grid-cols-1  lg:grid-cols-2  justify-around lg:p-[20px] md:p-[20px] gap-[10px] lg:gap-[30px] p-[15px]">
          <div className="w-full flex justify-center">
            {/* <div className="flex justify-center w-full">
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1689070745/java_itotdx.png"
                }
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
              />
            </div> */}
            <div className="w-full">
              <iframe
                className="w-[100%] h-[230px] md:h-[425px] lg:h-[350px]"
                src={`https://geo.dailymotion.com/player/xjs1z.html?video=k2TwL9Abn1t7uYzvTK1`}
                // allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-[17px] font-bold bg-red-300 w-fit p-[5px] rounded-lg text-white">
              Java Programming + SQL
            </p>
            <p className="font-bold text-[18px]">
              Java Prodigy: Turbocharge your programming skills
            </p>
            <p>
              Learn java programming through examples for absolute beginner !
              Become a java developer and obtain core java skills!
            </p>
            <div className="flex items-center gap-2">
              <BsPeopleFill />
              <p>Deepak Sharma</p>
            </div>
            <div className="flex items-center gap-2">
              <MdInfo />
              <p>Last Updated 2023-05-29</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLanguage />
              <p>English</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillEye />
              <p>733</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPersonAdd />
              <p>95</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="w-fit py-[7px] px-[15px] text-white bg-yellow-500 rounded-2xl hover:bg-yellow-600 transition-all duration-150 ease-in-out"
                href={
                  "/course/Java-Prodigy-Turbocharge-your-programming-skills/learn"
                }
              >
                Watch Now
              </Link>
              <Link
                className="w-fit py-[7px] px-[15px] text-white bg-purple-600 rounded-2xl hover:bg-purple-700 transition-all duration-150 ease-in-out"
                href={
                  "/subscribe/Java-Prodigy-Turbocharge-your-programming-skills"
                }
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[10px] lg:p-10 gap-10 "
          // style={{ border: "2px solid red" }}
        >
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">What you'll learn</p>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center gap-3">
                <BiCheck /> <p> Be able to program in java professionally</p>
              </li>
              <li className="flex items-center gap-3">
                <BiCheck /> <p>Java programming language</p>
              </li>
              <li className="flex items-center gap-3">
                <BiCheck /> <p>Learn GUI programming</p>
              </li>
              <li className="flex items-center gap-3">
                <BiCheck />
                <p>Learn Databse programming</p>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">Course content</p>
            <ul className="flex flex-col gap-3">
              <li className="border-[1px] border-gray-400 py-[10px] px-[25px] shadow-sm font-medium">
                100+ Videos(avg 30min duration)
              </li>
              <li className="border-[1px] border-gray-400  py-[10px] px-[25px] shadow-sm font-medium">
                200+ Coding Questions
              </li>
              <li className="border-[1px] border-gray-400 py-[10px] px-[25px] shadow-sm font-medium">
                ⏬ Downloadable Resources
              </li>
              <li className="border-[1px] border-gray-400 py-[10px] px-[25px] shadow-sm font-medium">
                🔴Live Doubt Solving & Mentorship Session
              </li>
            </ul>
          </div>
          <div className=" flex flex-col w-full border-[1px] border-gray-400 px-[5%] py-[3%] gap-4">
            <p className="text-[20px] font-bold">Course content in Details</p>
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
