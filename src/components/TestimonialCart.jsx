"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const TestimonialCart = ({
  name,
  university,
  country,
  comment,
  imageSrc,
  videoSrc,
  profileIconSrc,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-[520px] lg:w-[380px] md:w-[360px] w-[360px]  p-[15px] gap-[10px] relative flex flex-col items-center bg-white rounded-xl  select-none">
        <div className="relative">
          <div className="flex flex-col ">
            <div className="flex gap-[10px] items-center ">
              <Image
                src={profileIconSrc}
                width={60}
                height={60}
                style={{ borderRadius: "50%" }}
                alt="image"
              />
              <div>
                <div className="flex gap-[30px] items-center">
                  <p className="text-[18px] font-medium bg-white">{name}</p>
                  <div className="flex items-center">
                    <BiMap color="red" fontSize={"19px"} />
                    <p className="text-[19px] font-light">{country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <FaUniversity fontSize={"14px"} />
                  <p className="font-extralight opacity-[0.7]">{university}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="line-clamp-2">{`"${comment}"`}</p>
          {show && (
            <div
              className="z-10 absolute  bottom-[-40px] right-[70px]  cursor-pointer text-white bg-transparent"
              onClick={() => setShow(false)}
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
          className="relative h-[380px] pb-4 flex justify-center items-center"
          onClick={() => setShow(true)}
        >
          <Image
            src={imageSrc}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="image"
          />
          <div className="absolute cursor-pointer bg-transparent">
            <MdPlayCircleOutline
              fontSize={"50px"}
              color="white"
              title="Play"
              //   style={{ backgroundColor: "transparent" }}
            />
          </div>
          {show && (
            <div className="w-[100%] h-[100%] absolute flex justify-center top-0 pb-4 ">
              <video
                autoPlay
                loop
                alt="video"
                controls
                src={videoSrc}
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
