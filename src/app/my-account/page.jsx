import Image from "next/image";
import Link from "next/link";

const MyAccount = () => {
  return (
    <>
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
                "https://res.cloudinary.com/dcej7jjak/image/upload/v1691318577/ramde_f3iq5v.png"
              }
              width={175}
              height={175}
            />
            <button className="w-[125px] text-white p-[5px] rounded-md transition-all duration-300 ease-in-out bg-yellow-500 hover:bg-yellow-600">
              Change Photo
            </button>
          </div>
          <div
            className="flex flex-col gap-5"
            // style={{ border: "2px solid red" }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[18px]">Name :- </p>
                <p>Devansh Upadhyay</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[18px]">Email :- </p>
                <p>devanshupadhyay2611@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[18px]">Created At :- </p>
                <p>1 Oct 2023</p>
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
              <Link
                className="w-fit text-white bg-gray-400 px-[10px] py-[7px] rounded-md text-center transition-all duration-300 ease-in-out hover:bg-gray-500"
                href={"/verify-email"}
              >
                Verify Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
