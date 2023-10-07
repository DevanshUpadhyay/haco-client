import CourseContent from "@/components/CourseContent";

const Learn = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className=" px-[10px] pt-[20px]">
          <p
            className="text-[30px] font-bold"
            // style={{ border: "2px solid red" }}
          >
            Java Prodigy: Turbocharge your- rogramming skills
          </p>
          <p>
            Learn java programming through examples for absolute beginner !
            Become a java developer and obtain core java skills!
          </p>
        </div>

        <CourseContent />
      </div>
    </>
  );
};

export default Learn;
