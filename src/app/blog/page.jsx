"use client";
import Image from "next/image";
import Link from "next/link";
import BlogSiderbar from "@/components/BlogSiderbar";
import { useRouter } from "next/navigation";
const Blog = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[30px] font-bold px-[60px] py-[20px]">Blogs</p>
        <div className="grid grid-cols-[5fr_2fr] gap-[20px] px-[60px] py-[20px]">
          <div
            className="flex flex-col gap-[20px]"
            onClick={() =>
              router.push(
                "/blog/Mastering-Java-A-Comprehensive-Guide-to-Java-Programming"
              )
            }
          >
            <div className="flex flex-col bg-white hover:shadow-[0_0_10px_rgba(0, 0, 0, 0.300)] cursor-pointer w-full transition-all duration-300 relative rounded-[5px]">
              <Image
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1690882966/fxlv7q8wm277c3bvohzk.webp"
                }
                width={0}
                height={0}
                sizes="100vw"
                className="w-full filter brightness-95 transition-all duration-300 hover:brightness-100"
                style={{
                  width: "100%",
                  height: "380px",
                  borderRadius: "5px 5px 0px 0px",
                }}
              />
              <div className="flex flex-col w-fit rounded-[20px] bg-[#8d49f7] absolute top-[10px] right-[20px] items-center px-[8px] py-[3px]">
                <p className="text-[15px] text-white font-semibold">
                  Programming Language
                </p>
              </div>
              <div className="p-[10px] filter brightness-100 w-full">
                <p className="p-[10px] text-[24px] font-sans line-clamp-3 font-bold">
                  Mastering Java: A Comprehensive Guide to Java Programming
                </p>
                <p className="text-[17px] font-sans p-[10px] ">
                  Structured Query Language (SQL) is a powerful and essential
                  tool for working with relational databases. Whether you're
                  starting your journey as a database developer, data analyst,
                  or web developer, understanding SQL fundamentals is a crucial
                  first step. In this step-by-step tutorial, we'll take you
                  through the core concepts of SQL, enabling you to query,
                  manipulate, and manage data effectively.
                </p>
                <div className="mb-[20px]">
                  <Link href={"/blog/abc"}>
                    <button className="p-[10px] text-violet-900">
                      {" "}
                      Read More {">>"}
                    </button>
                  </Link>
                </div>
                <div className="flex w-full border-t-[1px] border-gray-300 py-[5px] px-[10px] items-center">
                  <div className="w-full opacity-50">
                    <div className="flex items-center gap-1">
                      <p>Chirag Bum</p>
                      <p>---</p>
                      <p>1 August 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogSiderbar />
        </div>
      </div>
    </>
  );
};

export default Blog;
