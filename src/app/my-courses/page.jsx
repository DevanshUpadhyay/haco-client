import Image from "next/image";
import Link from "next/link";

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      category: "Java Programming + SQL",
      title: "Java Prodigy: Turbocharge your programming skills",
      description:
        "Learn java programming through examples for absolute beginner ! Become a java developer and obtain core java skills!",
      imgUrl:
        "https://res.cloudinary.com/dcej7jjak/image/upload/v1689070745/java_itotdx.png",
    },
    {
      id: 2,
      category: "Solidity",
      title: "Solidity Prodigy: Turbocharge Your Programming Skills",
      description:
        "Learn solidity programming through examples for absolute beginner ! Become a blockchain developer and obtain core solidity skills!",
      imgUrl:
        "https://res.cloudinary.com/dcej7jjak/image/upload/v1688715192/solidity_mhu9qd.png",
    },
    {
      id: 3,
      category: "SQL Database",
      title: "SQL Prodigy: Turbocharge Your Programming Skills",
      description:
        "Learn SQL programming through examples for absolute beginner ! Become a SQL developer and obtain core SQL skills!",
      imgUrl:
        "https://res.cloudinary.com/dcej7jjak/image/upload/v1688716282/bi7clxaeqmb3saavd62k.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-2 gap-3">
        <p className="text-[30px] font-bold">Subscribed Courses</p>
        <div
          className="flex gap-6 justify-center  flex-wrap "
          // style={{ border: "2px solid red" }}
        >
          {courses.map((item, index) => (
            <div className="w-[330px] border-[1px] border-slate-400 flex flex-col rounded-lg relative">
              <Image
                className="rounded-t-lg"
                src={item.imgUrl}
                width={330}
                height={177}
              />
              <p className="text-[14px] absolute text-white bg-green-400 rounded-lg px-[7px] py-[3px] right-0 top-0">
                {item.category}
              </p>
              <div className=" flex flex-col  gap-2 p-2">
                <p className="text-[18px] font-semibold ">{item.title}</p>
                <p>{item.description}</p>
                <Link
                  className="w-fit px-2 py-1 text-[15px] text-white bg-gray-500 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-600"
                  href={
                    "/course/Java-Prodigy-Turbocharge-your-programming-skills"
                  }
                >
                  Go to course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyCourses;
