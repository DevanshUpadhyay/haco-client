import HeroVideo from "@/components/HeroVideo";

import TestimonialCart from "@/components/TestimonialCart";
import TypewriterEffect from "@/components/TypewriterEffect";
import { getAllCourses } from "@/functions";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";

export default async function Home() {
  const courses = await getAllCourses();

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-full grid lg:grid-cols-[5fr_3fr] sm:grid-cols-1 items-center py-4 gap-[10px]">
          <div className="w-full grid justify-center md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] xl:grid-cols-[3fr_2fr] sm:grid-cols-1 items-center py-8">
            <div className="flex flex-col items-center justify-center ">
              <div className="xl:text-[60px] lg:text-[45px] text-[24px] font-bold ">
                Want to <span className="text-blue-600">learn</span>
              </div>
              <p className="text-[40px]">
                <TypewriterEffect
                  words={[
                    "Python",
                    "Java Core",
                    "Java Advanced",
                    "Web Development",
                  ]}
                />
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[20px]">Are you confused ??</p>
              <div className="flex items-center justify-center">
                <p>Book a free 🔴</p>
                <p className="inline-block text-center text-[red] text-[18px] w-[60px] items-center rounded-[10px] border-[2px] border-[red] m-[4px]">
                  LIVE
                </p>
                session now
                <p className="inline-block">
                  <AiOutlineArrowDown
                    className="vector-graphics"
                    size={"20px"}
                    color="red"
                  />
                </p>
              </div>
              <Link
                href={"/request-demo"}
                className="mt-3 bg-[#6b53ff] text-white hover:bg-[#8d49f7] py-[7px] px-[10px] rounded-[7px]  select-none"
              >
                Book a Free Lesson
              </Link>
            </div>
          </div>
          <div className="md:p-12 lg:p-2">
            <HeroVideo />
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-[50%] w-[90%]">
          <p className="font-bold text-[30px]">Our Courses</p>
          <p className="text-center">
            Dive into a world of knowledge and skill-building with our
            meticulously designed courses. Uncover opportunities for growth,
            learning, and success as you embark on your educational journey with
            us.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center gap-10 ">
          {courses?.map((item, index) => (
            <div
              key={index}
              className="w-[90%] lg:w-[350px] md:w-[360px]  rounded-[5px] flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.535)] relative hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
            >
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
                    href={`/course/${item.title.replace(/\s+/g, "-")}/${
                      item._id
                    }`}
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
          {/* <CourseCart /> */}
        </div>

        <div className="flex flex-col items-center w-full gap-3">
          <p className="font-bold text-[30px]">Why Choose Us</p>
          <div className="flex flex-col md:flex-row justify-center items-center w-full p-3">
            <div className="flex flex-col w-full lg:w-[30%] p-5 justify-center items-center rounded-[10%]  shadow-[0_0_10px_rgba(0,0,0,0.535)]">
              <ul className="text-[18px] flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  🔴 Live Doubt Solving Sessions
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle color="green" /> Expert Instructors
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdCheckCircle color="green" />
                  Comprehensive Course Catalog
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdCheckCircle color="green" />
                  Interactive Learning Experience
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdCheckCircle color="green" />
                  Flexible Learning Options
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle color="green" /> Career development assistance
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle color="green" /> Practical Learning Approach
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdCheckCircle color="green" />
                  Affordable Pricing
                </li>
              </ul>
            </div>
            <Image
              className="w-full md:w-[50%] lg:w-[45%]"
              src={
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1691301895/hero2_ffyfeg.png"
              }
              width={0}
              height={0}
              sizes="100vw"
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-[50%] w-[90%]">
          <p className="font-bold text-[30px]">Our Programs</p>
          <p className="text-center">
            Welcome to Haco, an innovative and comprehensive e-learning platform
            dedicated to providing a top-notch education in programming
            languages. Our mission is to equip individuals like you with the
            knowledge and skills necessary to succeed in the dynamic world of
            coding.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="w-full md:w-[50%]"
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691301734/hero1_sqaauz.png"
            }
            width={0}
            height={0}
            sizes="100vw"
            alt="image"
          />
          <div className="flex flex-col justify-center items-center w-full p-[20px] gap-2">
            <p className="text-[30px] font-thin text-center">
              Youthful Passion, Leading Knowledge
            </p>
            <p className="text-center w-[85%]">
              Our dynamic team of young professionals is driven by a shared
              enthusiasm for education. With up-to-date expertise, we deliver
              top-quality programming courses that keep you ahead in the
              fast-paced world of technology.
            </p>
            <ul className="text-[18px] flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Fresh Perspectives
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Cutting-Edge Expertise
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" /> Staying Ahead of the Curve
              </li>

              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Leading with knowledge
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          <Image
            className="w-full md:w-[50%]"
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691302105/hero3_bch9mw.png"
            }
            width={0}
            height={0}
            sizes="100vw"
            alt="image"
          />
          <div className="flex flex-col justify-center items-center w-full p-[20px] gap-2">
            <p className="text-[30px] font-thin text-center">
              Strive for Excellent
            </p>
            <p className="text-center w-[85%]">
              Unleash your full potential and achieve mastery in coding and
              programming through our rigorous and comprehensive curriculum.
            </p>
            <ul className="text-[18px] flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Unleash Your Full Potential
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Elevate Your Skills
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" /> Industry-Recognized Expertise
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center">
          <Image
            className="w-full md:w-[50%]"
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691302144/thirdsvg_c3wbdi.png"
            }
            width={0}
            height={0}
            sizes="100vw"
            alt="image"
          />
          <div className="flex flex-col justify-center items-center w-full p-[20px] gap-2">
            <p className="text-[30px] font-thin text-center">
              Education is life
            </p>
            <p className="text-center w-[85%]">
              Unlock limitless opportunities with our coding courses. Expert
              instructors, hands-on learning, and affordable prices. Join us for
              a transformative learning journey!
            </p>
            <ul className="text-[18px] flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Gain In-Demand Skills
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle color="green" />
                Flexible and Affordable Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
