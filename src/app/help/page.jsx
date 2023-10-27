import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[70vh] p-2 gap-3">
        <p className="text-3xl font-bold">Project Help Page</p>
        <p className="text-center">
          We can help with the school, university and other related projects
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center  text-center text-white rounded-md px-5 py-2   text-md font-medium bg-orange-500 hover:bg-orange-600  "
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default page;
