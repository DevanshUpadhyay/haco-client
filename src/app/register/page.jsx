"use client";
import { register } from "@/redux/actions/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// export const fileUploadCss = {
//   cursor: "pointer",
//   marginLeft: "-5%",
//   width: "110%",
//   border: "none",
//   height: "100%",
//   color: "#ECC94B",
//   backgroundColor: "white",
// };
// const fileUploadStyle = {
//   "&::file-selector-button": fileUploadCss,
// };
const Register = () => {
  const [name, setName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const { message, error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const changeImageHandler = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImagePrev(reader.result);
  //     setImage(file);
  //   };
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("referralCode", referralCode);
    myForm.append("file", image);
    dispatch(register(myForm));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: "clearError" });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: "clearMessage" });
        location.replace("/");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, error, message]);
  return (
    <div className="flex flex-col justify-center items-center mt-16 p-3">
      <div className="flex flex-col w-full gap-5 items-center">
        <p className="text-[30px] font-bold">Sign Up to Haco</p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full sm:w-[70%] lg:w-[40%] gap-4 p-2"
        >
          <div className=" flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out "
              type="text"
              required
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Abc"
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="email">Email Address</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type="email"
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              className=" py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out"
              type={"password"}
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Your Password"
            />
          </div>
          <div className=" flex flex-col gap-3">
            <label htmlFor="referralCode">Referral Code if any</label>
            <input
              className="py-[3px] px-[10px] rounded-[3px] h-[40px] bg-transparent border-[1px] border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out "
              type="text"
              id="referralCode"
              onChange={(e) => setReferralCode(e.target.value)}
              value={referralCode}
              placeholder="Optional"
            />
          </div>
          {/* <div className=" flex flex-col gap-3">
              <label htmlFor="chooseAvatar">Choose Avatar (Optional)</label>
              <input
                accept="image/*"
                // required
                id="chooseAvatar"
                type={"file"}
                // css={fileUploadStyle}
                style={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </div> */}
          <div>
            <Link
              href={"/forgetpassword"}
              className="hover:underline transition-all duration-300 ease-in-out text-gray-500"
            >
              Forget Password?
            </Link>
          </div>

          <button className=" bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-[150px]">
            Sign Up
          </button>
          <div>
            Already Have an Account?{" "}
            <Link
              href={"/login"}
              className="hover:underline transition-all duration-300 ease-in-out  text-yellow-500"
            >
              Login
            </Link>{" "}
            here
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
