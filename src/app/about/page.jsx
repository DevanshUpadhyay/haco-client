import Image from "next/image";
import Link from "next/link";
import { RiSecurePaymentFill } from "react-icons/ri";
const About = () => {
  return (
    <>
      <div className="flex flex-col p-2 mx-2 lg:mx-[10%] md:mx-6 shadow-lg gap-4">
        <p className="text-[40px] font-bold">About Us</p>
        <div className="flex flex-col items-center p-[8px] gap-10">
          <p className="text-[30px] font-semibold">People behind the magic!</p>
          <div className="w-full flex flex-col md:flex-row justify-around gap-6">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1691302355/Deepak_ykrwbf.png"
                }
                width={175}
                height={175}
              />
              <p className="opacity-70">Deepak Sharma</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1691302355/Devansh_rkoupz.png"
                }
                width={175}
                height={175}
              />
              <p className="opacity-70">Devansh Upadhyay</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={
                  "https://res.cloudinary.com/dcej7jjak/image/upload/v1691302355/Chirag_xu21pd.png"
                }
                width={175}
                height={175}
              />
              <p className="opacity-70">Chirag Bum</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-2">
          <p>
            <span className="text-[30px] font-medium">Hola:{")"} </span>
            We are a team of full-stack developer and a teacher and a editor.
            Our mission is to provide quality content at reasonable price
          </p>
        </div>
        <div className="flex items-center flex-col gap-3 p-2">
          <p className="italic">
            {" "}
            We are a video streaming platform with some premium courses
            available only for premium user.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-1">
              <RiSecurePaymentFill />
              <p className="text-[18px] font-sans uppercase">
                Payment is Secured by Paypal
              </p>
            </div>
            <Link
              className="bg-orange-400 py-[5px] px-[15px] rounded-md text-white hover:bg-orange-500 transition-all duration-300 ease-in-out w-fit"
              href={"/"}
            >
              Checkout Our Plan
            </Link>
          </div>
        </div>
        <div className="w-full p-4">
          <video
            width={"100%"}
            muted
            autoPlay
            loop
            controls
            src={
              "https://res.cloudinary.com/dcej7jjak/video/upload/v1691482479/hero_video_sljcra.mp4"
            }
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
          ></video>
        </div>
        <div className="flex flex-col items-center p-2 gap-4">
          <p className="text-[40px] font-bold">haco.study</p>
          <div className="flex flex-col gap-4">
            <p>
              {" "}
              Welcome to Haco, an innovative and comprehensive e-learning
              platform dedicated to providing a top-notch education in
              programming languages. Our mission is to equip individuals like
              you with the knowledge and skills necessary to succeed in the
              dynamic world of coding.{" "}
            </p>
            <p>
              {" "}
              At Haco, we have carefully curated a vast collection of courses
              covering a wide range of programming languages. From the
              foundational languages like Python, Java, and C++, to the
              specialized ones such as Ruby, Swift, and Go, we offer in-depth
              instruction and hands-on practice in each language. Our courses
              are designed by industry experts and experienced educators who are
              passionate about sharing their expertise with learners like you.{" "}
            </p>
            <p>
              {" "}
              One of the key advantages of learning with Haco is the flexibility
              and convenience we offer. With our platform, you have the freedom
              to learn at your own pace and at any time that suits your
              schedule. Our course materials are available 24/7, allowing you to
              study whenever and wherever you choose. Whether you prefer
              intensive study sessions or spreading your learning over a longer
              period, Haco accommodates your individual needs and preferences.{" "}
            </p>
            <p>
              {" "}
              Engaging and interactive learning experiences are at the heart of
              Haco. Our courses combine video lectures, practical coding
              exercises, quizzes, and real-world projects to ensure you gain a
              comprehensive understanding of each programming language. We
              believe in a hands-on approach to learning, enabling you to apply
              your knowledge and skills immediately, reinforcing your
              understanding and boosting your confidence.{" "}
            </p>
            <p>
              {" "}
              In addition to our high-quality course content, Haco fosters a
              vibrant learning community. Connect with fellow learners, engage
              in discussions, and seek guidance from our knowledgeable
              instructors and mentors. We understand the value of collaboration
              and peer support in the learning process, and our community-driven
              approach ensures that you have access to the resources and
              assistance you need.
            </p>
            <p>
              {" "}
              We firmly believe that coding opens up a multitude of exciting
              opportunities in today's digital age. Whether you aspire to become
              a professional software developer, build your own apps and
              websites, or simply gain a valuable skillset for your career, Haco
              is here to help you achieve your goals. Our comprehensive courses
              and supportive community create an environment where your
              programming potential can thrive.{" "}
            </p>
            <p>
              {" "}
              Join us at Haco and embark on a transformative learning journey.
              Unleash your creativity, broaden your horizons, and embrace the
              endless possibilities that programming languages offer. Together,
              we will empower you to become a skilled and confident programmer,
              ready to make your mark in the world of coding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
