import Image from "next/image";
import Link from "next/link";
import BlogSiderbar from "@/components/BlogSiderbar";
import { getAllBlogs } from "@/functions";

const Blog = async () => {
  const blog = await getAllBlogs();
  const blogs = blog.allblogs;
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[30px] font-bold  p-2">Blogs</p>
        <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-[10px] p-2 md:p-3 lg:p-6 py-[20px]">
          <div className="flex flex-col gap-[20px]">
            {blogs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white hover:shadow-[0_0_10px_rgba(0, 0, 0, 0.300)]  w-full transition-all duration-300 relative rounded-[5px]"
              >
                <Image
                  src={item.poster.url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] filter brightness-95 transition-all duration-300 hover:brightness-100"
                />
                <div className="flex flex-col w-fit rounded-[20px] bg-[#8d49f7] absolute top-[10px] right-[20px] items-center px-[8px] py-[3px]">
                  <p className="text-[15px] text-white font-semibold">
                    {item.category}
                  </p>
                </div>
                <div className="p-[10px] filter brightness-100 w-full">
                  <p className="p-[10px] text-[24px] font-sans line-clamp-3 font-bold">
                    {item.title}
                  </p>
                  <p className="text-[17px] font-sans p-[10px] ">
                    {item.description}
                  </p>
                  <div className="mb-[20px]">
                    <Link
                      className="p-[10px] text-violet-900"
                      href={`/blog/${item.title.replace(/\s+/g, "-")}/${
                        item._id
                      }`}
                    >
                      Read More {">>"}
                    </Link>
                  </div>
                  <div className="flex w-full border-t-[1px] border-gray-300 py-[5px] px-[10px] items-center">
                    <div className="w-full opacity-50">
                      <div className="flex items-center gap-1">
                        <p> {item.createdBy}</p>
                        <p>---</p>
                        <p> {item.postedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BlogSiderbar blog={blog} />
        </div>
      </div>
    </>
  );
};

export default Blog;
