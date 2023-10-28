"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { logout } from "@/redux/actions/user";
import { useDispatch } from "react-redux";

const Navbar = ({ user }) => {
  const [profile, setProfile] = useState(false);
  const [nav, setNav] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    setNav(false);
    setProfile(false);
    dispatch(logout());
    location.replace("/");

    // router.push("/");
  };
  // console.log(user);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // setTimeout(() => {
    //   setProfile(true);
    // }, 5000);
  }, []);

  return (
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="flex flex-1 items-center justify-center  lg:justify-evenly"
              // style={{ border: "2px solid red" }}
            >
              <div
                className="flex flex-shrink-0 items-center"
                // style={{ border: "2px solid green" }}
              >
                <Image
                  className="cursor-pointer select-none"
                  src={"/logo.png"}
                  width={75}
                  height={40}
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
                    href={"/courses"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Courses
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
                    className="rounded-md px-5 py-2 text-md font-medium bg-orange-500 hover:bg-orange-600 text-white"
                    href={"/request-demo"}
                    onClick={() => {
                      setNav(false);
                      setProfile(false);
                    }}
                  >
                    Book a Free Lesson
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    <Image
                      className="rounded-full"
                      src={`${
                        isClient && user && user.avatar.url !== "url"
                          ? user?.avatar.url
                          : "https://res.cloudinary.com/dcej7jjak/image/upload/v1697101152/profile-icon_j8vu7y.png"
                      }`}
                      width={30}
                      height={30}
                    />
                  </button>
                </div>

                <div
                  className={`absolute ${
                    profile ? "flex" : "hidden"
                  } right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  select-none items-center flex-col gap-2`}
                  // style={{ border: "2px solid red" }}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  {!user && (
                    <>
                      <Link
                        href={"/login"}
                        className="w-fit text-[#8d49f7] border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-white  hover:text-white hover:bg-[#8d49f7] px-3 py-1 rounded-md tex font-medium block"
                        // style={{ border: "2px solid red" }}
                        onClick={() => {
                          setNav(false);
                          setProfile(false);
                        }}
                      >
                        Log in
                      </Link>
                      <Link
                        href={"/register"}
                        className="w-fit text-white border-[1px] border-[#8d49f7] text-[18px] transition-all duration-300 ease-in-out bg-[#8d49f7]  hover:text-[#8d49f7] hover:bg-white px-3 py-1 rounded-md tex font-medium block"
                        // style={{ border: "2px solid red" }}
                        onClick={() => {
                          setNav(false);
                          setProfile(false);
                        }}
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                  {user && (
                    <>
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
                    </>
                  )}
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
                  {user && (
                    <button
                      className="block px-4 py-2 text-md w-full text-gray-700 hover:bg-gray-300"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  )}
                  {/* <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                   
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
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
              href={"/courses"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Courses
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
              className="rounded-md px-3 w-fit py-2 text-md font-medium bg-orange-500 hover:bg-orange-600 text-white"
              href={"/request-demo"}
              onClick={() => {
                setNav(false);
                setProfile(false);
              }}
            >
              Book a Free Lesson
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
