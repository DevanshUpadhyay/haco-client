"use client";
import Loader from "@/components/Loader";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
const ReferAndEarn = () => {
  const [tooltipText, setTooltipText] = useState("Copy referral code");
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const copy = async () => {
    setTooltipText("Copied to clipboard");
    setShow(true);
    await navigator.clipboard.writeText(user?.referralCode);
  };
  useEffect(() => {
    setIsClient(true);
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      {!isClient ? (
        <Loader />
      ) : (
        <div className="flex flex-col shadow-lg p-2 rounded-b-md bg-white  ">
          <div className="flex flex-col items-center gap-3">
            <Image
              className="rounded-md"
              src={"/refer1.png"}
              width={900}
              height={360}
            />
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex items-center">
                <p className="text-[24px] font-bold">Balance</p>
                <p className="text-[24px]">${user?.cashback}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-1 ">
                <p className="text-[24px] font-bold">Referral Code :</p>
                <div className="flex items-center gap-1">
                  <p className="border-[1px] border-gray-300 px-[20px] py-[5px] text-[20px] rounded-lg">
                    {user?.referralCode}
                  </p>
                  {!show ? (
                    <span onClick={() => copy()} className="cursor-pointer">
                      <FaRegCopy title={tooltipText} fontSize={"24px"} />
                    </span>
                  ) : (
                    <span onClick={() => copy()}>
                      <IoMdDoneAll
                        color="green"
                        title={tooltipText}
                        fontSize={"24px"}
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col w-[90%] p-2 gap-3"
              // style={{ border: "2px solid red" }}
            >
              <p className="text-[25px] font-bold">Referee List</p>

              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <caption class="caption-bottom">
                    Note-Get Bonus Cash ($30) only at Completed Status.
                  </caption>
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user?.referrals.map((item, index) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.userName}
                        </th>
                        <td class="px-6 py-4">{item.userEmail}</td>
                        <td
                          class={`px-6 py-4 ${
                            item.status === "Completed" && "text-green-700"
                          } ${
                            item.status === "Verified" && "text-orange-700"
                          } ${
                            item.status === "Registered" && "text-blue-700"
                          }  `}
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center  gap-2"
              // style={{ border: "2px solid red" }}
            >
              <div className="flex flex-col  p-[20px] gap-3">
                <p className="text-[24px] font-bold">
                  Terms and Conditions - Haco Referral Program
                </p>
                <p>
                  {" "}
                  These Terms and Conditions (the "Terms") outline the
                  guidelines for participating in the Haco Referral Program. By
                  taking part in this Referral Program, you agree to adhere to
                  these Terms. Kindly review these Terms thoroughly before
                  participating.
                </p>
                <div>
                  <ol class="space-y-4 text-gray-800 list-decimal list-inside ">
                    <li>
                      Eligibility:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          To be eligible for the Haco Referral Program,
                          participants must have a registered and active account
                          on the Haco e-learning platform.
                        </li>
                        <li>
                          Referrers must have an active account on Haco to
                          qualify for earning referral rewards.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Referral Code:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Upon registration, Referrers will receive a unique
                          referral code ("Referral Code") from Haco. This code
                          can be shared with potential Referees.
                        </li>
                        <li>
                          Referees must enter a valid Referral Code during their
                          registration process on Haco to be eligible for the
                          referral reward.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Referral Rewards:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          Upon successful registration using a valid Referral
                          Code, the Referee will receive a reward of $20
                          directly credited to their Haco account.
                        </li>
                        <li>
                          {" "}
                          Once a Referee makes a course purchase on Haco, the
                          Referrer will receive a reward of $30.
                        </li>
                        <li>
                          These referral rewards will be offered in the form of
                          credits or discounts that can be utilized towards
                          purchasing courses on the Haco platform.
                        </li>
                        <li>
                          Referral rewards hold no cash value, are
                          non-transferable, and cannot be exchanged.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Redemption:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Referral rewards can only be redeemed on the Haco
                          platform for the purpose of purchasing courses. They
                          cannot be converted to cash or transferred to external
                          platforms.
                        </li>
                        <li>
                          The Haco system will automatically apply earned
                          referral rewards to the Referrer's account, reducing
                          the total purchase amount during checkout.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Multiple Referees:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Referrers are encouraged to refer multiple individuals
                          to the Haco platform. Each successful referral that
                          aligns with the eligibility criteria will result in a
                          reward for the Referrer.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Prohibited Activities:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          Haco reserves the right to disqualify referrals and
                          revoke referral rewards if any fraudulent activities,
                          including but not limited to creating fake accounts or
                          engaging in self-referrals, are identified.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Modification and Termination:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Haco retains the right to modify or terminate the
                          Referral Program at its discretion, without prior
                          notice.
                        </li>
                        <li>
                          R In the event of program termination, referral
                          rewards that have been earned but not used will become
                          void.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Liability:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          Haco shall not be held accountable for any technical
                          glitches, delays, or interruptions that may occur
                          during the referral process.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Privacy:
                      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          By participating in the Referral Program, you grant
                          consent to the collection, usage, and storage of
                          personal information, as outlined in Haco's Privacy
                          Policy.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <p>
                  {" "}
                  By participating in the Haco Referral Program, you signify
                  your acceptance of these Terms and Conditions. These Terms are
                  subject to change without notice, with the most current
                  version available on the Haco platform.
                </p>
              </div>
              <div className="hidden flex-col md:flex  gap-24 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dcej7jjak/image/upload/v1690012484/haco_ad_edwnle.jpg"
                  }
                  width={255}
                  height={360}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dcej7jjak/image/upload/v1690012484/haco_ad_edwnle.jpg"
                  }
                  width={255}
                  height={360}
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dcej7jjak/image/upload/v1690012484/haco_ad_edwnle.jpg"
                  }
                  width={255}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferAndEarn;
