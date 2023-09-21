import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="py-2 flex items-center justify-around sticky top-0 z-50 bg-white">
        <div>
          <Image src={logo} width={80} height={35} />
        </div>
        <div>
          <ul className="flex items-center gap-14">
            <li>
              <Link href={"/help"}>
                <button className="w-[130px] text-[#8d49f7] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#6b53ff] hover:border-[2px] py-[5px] rounded-md tex font-medium">
                  Project Help!
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <button className="w-[90px] text-[#8d49f7] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#6b53ff] hover:border-[2px] py-[5px] rounded-md tex font-medium ">
                Log in
              </button>
            </li>
            <li>
              <button className="w-[90px] text-[#fff] border-[1px] border-[#6b53ff] text-[18px] bg-white hover:border-[#f8f3fe] hover:border-[1px] py-[5px] rounded-md tex font-medium bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] transition ease-in-out delay-20">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
