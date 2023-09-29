import Link from "next/link";
import BlogSiderbar from "@/components/BlogSiderbar";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import BlogContent from "@/components/BlogContent";

const SingleBlog = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[30px] font-bold px-[60px] py-[20px]">Blogs</p>
        <div className="grid grid-cols-[5fr_2fr] gap-[20px] px-[60px] py-[20px]">
          <div className="shadow-[0_0_10px_rgba(0, 0, 0, 0.535)]">
            <div className="flex flex-col bg-violet-800 h-[300px] w-full justify-center">
              <div className="flex p-[20px] items-center">
                <Link href={"/"}>
                  <p className="text-white">Home</p>
                </Link>
                <AiOutlineRight color="white" />
                <Link href={"/blog"}>
                  {" "}
                  <p className="text-white">Blog</p>
                </Link>
                <AiOutlineRight color="white" />
                <p className="text-white">
                  Mastering Java: A Comprehensive Guide to Java Programming
                </p>
              </div>
              <div className="flex flex-col p-[20px]">
                <p className="text-white text-[40px] font-bold">
                  Mastering Java: A Comprehensive Guide to Java Programming
                </p>
                <div className="flex items-center w-full gap-[20px]">
                  <p className="bg-green-400 p-[4px] rounded-[2px] text-white">
                    Programming Language
                  </p>
                  <p className="text-white">1 August 2023</p>
                  <p className="text-white">Chirag Bum</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-[20px]">
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1690882966/fxlv7q8wm277c3bvohzk.webp"
                }
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "5px 5px 0px 0px",
                }}
              />

              <BlogContent />
            </div>
          </div>
          <BlogSiderbar />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
