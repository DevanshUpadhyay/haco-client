"use client";

import Image from "next/image";
import { useState } from "react";

const Learn = () => {
  const [lectureNumber, setlectureNumber] = useState(0);
  const [sectionNumber, setSectionNumber] = useState(0);
  const course = [
    {
      sections: [
        {
          id: 1,
          name: "INTRODUCTION",
          lectures: [
            {
              id: 1,
              name: "Introduction to Java",
              videoUrl: "k2TwL9Abn1t7uYzvTK1",
              imgUrl: "https://s2.dmcdn.net/v/VHsiv1b64vg2vn-eJ/x180",
            },
            {
              id: 2,
              name: "Platform Independent",
              videoUrl: "k3JN3KTxRn41iFzvTLf",
              imgUrl: "https://s2.dmcdn.net/v/VHsk51b64cIm9W0p3/x180",
            },
            {
              id: 3,
              name: "Eclipse Setup",
              videoUrl: "k3GU2cKH4P2E4ozvTLM",
              imgUrl: "https://s2.dmcdn.net/v/VHskc1b63JmrF59hV/x180",
            },
          ],
        },
        {
          id: 2,
          name: "FUNDAMENTALS",
          lectures: [
            {
              id: 1,
              name: "Java Fundamentals",
              videoUrl: "k1RL7qdHxgn96azvTMM",
              imgUrl: "https://s2.dmcdn.net/v/VHsla1b64bZ3OsLk3/x180",
            },
            {
              id: 2,
              name: "Explanation (Part1)",
              videoUrl: "k35wLypiKEx2RFzvTMk",
              imgUrl: "https://s1.dmcdn.net/v/VHsl81b64pLuY3GG3/x180",
            },
            {
              id: 3,
              name: "Explanation (Part 2)",
              videoUrl: "k2eMMWEhQ80V8jzvRJC",
              imgUrl: "https://s1.dmcdn.net/v/VHqqO1b61BvKRzx8J/x180",
            },
            {
              id: 4,
              name: "Explanation (Part 3)",
              videoUrl: "k2TwL9Abn1t7uYzvTK1",
              imgUrl: "https://s2.dmcdn.net/v/VHsiv1b64vg2vn-eJ/x180",
            },
            {
              id: 5,
              name: "Explanation (Part  4)",
              videoUrl: "k35wLypiKEx2RFzvTMk",
              imgUrl: "https://s1.dmcdn.net/v/VHsl81b64pLuY3GG3/x180",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr]  gap-[20px]">
        <div className="flex flex-col p-[20px] gap-5">
          <div className="w-[70vw] h-[80vh]">
            <iframe
              src={`https://geo.dailymotion.com/player/xjs1z.html?video=${course[0].sections[sectionNumber].lectures[lectureNumber].videoUrl}`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>

          <p className="text-[24px] font-bold">{`#${
            Number(sectionNumber) + 1
          }.${Number(lectureNumber)} ${
            course[0].sections[sectionNumber].lectures[lectureNumber].name
          }`}</p>
        </div>
        <div className="flex flex-col h-[100vh] overflow-y-scroll  gap-6 p-[10px] shadow-md">
          {course[0].sections.map((sectionItem, sectionIndex) => (
            <div className="flex flex-col gap-3">
              <div
                className="grid grid-cols-[1fr_3fr] items-center p-[10px] justify-center"
                onClick={() => {
                  setSectionNumber(sectionIndex);
                  setlectureNumber(0);
                }}
              >
                <p className="font-bold text-center">{sectionIndex + 1}</p>
                <p className=" font-bold text-center text-white bg-green-400 p-[5px] cursor-pointer rounded-md transition-all duration-300 ease-in-out hover:bg-green-500">
                  {sectionItem.name}
                </p>
              </div>
              {sectionItem.lectures.map((lectureItem, lectureIndex) => (
                <div
                  className="grid grid-cols-[3fr_5fr] p-[5px] items-center gap-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 shadow-sm"
                  onClick={() => {
                    setSectionNumber(sectionIndex);
                    setlectureNumber(lectureIndex);
                  }}
                >
                  <Image src={lectureItem.imgUrl} width={150} height={100} />
                  <p className="line-clamp-3 text-center">{lectureItem.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Learn;