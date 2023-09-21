"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const TestimonialCart = () => {
  const [konlin, setKonlin] = useState(false);
  return (
    <>
      <div className="h-[520px]  p-[15px] gap-[10px] relative flex flex-col items-center bg-white rounded-xl">
        <div className="relative">
          <div className="flex flex-col ">
            <div className="flex gap-[10px] items-center ">
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318578/konlin_lpb4vf.png"
                }
                width={60}
                height={60}
                style={{ borderRadius: "50%" }}
                alt="image"
              />
              <div>
                <div className="flex gap-[30px] items-center">
                  <p className="text-[18px] font-medium bg-white">Konlin</p>
                  <div className="flex items-center">
                    <BiMap color="red" fontSize={"19px"} />
                    <p className="text-[19px] font-light"> South Africa</p>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <FaUniversity fontSize={"14px"} />
                  <p className="font-extralight opacity-[0.7]">
                    University of South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="line-clamp-2">
            "I just wanted to let you know how wonderful Deepak and his team
            from Haco are, They helped me get two distinctions in both of my
            python modules, I highly recommend Haco to anyone who's looking to
            learn programming."
          </p>
          {konlin && (
            <div
              className="z-10 absolute  bottom-[-40px] right-[60px]  cursor-pointer text-white bg-transparent"
              onClick={() => setKonlin(false)}
            >
              <AiOutlineClose
                title="Close"
                color="white"
                fontSize={"24px"}
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          )}
        </div>
        <div
          className="relative h-[380px] pb-4"
          onClick={() => setKonlin(true)}
        >
          <Image
            src={
              "https://res.cloudinary.com/dcej7jjak/image/upload/v1691508705/konlin2_luw5sq.png"
            }
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="image"
          />
          <div className="absolute top-[40%] right-[40%] cursor-pointer bg-transparent">
            <MdPlayCircleOutline
              fontSize={"50px"}
              color="white"
              title="Play"
              //   style={{ backgroundColor: "transparent" }}
            />
          </div>
          {konlin && (
            <div className="w-[100%] h-[100%] absolute flex justify-center top-0 pb-4 ">
              <video
                autoPlay
                loop
                alt="video"
                controls
                src={
                  "https://res.cloudinary.com/dcej7jjak/video/upload/v1691144290/konlin_wiay2n.mp4"
                }
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
              ></video>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialCart;
