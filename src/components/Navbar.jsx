"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  return (
    // <>
    //   {/* <div className="py-2 flex items-center justify-around sticky top-0 z-50 bg-white ">
    //     <Link href={"/"} onClick={() => setNav(false)}>
    //       <Image src={logo} width={80} height={35} alt="image" />
    //     </Link>
    //     <div>
    //       <ul className="flex items-center gap-14 ">
    //         <li>
    //           <Link href={"/help"} onClick={() => setNav(false)}>
    //             <button className="w-[130px] text-[#8d49f7] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#6b53ff] hover:border-[2px] py-[5px] rounded-md tex font-medium">
    //               Project Help!
    //             </button>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={"/"} onClick={() => setNav(false)}>
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={"/blog"} onClick={() => setNav(false)}>
    //             Blog
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={"/about"} onClick={() => setNav(false)}>
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={"/contact"} onClick={() => setNav(false)}>
    //             Contact
    //           </Link>
    //         </li>
    //         <li>
    //           <div className="flex flex-col ">
    //             <button onClick={() => setNav(!show)}>Profile</button>
    //             <div className="relative">
    //               <div
    //                 className={`z-10 ${
    //                   show ? "block" : "hidden"
    //                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-3  `}
    //               >
    //                 <div className="px-4 py-3 text-sm  bg-green-400 rounded-t-lg text-white">
    //                   <div>Devansh Upadhyay</div>
    //                   <div className="font-medium truncate">
    //                     devanshupadhyay2611@gmail.com
    //                   </div>
    //                 </div>
    //                 <ul
    //                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
    //                   aria-labelledby="dropdownInformationButton"
    //                 >
    //                   <li>
    //                     <Link
    //                       href={"/my-account"}
    //                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                       onClick={() => setNav(false)}
    //                     >
    //                       My Account
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link
    //                       href={"/my-courses"}
    //                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                       onClick={() => setNav(false)}
    //                     >
    //                       My Courses
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link
    //                       href={"/refer-&-earn"}
    //                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                       onClick={() => setNav(false)}
    //                     >
    //                       Refer And Earn
    //                     </Link>
    //                   </li>
    //                 </ul>
    //                 <div className="py-2">
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 text-md text-purple-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                   >
    //                     Sign out
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <Link href={"/login"} onClick={() => setNav(false)}>
    //             <button className="w-[90px] text-[#8d49f7] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#6b53ff] hover:border-[2px] py-[5px] rounded-md tex font-medium ">
    //               Log in
    //             </button>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href={"/register"} onClick={() => setNav(false)}>
    //             <button className="w-[90px] text-[#fff] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#f8f3fe] hover:border-[1px] py-[5px] rounded-md tex font-medium bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] transition ease-in-out delay-20">
    //               Sign up
    //             </button>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div> */}

    //   {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <a href="https://flowbite.com/" className="flex items-center">
    //         <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           className="h-8 mr-3"
    //           alt="Flowbite Logo"
    //         />
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //           Flowbite
    //         </span>
    //       </a>
    //       <div className="flex md:order-2">
    //         <button
    //           type="button"
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Get started
    //         </button>
    //         <button
    //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           onClick={() => setNav(!nav)}
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 17 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M1 1h15M1 7h15M1 13h15"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div
    //         className={`items-center justify-between ${
    //           nav ? "flex" : "hidden"
    //         } w-full md:flex md:w-auto md:order-1`}
    //       >
    //         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //           <li>
    //             <div className="flex flex-col ">
    //               <button onClick={() => setNav(!show)}>Profile</button>
    //               <div className="relative">
    //                 <div
    //                   className={`z-10 ${
    //                     show ? "block" : "hidden"
    //                   } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-3  `}
    //                 >
    //                   <div className="px-4 py-3 text-sm  bg-green-400 rounded-t-lg text-white">
    //                     <div>Devansh Upadhyay</div>
    //                     <div className="font-medium truncate">
    //                       devanshupadhyay2611@gmail.com
    //                     </div>
    //                   </div>
    //                   <ul
    //                     className="py-2 text-sm text-gray-700 dark:text-gray-200"
    //                     aria-labelledby="dropdownInformationButton"
    //                   >
    //                     <li>
    //                       <Link
    //                         href={"/my-account"}
    //                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                         onClick={() => setNav(false)}
    //                       >
    //                         My Account
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link
    //                         href={"/my-courses"}
    //                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                         onClick={() => setNav(false)}
    //                       >
    //                         My Courses
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link
    //                         href={"/refer-&-earn"}
    //                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                         onClick={() => setNav(false)}
    //                       >
    //                         Refer And Earn
    //                       </Link>
    //                     </li>
    //                   </ul>
    //                   <div className="py-2">
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-md text-purple-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                     >
    //                       Sign out
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> */}
    // </>
    <>
      <nav className="bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNav(!nav)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="flex flex-1 items-center justify-center  lg:justify-around"
              // style={{ border: "2px solid red" }}
            >
              <div
                className="flex flex-shrink-0 items-center"
                // style={{ border: "2px solid green" }}
              >
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                <Image
                  className="cursor-pointer select-none"
                  src={"/logo.png"}
                  width={75}
                  height={100}
                  onClick={() => router.push("/")}
                />
              </div>
              <div
                className="hidden lg:ml-6 lg:block"
                // style={{ border: "2px solid blue" }}
              >
                <div className="flex items-center space-x-4">
                  <Link
                    href={"/help"}
                    className="w-fit text-[#8d49f7] border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-white  hover:text-white hover:bg-[#8d49f7] px-2 py-1 rounded-md tex font-medium"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Project Help!
                  </Link>
                  <Link
                    className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
                    href={"/"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
                    href={"/blog"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Blog
                  </Link>

                  <Link
                    className="0 hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
                    href={"/about"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    About
                  </Link>

                  <Link
                    className=" hover:bg-gray-300  rounded-md px-3 py-2 text-md font-medium"
                    href={"/contact"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Contact
                  </Link>
                  <Link
                    href={"/login"}
                    className="w-fit text-[#8d49f7] border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-white  hover:text-white hover:bg-[#8d49f7] px-3 py-1 rounded-md tex font-medium"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Log in
                  </Link>
                  <Link
                    href={"/register"}
                    className="w-fit text-white border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-[#8d49f7]  hover:text-[#8d49f7] hover:bg-white px-3 py-1 rounded-md tex font-medium"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg> */}

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800  select-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setProfile(!profile)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className={`absolute ${
                    profile ? "" : "hidden"
                  } right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  select-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <Link
                    href={"/my-account"}
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-300"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    My Account
                  </Link>
                  <Link
                    href={"/my-courses"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    My Courses
                  </Link>
                  <Link
                    href={"/refer-&-earn"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Refer and Earn
                  </Link>
                  {/* <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                   
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden  ${
            nav ? "left-0 " : "-left-[300px] "
          } w-[300px] z-40 absolute  transition-all  duration-300 ease-in-out h-[100vh] bg-white `}
          id="mobile-menu"
        >
          <div
            className=" px-4 pb-3 pt-2 flex flex-col gap-2"
            // style={{ border: "2px solid red" }}
          >
            <Link
              href={"/help"}
              className="w-fit text-[#8d49f7] border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-white  hover:text-white hover:bg-[#8d49f7] px-2 py-1 rounded-md tex font-medium"
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Project Help!
            </Link>
            <Link
              className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
              href={"/"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Home
            </Link>
            <Link
              className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
              href={"/blog"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Blog
            </Link>

            <Link
              className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
              href={"/about"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              About
            </Link>

            <Link
              className=" hover:bg-gray-300 rounded-md px-3 py-2 text-md font-medium"
              href={"/contact"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Contact
            </Link>
            <Link
              href={"/login"}
              className="w-fit text-[#8d49f7] block border-[1px]  border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-white  hover:text-white hover:bg-[#8d49f7] px-3 py-2 my-2 rounded-md tex font-medium"
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Log in
            </Link>
            <Link
              href={"/register"}
              className="w-fit text-white block border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-[#8d49f7]  hover:text-[#8d49f7] hover:bg-white px-3 py-2 my-2 rounded-md tex font-medium"
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
