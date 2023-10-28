"use client";
import Loader from "@/components/Loader";
import { isAuthenticated } from "@/functions";
import { getAllCourses } from "@/redux/actions/course";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyCourses = async () => {
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );
  // const courses = [
  //   {
  //     id: 1,
  //     category: "Java Programming + SQL",
  //     title: "Java Prodigy: Turbocharge your programming skills",
  //     description:
  //       "Learn java programming through examples for absolute beginner ! Become a java developer and obtain core java skills!",
  //     imgUrl:
  //       "https://res.cloudinary.com/dcej7jjak/image/upload/v1689070745/java_itotdx.png",
  //   },
  //   {
  //     id: 2,
  //     category: "Solidity",
  //     title: "Solidity Prodigy: Turbocharge Your Programming Skills",
  //     description:
  //       "Learn solidity programming through examples for absolute beginner ! Become a blockchain developer and obtain core solidity skills!",
  //     imgUrl:
  //       "https://res.cloudinary.com/dcej7jjak/image/upload/v1688715192/solidity_mhu9qd.png",
  //   },
  //   {
  //     id: 3,
  //     category: "SQL Database",
  //     title: "SQL Prodigy: Turbocharge Your Programming Skills",
  //     description:
  //       "Learn SQL programming through examples for absolute beginner ! Become a SQL developer and obtain core SQL skills!",
  //     imgUrl:
  //       "https://res.cloudinary.com/dcej7jjak/image/upload/v1688716282/bi7clxaeqmb3saavd62k.png",
  //   },
  // ];
  const imageHandler = (course_id) => {
    for (let i = 0; i < courses.length; i++) {
      if (course_id === courses[i]._id) {
        return courses[i].poster.url;
      }
    }
  };
  const titleHandler = (course_id) => {
    for (let i = 0; i < courses.length; i++) {
      if (course_id === courses[i]._id) {
        return courses[i].title;
      }
    }
  };
  const descriptionHandler = (course_id) => {
    for (let i = 0; i < courses.length; i++) {
      if (course_id === courses[i]._id) {
        return courses[i].description;
      }
    }
  };
  const categoryHandler = (course_id) => {
    for (let i = 0; i < courses.length; i++) {
      if (course_id === courses[i]._id) {
        return courses[i].category;
      }
    }
  };
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch, error, message]);

  useEffect(() => {
    setIsClient(true);
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  useLayoutEffect(() => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      redirect("/");
    }
  }, []);
  return (
    <>
      {!isClient || loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center p-2 gap-3">
          <p className="text-[30px] font-bold">Subscribed Courses</p>
          <div
            className="flex gap-6 justify-center  flex-wrap "
            // style={{ border: "2px solid red" }}
          >
            {user?.subscription.length > 0 ? (
              <>
                {user?.subscription.map((item, index) => (
                  <div className="w-[330px] border-[1px] border-slate-400 flex flex-col rounded-lg relative">
                    <Image
                      className="rounded-t-lg"
                      // src={item.imgUrl}
                      src={imageHandler(item.course_id)}
                      width={330}
                      height={177}
                    />
                    <p className="text-[14px] absolute text-white bg-green-400 rounded-lg px-[7px] py-[3px] right-0 top-0">
                      {categoryHandler(item.course_id)}
                    </p>
                    <div className=" flex flex-col  gap-2 p-2">
                      <p className="text-[18px] font-semibold ">
                        {titleHandler(item.course_id)}
                      </p>
                      <p>{descriptionHandler(item.course_id)}</p>
                      <Link
                        className="w-fit px-3 py-2 text-[15px] text-white bg-gray-500 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-600"
                        href={`/course/${titleHandler(item.course_id).replace(
                          /\s+/g,
                          "-"
                        )}/${item.course_id}`}
                      >
                        Go to course
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="h-[70vh] flex flex-col items-center justify-center gap-3">
                <p className="font-bold opacity-70 text-[24px]">
                  You are not subscribed any course yet
                </p>
                <Link
                  href={"/courses"}
                  className="w-fit px-[15px] py-[7px] text-white bg-purple-500 transition-all duration-300 ease-in-out hover:bg-purple-600 rounded-md"
                >
                  Go to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyCourses;
