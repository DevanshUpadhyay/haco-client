import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2 w-full  pb-[40px] items-center">
          <button className="w-full bg-yellow-400 text-center p-[5px] rounded-3xl text-blue-700 font-bold text-[20px]">
            PayPal
          </button>
          <button className="w-full bg-black opacity-80 text-center p-[5px] rounded-3xl text-white font-bold text-[18px]">
            Debit or Credit Card
          </button>
          <p className="text-sm">
            Powered by{" "}
            <span className="text-blue-900 text-base font-semibold">
              Paypal
            </span>
          </p>
        </div>
        <div className="flex gap-2 w-full p-2 pb-[40px] items-center">
          <Link
            href={"/payment-success/456423egfh67r"}
            className="w-full bg-green-500 text-center p-[5px] rounded-3xl text-white font-bold text-[16px] hover:bg-green-600"
          >
            Payment Success
          </Link>
          <Link
            href={"/payment-fail"}
            className="w-full bg-red-500 text-center p-[5px] rounded-3xl text-white font-bold text-[16px] hover:bg-red-600"
          >
            Payment Fail
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
