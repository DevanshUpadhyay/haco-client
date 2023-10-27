// import TypewriterEffect from "@/components/TypewriterEffect";
import Link from "next/link";
import { PiStudentBold } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiPiggyBankBold } from "react-icons/pi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Image from "next/image";
import TestimonialCart from "@/components/TestimonialCart";
import TypewriterEffect from "@/components/TypewriterEffect";
const page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-12 mb-6">
        <section>
          <div className="grid max-w-screen-xl  p-4 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12 ">
            <div className="mr-auto place-self-center sm:col-span-6 col-span-12 flex flex-col p-2 md:p-6 lg:p-8 xl:p-12">
              <div className="max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-3xl xl:text-3xl flex flex-col gap-6 ">
                <p className="text-3xl font-bold text-orange-500 w-full text-center">
                  Welcome to Haco
                </p>
                <div>
                  <span>We have </span>
                  <span className="text-blue-500">
                    <TypewriterEffect
                      words={["Superior Tutors", "Exceptional Results"]}
                    />
                  </span>
                </div>
              </div>

              <p className="max-w-2xl mb-6 font-normal lg:mb-8 md:text-md lg:text-lg ">
                Get 1-on-1 online personalized help from best tutors for
                subjects of your choice. for School, College students and adults
              </p>
              <div className="flex flex-col gap-3 xs:flex-row sm:flex-col md:flex-row">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center  text-center text-white rounded-md  px-2 xs:px-3 lg:px-5 py-3 text-md font-medium bg-orange-500 hover:bg-orange-600  focus:ring-4 focus:ring-blue-300"
                >
                  Book a Free Lesson
                </Link>
                <Link
                  href="/home"
                  className="inline-flex items-center justify-center px-2 xs:px-3 lg:px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 "
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex lg:mt-0 sm:col-span-6 col-span-12">
              <Image
                className="w-full"
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698238221/home1_xokymp.png"
                }
                alt="mockup"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        <div className="w-[95%] sm:py-24 py-8 mx-4 grid max-w-7xl gap-x-8 gap-y-10 sm:gap-y-20 px-6 lg:px-8 md:grid-cols-3 border-2 border-gray-200 rounded-2xl shadow-inner items-center justify-center">
          <div className="max-w-2xl flex flex-col items-center justify-center">
            <h2 className="lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 xs:text-3xl text-2xl sm:text-4xl md:text-3xl text-center">
              What sets Haco different
            </h2>
          </div>
          <ul role="list" className="grid xs:grid-cols-2 gap-y-6 md:col-span-2">
            <li>
              <div className="flex items-center sm:gap-x-6 gap-x-3 ">
                <PiStudentBold fontSize={"40px"} />
                <div>
                  <h3 className="text-xl xs:text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    Verfied
                  </h3>
                  <p className="text-lg xs:text-base font-semibold leading-6 text-indigo-600">
                    Expert Tutors
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center sm:gap-x-6 gap-x-3">
                <MdAttachMoney fontSize={"40px"} />
                <div>
                  <h3 className="text-xl xs:text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    Zero Cost
                  </h3>
                  <p className="text-lg xs:text-base font-semibold leading-6 text-indigo-600">
                    Free Trial
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center sm:gap-x-6 gap-x-3">
                <LiaMoneyBillWaveSolid fontSize={"40px"} />
                <div>
                  <h3 className="text-xl xs:text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    Starting At
                  </h3>
                  <p className="text-lg xs:text-base font-semibold leading-6 text-indigo-600">
                    $29/hr
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center sm:gap-x-6 gap-x-3">
                <PiPiggyBankBold fontSize={"40px"} />
                <div>
                  <h3 className="text-xl xs:text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    Affordable 1 on 1
                  </h3>
                  <p className="text-lg xs:text-base font-semibold leading-6 text-indigo-600">
                    Private Learning
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12 justify-center p-4 sm:p-2 md:p-6 gap-4 sm:gap-2 md:gap-4">
          <div class=" bg-white border border-gray-200 rounded-lg shadow col-span-12 sm:col-span-6 lg:col-span-4">
            <Image
              src={
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1698418019/home-1_gznduz.jpg"
              }
              className="rounded-lg w-full"
              sizes="100vw"
              width={0}
              height={0}
            />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Online 1-to-1 tutoring
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Learn coding, programming languages, computer science and other
                related subjects with personalized tutoring. Get 1-on-1 online
                support to build conceptual understanding for your class or
                course.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
              </a>
            </div>
          </div>
          <div class=" bg-white border border-gray-200 rounded-lg shadow col-span-12 sm:col-span-6 lg:col-span-4">
            <Image
              src={
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1698418019/home-2_gy8gdn.jpg"
              }
              className="rounded-lg w-full"
              sizes="100vw"
              width={0}
              height={0}
            />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Homework help
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Easily tackle academic hurdles with our homework assistance
                service. Our tutors are at your service to provide guidance on
                assignments, address your uncertainties, and boost your
                confidence in solving the most challenging problems.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
              </a>
            </div>
          </div>
          <div class=" bg-white border border-gray-200 rounded-lg shadow col-span-12 sm:col-span-6 lg:col-span-4">
            <Image
              src={
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1698418018/home-3_v20ezu.jpg"
              }
              className="rounded-lg w-full"
              sizes="100vw"
              width={0}
              height={0}
            />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Test preparation
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Equip yourself for success with our thorough test preparation
                service. Our adept tutors are focused on exam strategies,
                content review, and practice sessions, all designed to help you
                achieve top results on your tests.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center ">
              Simple no-tricks pricing
            </h2>
            <p className="text-lg leading-8 text-gray-600 text-center">
              Try our affordable private lessons risk-free
            </p>
          </div>
          <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Tutoring for all grades and levels
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Haco provides 1-on-1 online tutoring for Coding, Computer
                Science and other Technical subjects for every learning stage -
                school, college and work.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-600">
                  For Whom
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3 text-base">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  For school students
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  For college students
                </li>
                <li className="flex gap-x-3 text-base">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  For adults
                </li>
                {/* <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Official member t-shirt
                  </li> */}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Free Trial Lesson
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $0/hr
                    </span>
                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span> */}
                  </p>
                  <Link
                    href={"/request-demo"}
                    className="mt-10 block w-full rounded-md px-5 py-2 text-md font-medium bg-orange-500 hover:bg-orange-600  text-center   text-white  "
                  >
                    Book a Free Lesson
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Free session to help you discover your perfect tutor and
                    start your learning today. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:w-[50%] w-[90%]">
          <p className="font-bold text-[30px] flex items-center gap-2">
            Our Students <BsFillSuitHeartFill color="red" />
          </p>
          <p className="text-center">
            Here, our community members share their experiences and insights
            about their journey with us. Read on to discover how we've made a
            positive impact on their lives.
          </p>
        </div>

        <div className="grid grid-cols-12 justify-center items-center gap-6 sm:gap-2 md:gap-4 lg:gap-2 xl:gap-6  p-4 sm:p-2 md:p-4 lg:p-4">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
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
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
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
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
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
        </div>
      </div>
    </>
  );
};

export default page;
