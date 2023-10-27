"use client";
import ButtonLoader from "@/components/ButtonLoader";
import Loader from "@/components/Loader";
import { sendOtp, updateProfilePicture } from "@/redux/actions/profile";
import { loadUser } from "@/redux/actions/user";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const MyAccount = () => {
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState({});
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();
  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const changeImageSubmitHandler = async (e, image) => {
    setShowModal(false);
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    setImagePrev("");
    setImage("");
    await dispatch(updateProfilePicture(myForm));
    await dispatch(loadUser());
    await location.reload();
  };
  const emailSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(sendOtp(user.email));
    // dispatch(loadUser());
    router.push("/verify-email");

    toast.success("Otp is sent to your email");
  };

  const closeHandler = () => {
    setShowModal(false);
    setImagePrev("");
    setImage("");
  };

  useEffect(() => {
    setIsClient(true);
    setShowModal(false);
    setImagePrev("");
    setImage("");
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      {!isClient ? (
        <Loader />
      ) : (
        <div
          className="flex flex-col w-full md:h-[80vh] items-center justify-center p-2 "
          // style={{ border: "2px solid red" }}
        >
          <p className="text-[30px] font-bold">My Account Details</p>
          <div className="flex flex-col lg:flex-row  p-2 gap-10 items-center">
            <div className="flex flex-col items-center gap-3">
              <Image
                className="rounded-full"
                src={
                  user?.avatar.url === "url"
                    ? "https://res.cloudinary.com/dcej7jjak/image/upload/v1697101152/profile-icon_j8vu7y.png"
                    : user?.avatar.url
                }
                width={175}
                height={175}
              />

              <>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Change Photo
                </button>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-2xl font-semibold">
                              Change Photo
                            </h3>
                            {/* <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                            style={{ border: "2px solid red", color: "black" }}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button> */}
                          </div>
                          {/*body*/}
                          <form
                            onSubmit={(e) => changeImageSubmitHandler(e, image)}
                            className="flex flex-col items-center justify-center gap-2"
                          >
                            {imagePrev && (
                              <Image
                                src={imagePrev}
                                className="rounded-full"
                                width={175}
                                height={175}
                              />
                            )}

                            <input
                              accept="image/*"
                              id="chooseAvatar"
                              type={"file"}
                              onChange={changeImage}
                            />

                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={closeHandler}
                              >
                                Close
                              </button>
                              {!imagePrev && (
                                <button
                                  className="bg-gray-500 text-white  font-bold uppercase text-sm px-6 py-3 rounded   mr-1 mb-1  cursor-not-allowed"
                                  disabled="true"
                                >
                                  Save Changes
                                </button>
                              )}
                              {imagePrev && (
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="submit"
                                >
                                  Save Changes
                                </button>
                              )}
                            </div>
                          </form>

                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
            </div>

            <div
              className="flex flex-col gap-5"
              // style={{ border: "2px solid red" }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[18px]">Name :- </p>
                  <p>{user?.name}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[18px]">Email :- </p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[18px]">Created At :- </p>
                  <p>{user?.createdAt.split("T")[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  className="w-fit text-white bg-gray-400 px-[10px] py-[7px] rounded-md text-center transition-all duration-300 ease-in-out hover:bg-gray-500"
                  href={"/update-profile"}
                >
                  Update Profile
                </Link>
                <Link
                  className="w-fit text-white bg-gray-400 px-[10px] py-[7px] rounded-md text-center transition-all duration-300 ease-in-out hover:bg-gray-500"
                  href={"/change-password"}
                >
                  Change Password
                </Link>
                {!user?.verify && (
                  <form onSubmit={(e) => emailSubmitHandler(e)}>
                    <button
                      className="w-fit text-white bg-gray-400 px-[10px] py-[7px] rounded-md text-center transition-all duration-300 ease-in-out hover:bg-gray-500"
                      type="submit"
                    >
                      Verify Email
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccount;
