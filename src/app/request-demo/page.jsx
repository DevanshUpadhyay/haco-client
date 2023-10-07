"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const RequestDemo = () => {
  const [who, setWho] = useState("");
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [value, setValue] = useState(2);
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(-1);
  // const [userDetails, setUserDetails] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const router = useRouter();
  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };
  const dates = [
    {
      day: "Sun",
      date: "24 Sep",
    },
    {
      day: "Mon",
      date: "25 Sep",
    },
    {
      day: "Tue",
      date: "26 Sep",
    },
    {
      day: "Wed",
      date: "27 Sep",
    },
    {
      day: "Thu",
      date: "28 Sep",
    },
    {
      day: "Fri",
      date: "29 Sep",
    },
  ];
  const times = [
    "9:00",
    "9:15",
    "9:30",
    "9:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
  ];
  const steps = [
    {
      id: 1,
      step: "Help us understand your need",
      question: "Who is this free lesson for?",
      options: ["Me", "My Child", "Someone Else"],
      imgUrl: "/step1.jpeg",
      imgHeading: "Learn from the top tutors",
      imgDescription: "Get Qualified, Verified & Experienced tutors",
    },
    {
      id: 2,
      step: "We want to customize your learning plan",
      question: "Select your level",
      options: ["School", "College", "Adult"],
      imgUrl: "/step2.jpeg",
      imgHeading: "Wiingy provides tutoring support across grades and level",
      imgDescription: "For school, university and working professionals",
    },
    {
      id: 3,
      step: "We want to customize your learning plan",
      question: "Select your grade",
      options: ["Freshman", "Sophomore", "Junior", "Senior", "Other"],
      imgUrl: "/step3.jpeg",
      imgHeading: "Wiingy provides tutoring support across grades and level",
      imgDescription: "For school, university and working professionals",
    },
    {
      id: 4,
      step: "Select the area that you require tutoring support for",
      question: "Where do you need help?",
      options: [
        "Java Core",
        "Java Advanced",
        "Python",
        "Web Development",
        "Blockchain",
        "SQl Database",
      ],
      imgUrl: "/step4.jpeg",
      imgHeading: "Get help in Coding, Math, Science, AP and 50+ subjects",
      imgDescription: "Top tutors available starting at $28/hr",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col p-5 gap-10 items-center justify-center  md:py-[20%] lg:py-[2%]"
        // style={{ border: "2px solid red" }}
      >
        <div
          className=" flex flex-col w-full relative gap-6"
          // style={{ border: "2px solid green" }}
        >
          <div className="flex items-center justify-center">
            <button
              className="absolute left-0  rounded-full p-[10px]  hover:bg-gray-200"
              onClick={() => {
                setStep(step === 1 ? step : step - 1);
                setValue(value !== 2 ? value - 14 : value);
              }}
            >
              <BsArrowLeft fontSize={"24px"} color="#00008b" />
            </button>
            {steps.map((item, index) => (
              <>
                {step - 1 === index && (
                  <p
                    className="font-semibold text-[20px] px-12"
                    // style={{ border: "2px solid red" }}
                  >
                    Step {index + 1}: {item.step}
                  </p>
                )}
              </>
            ))}

            {step === 5 && (
              <p className="font-semibold text-[20px] px-12">
                Step 5: Introduce yourself
              </p>
            )}
            {step === 6 && (
              <p className="font-semibold text-[20px] px-12">
                Step 6: Almost done! Need few more details
              </p>
            )}
            {step === 7 && (
              <p className="font-semibold text-[20px] px-12">
                Step 7: Schedule Free Session
              </p>
            )}
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              class="bg-[#00008b] h-1.5 rounded-full"
              style={{ width: `${value}%`, transition: "all 0.7s ease" }}
            ></div>
          </div>
        </div>

        {steps.map((item, index) => (
          <>
            {step - 1 === index && (
              <div
                className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 md:px-[5%] lg:px-[10%]"
                // style={{ border: "2px solid green" }}
              >
                <div
                  className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
                  //   style={{ border: "2px solid black" }}
                >
                  <Image
                    src={item.imgUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "20px",
                      zIndex: "-1",
                      position: "absolute",
                    }}
                  />
                  <div className="p-[20px]">
                    <p className="text-[17px] font-semibold text-white">
                      {item.imgHeading} {index}
                    </p>
                    <p className="text-[14px] text-white">
                      {item.imgDescription}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-[22px] font-bold">{item.question}</p>
                    <p className="text-[14px]">Choose one of the following</p>
                  </div>
                  {item.options.map((option, id) => (
                    <button
                      className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                      onClick={() => {
                        setStep(step + 1);
                        setValue(value + 14);
                        setLevel(option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}

        {step === 5 && (
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 lg:px-[10%]">
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={"/step5.jpeg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  zIndex: "-1",
                  position: "absolute",
                }}
              />
              <div className="p-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  1-on-1 Online Tutoring
                </p>
                <p className="text-[14px] text-white">
                  Get help for concepts, assignments, test-prep and homework
                  help
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">
                  Introduce yourself and tell us what you want to learn
                </p>
                <p className="text-[14px]">Please fill in the details</p>
              </div>

              {/* <input
                  type="text"
                  className="bg-[#f8f3fe] border-[1px] border-gray-300 h-[100px]"
                  placeholder="Tell us a bit more about your learning goal, your availability and if you are working against a timeline. The more information you share the faster and easier it will be for us to find perfect tutor for you..."
                /> */}
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-[#f8f3fe] border-[1px] border-gray-300 h-[150px] resize-none hover:border-gray-900 rounded-[3px] p-[10px] "
                placeholder="Tell us a bit more about your learning goal, your availability and if you are working against a timeline. The more information you share the faster and easier it will be for us to find perfect tutor for you..."
                onChange={(e) => setText(e.target.value)}
              >
                {text}
              </textarea>
              {text.length > 0 ? (
                <button
                  className="flex items-center justify-center bg-[#000099] w-[300px] text-white h-[50px] rounded-md hover:bg-[#000066] transition-all duration-100 ease-in-out "
                  onClick={() => {
                    setStep(step + 1);
                    setValue(value + 14);
                  }}
                >
                  <p className="text-[17px] font-semibold">Continue</p>
                  <BsChevronRight fontSize={"18px"} />
                </button>
              ) : (
                <button className="flex items-center justify-center bg-gray-300 w-[300px] text-white h-[50px] rounded-md  transition-all duration-100 ease-in-out cursor-default ">
                  <p className="text-[17px] font-semibold">Continue</p>
                  <BsChevronRight fontSize={"18px"} />
                </button>
              )}
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 lg:px-[10%]">
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={"/step6.jpeg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  zIndex: "-1",
                  position: "absolute",
                }}
              />
              <div className="p-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  Private 1-on-1 online tutoring
                </p>
                <p className="text-[14px] text-white">
                  Get help for concepts, assignments, test-prep and homework
                  help
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">Enter contact details</p>
                <p className="text-[14px]">Enter your contact details</p>
              </div>

              {/* <input
                  type="text"
                  className="bg-[#f8f3fe] border-[1px] border-gray-300 h-[100px]"
                  placeholder="Tell us a bit more about your learning goal, your availability and if you are working against a timeline. The more information you share the faster and easier it will be for us to find perfect tutor for you..."
                /> */}
              <div>
                <label>
                  Phone Number:
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    onChange={handleChange}
                    countryCodeEditable={false}
                    inputProps={{
                      required: true,
                    }}
                    enableSearch={true}
                  />
                </label>
                {/* {!valid && <p>Please enter a valid phone number.</p>} */}
              </div>

              {valid ? (
                <button
                  className="flex items-center justify-center bg-[#000099] w-[300px] text-white h-[50px] rounded-md hover:bg-[#000066] transition-all duration-100 ease-in-out "
                  onClick={() => {
                    setStep(step + 1);
                    setValue(value + 14);
                  }}
                >
                  <p className="text-[17px] font-semibold">Continue</p>
                  <BsChevronRight fontSize={"18px"} />
                </button>
              ) : (
                <button className="flex items-center justify-center bg-gray-300 w-[300px] text-white h-[50px] rounded-md  transition-all duration-100 ease-in-out cursor-default ">
                  <p className="text-[17px] font-semibold">Continue</p>
                  <BsChevronRight fontSize={"18px"} />
                </button>
              )}
            </div>
          </div>
        )}
        {step === 7 && (
          <div
            className="flex flex-col items-center justify-center gap-16 md:px-[5%]  w-[100%] "
            // style={{ border: "2px solid red" }}
          >
            <div className="w-full flex justify-start gap-24">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold">
                    Select a date & time for your first free lesson
                  </p>
                  <p className="text-[18px] font-semibold">Select a Date</p>
                  <div className="flex flex-wrap gap-3">
                    {dates.map((item, index) => (
                      <button
                        className={`py-[12px] px-[10px] rounded-md shadow-lg border-[2px] border-gray-400 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600  ${
                          date === index &&
                          "bg-blue-50 border-blue-600 text-blue-600"
                        }`}
                        onClick={() => setDate(index)}
                      >
                        <p>{item.day}</p>
                        <p>{item.date}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-[18px] font-semibold">Select a Time</p>
                  <div className="flex flex-wrap gap-3">
                    {times.map((item, index) => (
                      <button
                        className={`w-[100px] py-[12px] px-[10px] rounded-md shadow-lg border-[2px] border-gray-400 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 ${
                          time === index &&
                          "bg-blue-50 border-blue-600 text-blue-600"
                        }`}
                        onClick={() => {
                          setTime(index);
                          setValue(value + 14);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {time > -1 ? (
                  <button
                    className="flex items-center justify-center bg-[#000099] w-[300px] text-white h-[50px] rounded-md hover:bg-[#000066] transition-all duration-100 ease-in-out "
                    onClick={() => router.push("/login")}
                  >
                    <p className="text-[17px] font-semibold">Login/Signup</p>
                    <BsChevronRight fontSize={"18px"} />
                  </button>
                ) : (
                  <button className="flex items-center justify-center bg-gray-300 w-[300px] text-white h-[50px] rounded-md  transition-all duration-100 ease-in-out cursor-default ">
                    <p className="text-[17px] font-semibold">Login/Signup</p>
                    <BsChevronRight fontSize={"18px"} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RequestDemo;
