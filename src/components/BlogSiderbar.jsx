import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const BlogSiderbar = ({ blog }) => {
  const categories = [
    "All",
    "Blockchain",
    "Python",
    "Web Development",
    "Data Science",
    "AWS Certification",
    "Design",
    "Marketing",
  ];
  const tags = [
    "Live Doubt Solving Sessions",
    "Affordable Pricing",
    "Flexible Learning Options",
    "Expert Instructors",
    "Interactive Learning Experience",
    "Practical Learning Approach",
    "Comprehensive Course Catalog",
    "Career development assistance",
  ];
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col w-full p-[20px]">
          <p className="text-[24px] font-bold">Categories</p>
          <div className="flex flex-col">
            {categories.map((item, index) => (
              <div
                className="p-[2px] w-fit justify-between transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
                key={index}
              >
                <p className="border-b-[1px] border-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-[10px] w-full gap-[20px]">
          <p className="text-[24px] font-bold">Recent Posts</p>
          {blog.recentBlogs.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr] p-[5px] transition-all duration-150 ease-in-out items-center justify-between  cursor-pointer w-full gap-2  hover:underline"
            >
              <div className="w-[90px] h-[60px]">
                <Image
                  src={item.poster.url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <Link
                href={`/blog/${item.title.replace(/\s+/g, "-")}/${item._id}`}
                className="line-clamp-3 text-[15px]"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-[10px] w-full gap-[20px]">
          <p className="text-[24px] font-bold">Popular Posts</p>
          {blog.popularBlogs.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr] p-[5px] transition-all duration-150 ease-in-out items-center justify-between cursor-pointer w-full gap-2  hover:underline"
            >
              <div className="w-[100px] h-[60px]">
                <Image
                  src={item.poster.url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <Link
                href={`/blog/${item.title.replace(/\s+/g, "-")}/${item._id}`}
                className="line-clamp-3 text-[15px]"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full p-[20px]">
          <p className="text-[24px] font-bold">Tags</p>
          <div className="flex flex-col">
            {tags.map((item, index) => (
              <div
                className="p-[2px] w-fit justify-between transition-all duration-300 hover:cursor-pointer hover:bg-gray-200"
                key={index}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full p-[20px]">
          <p className="text-[24px] font-bold">Follow Us</p>
          <div className="flex flex-col w-full">
            <div className="w-[125px] flex  items-center gap-3 justify-between">
              <p className="text-[18px]">Youtube</p>
              <TiSocialYoutubeCircular fontSize={"30px"} />
            </div>
            <div className="w-[125px] flex  items-center gap-3 justify-between">
              <p className="text-[18px]">Instagram</p>
              <TiSocialInstagramCircular fontSize={"30px"} />
            </div>
            <div className="w-[125px] flex  items-center gap-3 justify-between">
              <p className="text-[18px]">Facebook</p>
              <TiSocialFacebookCircular fontSize={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSiderbar;
