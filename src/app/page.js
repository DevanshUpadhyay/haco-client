import CourseCart from "@/components/CourseCart";
import HeroVideo from "@/components/HeroVideo";
import TestimonialCart from "@/components/TestimonialCart";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-full grid lg:grid-cols-[5fr_3fr] sm:grid-cols-1 items-center py-4 gap-[10px]">
          <div className="w-full grid justify-center md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] xl:grid-cols-[3fr_2fr] sm:grid-cols-1 items-center py-8">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex gap-[16px] ">
                <p className="xl:text-[60px] lg:text-[45px] text-[24px] font-bold">
                  {" "}
                  Want to
                </p>
                <p className="text-blue-600 xl:text-[60px] lg:text-[45px] text-[24px] font-bold">
                  learn
                </p>
              </div>
              <p className="text-[20px]">Web Development</p>
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
          <CourseCart
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1689070745/java_itotdx.png"
            }
            category={"Java Programming + SQL"}
            title={"Java Prodigy: Turbocharge Your Programming Skills"}
            creator={"Deepak Sharma"}
            views={"733"}
            launch={"See Details"}
            price={"$149"}
            overPrice={"$249"}
          />
          <CourseCart
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1688715192/solidity_mhu9qd.png"
            }
            category={"Solidity"}
            title={"Solidity Prodigy: Turbocharge Your Programming Skills"}
            creator={"Deepak Sharma"}
            views={"---"}
            launch={"Coming Soon"}
            price={"$99"}
            overPrice={"$199"}
          />
          <CourseCart
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1688716282/bi7clxaeqmb3saavd62k.png"
            }
            category={"SQL Database"}
            title={"SQL Prodigy: Turbocharge Your Programming Skills"}
            creator={"Deepak Sharma"}
            views={"---"}
            launch={"Coming Soon"}
            price={"$49"}
            overPrice={"$99"}
          />
        </div>
        <div className="flex flex-col items-center lg:w-[50%] w-[90%]">
          <p className="font-bold text-[30px]">Student Testimonials</p>
          <p className="text-center">
            Here, our community members share their experiences and insights
            about their journey with us. Read on to discover how we've made a
            positive impact on their lives.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap    justify-center items-center gap-[20px]">
          <TestimonialCart
            profileIconSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318578/konlin_lpb4vf.png"
            }
            imageSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691508705/konlin2_luw5sq.png"
            }
            videoSrc={
              "https://res.cloudinary.com/dcej7jjak/video/upload/v1691144290/konlin_wiay2n.mp4"
            }
            name={"Konlin"}
            country={"South Africa"}
            university={"University of South Africa"}
            comment={
              "I just wanted to let you know how wonderful Deepak and his team from Haco are, They helped me get two distinctions in  both of my python modules, I highly recommend Haco to anyone who's looking to learn programming."
            }
          />
          <TestimonialCart
            profileIconSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318578/yankim_fe09n9.png"
            }
            imageSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691508703/yankim2_l7usd2.png"
            }
            videoSrc={
              "https://res.cloudinary.com/dcej7jjak/video/upload/v1691144297/yankim_xkaehs.mp4"
            }
            name={"Yankim"}
            country={"Australia"}
            university={"Murdoch University"}
            comment={
              "Haco is very good self learning platform for those who wants to learn programming languages, and it provide very detailed explanation and it does has very good support. Well, you have any query and Haco can provide solution in a short time."
            }
          />
          <TestimonialCart
            profileIconSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318577/ramde_f3iq5v.png"
            }
            imageSrc={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691508702/ramde2_idy29w.png"
            }
            videoSrc={
              "https://res.cloudinary.com/dcej7jjak/video/upload/v1691143441/ramde2_urk4tf.mp4"
            }
            name={"Ramde"}
            country={"U.S.A"}
            university={"Cuny University"}
            comment={
              "Any student, especially computer science student, if you are looking for help with programming language such as Java,SQL,Python,JavaScript okay, I have good news for you, this website is called Haco. Go ahead, take a look,you will thank me later."
            }
          />
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
