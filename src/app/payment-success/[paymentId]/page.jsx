import Link from "next/link";
import { RiCheckboxCircleFill } from "react-icons/ri";
const PaymentSuccess = ({ params }) => {
  return (
    <>
      <div className="flex flex-col w-full h-[80vh] items-center p-2 gap-4">
        <p className="text-[30px] font-bold">Learning Mode On</p>
        <div className="flex flex-col w-full shadow-lg items-center rounded-lg lg:w-[35%] md:w-[80%] ">
          <p className="w-full bg-yellow-500 p-4 rounded-t-[8px] ">
            Payment Success
          </p>
          <div
            className="flex flex-col w-full  items-center py-10 gap-3"
            // style={{ border: "2px solid red" }}
          >
            <p>Congratulation! Start Learning Now</p>
            <RiCheckboxCircleFill size={"70px"} color="green" />
          </div>
          <Link
            href={"/my-courses"}
            className="hover:bg-gray-300 py-2 px-3 transition-all duration-300 ease-in-out rounded-md border-[1px] border-gray-300"
          >
            Go to My Courses
          </Link>

          <div className="flex items-center gap-1 mb-12 mt-2">
            <p className="text-md font-bold">Reference:</p>
            <p>{params.paymentId}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
