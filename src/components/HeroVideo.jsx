"use client";
import Image from "next/image";
import { useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const HeroVideo = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Image
        src={
          "https://res.cloudinary.com/dcej7jjak/image/upload/v1691509060/laptop_kjhsaf.png"
        }
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%" }}
        alt="image"
      />
      <div className="absolute top-[4%] left-[10%] w-[80%]">
        {show ? (
          <div>
            <video
              autoPlay
              loop
              alt="video"
              controls
              src={
                "https://res.cloudinary.com/dcej7jjak/video/upload/v1691482479/hero_video_sljcra.mp4"
              }
              controlsList="nodownload  noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
            ></video>
            <div
              className="absolute top-[10px] right-[10px] cursor-pointer"
              onClick={() => setShow(false)}
            >
              <AiOutlineClose color="white" title="Close" fontSize={"24px"} />
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center items-center">
            <Image
              src={
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1691508685/hero_r1ycdr.png"
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%" }}
              alt="image"
            />
            <div
              className="absolute  cursor-pointer"
              onClick={() => setShow(true)}
            >
              <MdPlayCircleOutline
                color="white"
                fontSize={"50px"}
                title="Play"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroVideo;
