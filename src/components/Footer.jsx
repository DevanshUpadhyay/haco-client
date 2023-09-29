import { AiOutlineInstagram } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { DiGithub } from "react-icons/di";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col mt-[50px] bg-[#eae5f0] p-3"
        // style={{ border: "2px solid blue" }}
      >
        {/* <div className="flex items-center justify-between w-full p-[20px]">
          <p className="text-[20px]">
            Get connected with us on social networks:
          </p>
          <div className="flex gap-[25px]">
            <Link href={"https://www.facebook.com/"} target="_blank">
              <TiSocialFacebook fontSize={"24px"} color="#3b5998" />
            </Link>
            <Link href={"https://twitter.com/"} target="_blank">
              <TiSocialTwitter fontSize={"24px"} color="#55acee" />
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank">
              <AiOutlineInstagram fontSize={"24px"} color="#d62976" />
            </Link>
            <Link href={"https://wa.me/8827585491"} target="_blank">
              <FaWhatsapp fontSize={"24px"} color="#43d854" />
            </Link>
            <Link
              href={"mailto:devanshupadhyay2611@gmail.com?Subject=Hello"}
              target="_blank"
            >
              <ImGooglePlus fontSize={"24px"} color="#dc4e41" />
            </Link>
            <Link href={"https://www.github.com/"} target="_blank">
              <DiGithub fontSize={"24px"} color="#3b5998" />
            </Link>
          </div>
        </div> */}
        <div
          className="flex w-full px-[30px]  gap-[30px]"
          //   style={{ border: "2px solid green" }}
        >
          <div
            className="flex flex-col w-full gap-2 items-center"
            // style={{ border: "2px solid red" }}
          >
            <div>
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "90px" }}
                />
              </Link>
            </div>
            <p className="text-[17px] font-bold">All Rights Reserved @haco</p>
            <p className="w-[75%] text-center">
              Hi, We are a team of full-stack developer and a teacher and a
              editor. Our mission is to provide quality content at reasonable
              price.
            </p>
          </div>
          <div
            className="flex flex-col w-full items-center gap-1"
            // style={{ border: "2px solid red" }}
          >
            <p className="text-[20px] font-medium my-2">Helpful Pages</p>
            <Link href={"/privacypolicy"}>
              <p>PRIVACY POLICY</p>
            </Link>
            <Link href={"/terms&conditions"}>
              <p>TERMS AND CONDITIONS</p>
            </Link>
            <Link href={"/refundpolicy"}>
              <p>REFUND AND CANCELLATION POLICY</p>
            </Link>
            <Link href={"/shipping&deliverypolicy"}>
              <p>SHIPPING AND DELIVERY POLICY</p>
            </Link>
          </div>
          <div
            className="flex flex-col w-full items-center "
            // style={{ border: "2px solid red" }}
          >
            <p className="text-[20px] font-medium my-2">Social media links</p>
            <div className="flex flex-col ">
              <div className="flex items-center justify-between w-[130px]">
                <p className="text-[18px]">Youtube</p>
                <Link
                  href={
                    "https://www.youtube.com/channel/UCRBsGueFX5-h3vcKhzyIBUQ"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialYoutubeCircular size={"40"} />
                </Link>
              </div>
              <div className="flex items-center justify-between w-[130px]">
                <p className="text-[18px]">Instagram</p>
                <Link
                  href={"http://instagram.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialInstagramCircular size={"40"} />
                </Link>
              </div>
              <div
                className="flex items-center justify-between w-[130px]"
                // style={{ border: "2px solid black" }}
              >
                <p className="text-[18px]">Facebook </p>
                <Link
                  href={"http://facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebookCircular size={"40"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full my-3">
          <p className="text-[17px] font-bold">© 2023 Copyright: haco.study</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
