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
        <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-[10px] p-2 md:p-3 lg:p-6 py-[20px]">
          <div className="shadow-[0_0_10px_rgba(0, 0, 0, 0.535)]">
            <div className="flex flex-col bg-violet-800   w-full justify-center p-1 lg:py-6">
              <div className="flex items-baseline p-2">
                <div className="flex items-center">
                  <Link href={"/"} className="hover:underline text-white">
                    Home
                  </Link>
                  <AiOutlineRight color="white" />
                  <Link href={"/blog"} className="hover:underline text-white">
                    Blog
                  </Link>
                  <AiOutlineRight color="white" />
                </div>
                <p className="text-white">
                  Mastering Java: A Comprehensive Guide to Java Programming
                </p>
              </div>
              <div className="flex flex-col p-2">
                <p className="text-white text-[20px] md:text-[28px] lg:text-[35px] font-bold">
                  Mastering Java: A Comprehensive Guide to Java Programming
                </p>
                <div className="flex items-center w-full gap-[20px]">
                  <p className="bg-green-400 p-[4px] rounded-[5px] text-center text-white">
                    Programming Language
                  </p>
                  <p className="text-white">1 August 2023</p>
                  <p className="text-white">Chirag Bum</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-2">
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1690882966/fxlv7q8wm277c3bvohzk.webp"
                }
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[230px] md:h-[300px] lg:h-[350px]"
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
