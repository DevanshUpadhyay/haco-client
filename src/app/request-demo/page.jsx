"use client";

import { SubmitUserDetails } from "@/redux/actions/other";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
const RequestDemo = () => {
  const [who, setWho] = useState("");
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [date, setDate] = useState(0);
  // const [time, setTime] = useState(-1);
  // const [userDetails, setUserDetails] = useState(false);

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
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      SubmitUserDetails(who, level, grade, subject, text, phoneNumber, country)
    );
    router.push("/login");
  };
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const d = new Date();
  // let month = months[d.getMonth()];
  // let selectDate = d.getDate();
  // const dates = [
  //   {
  //     day: "Sun",
  //     date: `${selectDate} ${month}`,
  //   },
  //   {
  //     day: "Mon",
  //     date: "25 Sep",
  //   },
  //   {
  //     day: "Tue",
  //     date: "26 Sep",
  //   },
  //   {
  //     day: "Wed",
  //     date: "27 Sep",
  //   },
  //   {
  //     day: "Thu",
  //     date: "28 Sep",
  //   },
  //   {
  //     day: "Fri",
  //     date: "29 Sep",
  //   },
  // ];
  // const times = [
  //   "9:00",
  //   "9:15",
  //   "9:30",
  //   "9:45",
  //   "10:00",
  //   "10:15",
  //   "10:30",
  //   "10:45",
  //   "11:00",
  //   "11:15",
  //   "11:30",
  //   "11:45",
  //   "12:00",
  //   "12:15",
  //   "12:30",
  //   "12:45",
  //   "13:00",
  //   "13:15",
  //   "13:30",
  //   "13:45",
  //   "14:00",
  //   "14:15",
  //   "14:30",
  //   "14:45",
  //   "15:00",
  //   "15:15",
  //   "15:30",
  //   "15:45",
  //   "16:00",
  //   "16:15",
  //   "16:30",
  //   "16:45",
  //   "17:00",
  //   "17:15",
  //   "17:30",
  //   "17:45",
  //   "18:00",
  //   "18:15",
  //   "18:30",
  //   "18:45",
  //   "19:00",
  // ];

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
                setValue(value !== 0 ? value - 20 : value);
              }}
            >
              <BsArrowLeft fontSize={"24px"} color="#00008b" />
            </button>

            {step === 1 && (
              <p className="font-semibold text-[20px] px-12">
                Step 1: Help us understand your need
              </p>
            )}
            {step === 2 && (
              <p className="font-semibold text-[20px] px-12">
                Step 2: We want to customize your learning plan
              </p>
            )}
            {step === 3 && (
              <p className="font-semibold text-[20px] px-12">
                Step 3: We want to customize your learning plan
              </p>
            )}

            {step === 4 && (
              <p className="font-semibold text-[20px] px-12">
                Step 4: Select the area that you require tutoring support for
              </p>
            )}

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
            {/* {step === 7 && (
              <p className="font-semibold text-[20px] px-12">
                Step 7: Schedule Free Session
              </p>
            )} */}
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              class="bg-[#00008b] h-1.5 rounded-full"
              style={{ width: `${value}%`, transition: "all 0.7s ease" }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div
            className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 md:px-[5%] lg:px-[10%]"
            // style={{ border: "2px solid green" }}
          >
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step1_lfnwgm.jpg"
                }
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
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  Learn from the top tutors
                </p>
                <p className="text-[14px] text-white">
                  Get Qualified, Verified & Experienced tutors
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">
                  Who is this free lesson for?
                </p>
                <p className="text-[14px]">Choose one of the following</p>
              </div>

              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setWho("Me");
                }}
              >
                Me
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setWho("My Child");
                }}
              >
                My Child
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setWho("Someone Else");
                }}
              >
                Someone Else
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div
            className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 md:px-[5%] lg:px-[10%]"
            // style={{ border: "2px solid green" }}
          >
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step2_rn86yo.jpg"
                }
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
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  Haco provides tutoring support across grades and level
                </p>
                <p className="text-[14px] text-white">
                  For school, university and working professionals
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">Select your level</p>
                <p className="text-[14px]">Choose one of the following</p>
              </div>

              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setLevel("School");
                }}
              >
                School
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setLevel("College");
                }}
              >
                College
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setLevel("Adult");
                }}
              >
                Adult
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div
            className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 md:px-[5%] lg:px-[10%]"
            // style={{ border: "2px solid green" }}
          >
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step3_ghidyf.jpg"
                }
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
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  Haco provides tutoring support across grades and level
                </p>
                <p className="text-[14px] text-white">
                  For school, university and working professionals
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">Select your grade</p>
                <p className="text-[14px]">Choose one of the following</p>
              </div>

              {level === "School" ? (
                <>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Grade 12");
                    }}
                  >
                    Grade 12
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Grade 11");
                    }}
                  >
                    Grade 11
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Grade 10");
                    }}
                  >
                    Grade 10
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Grade 9");
                    }}
                  >
                    Grade 9
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Freshman");
                    }}
                  >
                    Freshman
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Sophomore");
                    }}
                  >
                    Sophomore
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Junior");
                    }}
                  >
                    Junior
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Senior");
                    }}
                  >
                    Senior
                  </button>
                  <button
                    className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                    onClick={() => {
                      setStep(step + 1);
                      setValue(value + 20);
                      setGrade("Other");
                    }}
                  >
                    Other
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        {step === 4 && (
          <div
            className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 md:px-[5%] lg:px-[10%]"
            // style={{ border: "2px solid green" }}
          >
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step4_hxqepu.jpg"
                }
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
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
                <p className="text-[17px] font-semibold text-white">
                  Get help in Coding, Computer Science subjects and other
                  related subjects
                </p>
                <p className="text-[14px] text-white">
                  Top tutors available starting at $29/hr
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[22px] font-bold">Where do you need help?</p>
                <p className="text-[14px]">Choose one of the following</p>
              </div>

              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setSubject("Java Core");
                }}
              >
                Java Core
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setSubject("Java Advanced");
                }}
              >
                Java Advanced
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setSubject("Python");
                }}
              >
                Python
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setSubject("Blockchain");
                }}
              >
                Blockchain
              </button>
              <button
                className="border-[1px] border-gray-300  h-[45px] w-[300px] rounded-md hover:border-[#00008b] transition-all duration-100 ease-in-out"
                onClick={() => {
                  setStep(step + 1);
                  setValue(value + 20);
                  setSubject("SQL Database");
                }}
              >
                SQL Database
              </button>

              <label
                for="other-subject"
                class="block text-md font-medium text-gray-900"
              >
                Other
              </label>
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Subject  Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {subject.length > 0 ? (
                <button
                  className="flex items-center justify-center bg-[#000099] w-[300px] text-white h-[50px] rounded-md hover:bg-[#000066] transition-all duration-100 ease-in-out "
                  onClick={() => {
                    setStep(step + 1);
                    setValue(value + 20);
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
        {step === 5 && (
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16 lg:px-[10%]">
            <div
              className=" w-[350px] h-[390px]  rounded-[20px] relative flex flex-col justify-end"
              //   style={{ border: "2px solid black" }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step5_mivpec.jpg"
                }
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
                className="brightness-90"
              />
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
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
                    setValue(value + 20);
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
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1698394879/step6_uly3o3.jpg"
                }
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
                className="brightness-90"
              />
              <div className="p-[20px] backdrop-blur-sm bg-black/5  rounded-[20px]">
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

              <div className="flex flex-col gap-3">
                <label
                  for="country"
                  class="block text-md font-medium text-gray-900"
                >
                  Country
                  <input
                    required
                    type="text"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="Country Name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </label>

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
                <form
                  onSubmit={submitHandler}
                  className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2"
                >
                  <button
                    className="flex items-center justify-center bg-[#000099] w-[300px] text-white h-[50px] rounded-md hover:bg-[#000066] transition-all duration-100 ease-in-out "
                    type="submit"
                  >
                    <p className="text-[17px] font-semibold">Login/Signup</p>
                    <BsChevronRight fontSize={"18px"} />
                  </button>
                </form>
              ) : (
                <button className="flex items-center justify-center bg-gray-300 w-[300px] text-white h-[50px] rounded-md  transition-all duration-100 ease-in-out cursor-default ">
                  <p className="text-[17px] font-semibold">Continue</p>
                  <BsChevronRight fontSize={"18px"} />
                </button>
              )}
            </div>
          </div>
        )}
        {/* {step === 7 && (
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
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              We’ll never share your details. Read our{" "}
              <Link
                href="/privacy-policy"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        )} */}
      </div>
    </>
  );
};

export default RequestDemo;
