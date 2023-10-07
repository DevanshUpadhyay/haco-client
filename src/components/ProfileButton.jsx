"use client";
import Link from "next/link";
import React, { useState } from "react";

const ProfileButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col ">
        <button onClick={() => setShow(!show)}>Profile</button>
        <div className="relative">
          <div
            class={`z-10 ${
              show ? "block" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-3  `}
          >
            <div class="px-4 py-3 text-sm  bg-green-400 rounded-t-lg text-white">
              <div>Devansh Upadhyay</div>
              <div class="font-medium truncate">
                devanshupadhyay2611@gmail.com
              </div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <Link
                  href={"/my-account"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShow(false)}
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href={"/my-courses"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShow(false)}
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  href={"/my-earnings"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShow(false)}
                >
                  Earnings
                </Link>
              </li>
            </ul>
            <div class="py-2">
              <a
                href="#"
                class="block px-4 py-2 text-md text-purple-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileButton;
