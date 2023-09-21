import Image from "next/image";

const CourseCart = ({ src }) => {
  return (
    <>
      <div
        className="w-[31%] rounded-[5px] flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.535)] relative hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
        // style={{ width: "30%" }}
      >
        <div className="rounded-[5px]">
          <Image
            src={src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "220px", borderRadius: "5px" }}
            // style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="flex flex-col  w-[50px] h-[50px] bg-[#8d49f7] absolute top-[190px] right-[0px] items-center px-[8px] py-[8px]">
          <p className="text-[15px] bg-transparent text-white font-semibold">
            $149
          </p>
          <del className="text-white bg-transparent text-[10px] font-semibold">
            $249
          </del>
        </div>
        <div className="flex flex-col justify-center items-center pt-[10px] gap-[10px]">
          <p className="text-lg font-sans font-bold w-[90%] text-center">
            SQL Database
          </p>
          <p className="text-base font-sans font-normal w-[90%] text-center">
            Java Prodigy: Turbocharge Your Programming Skills
          </p>
          <div>
            <button className="px-[7px] text-[#fff] border-[1px] border-[#6b53ff] text-[16px] bg-white hover:border-[#f8f3fe] hover:border-[1px] py-[5px] rounded-2xl tex font-medium bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] transition ease-in-out delay-20">
              See Details
            </button>
          </div>
          <div className="flex w-full box-content border-gray-300 border-t  justify-between items-center">
            <div className="w-[60%] flex items-center justify-center h-[50px]">
              <div className="flex gap-[10px]">
                <p className="font-semibold">Creator</p>
                <p>Deepak Sharma</p>
              </div>
            </div>
            <div className="w-[35%] border-l h-[50px] border-gray-300 flex items-center justify-center">
              <div className="flex gap-[10px]">
                <p className="font-semibold">Views</p>
                <p>733</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCart;