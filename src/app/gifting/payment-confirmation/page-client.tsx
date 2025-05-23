import { GiCheckMark } from "react-icons/gi";

import bgPattern from "../../../../public/Miniemoney_Pattern.png";
import Noise from "../../../../public/Noise.png";
import { LuMail } from "react-icons/lu";
import Spinner from "../../../components/Spinner/Spinner";
import {
  AppleStoreIcon,
  Logo,
  NigerianFlag,
  PhoneMockup,
  PlayStoreIcon,
} from "../../../components/customIcon";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PopupModal from "@/components/popupModal";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const PaymentConfirmationPage = () => {
  const [confirmationStatus, setConfirmationStatus] = useState("");

  const [confirming, setConfirming] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const verifyPayment = async (reference: string) => {
    setConfirming(true);

    try {
      await fetch(
        `https://bankingapi.miniemoney.com/verify-payment/${reference}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.status === 200) {
            setConfirming(false);
            setConfirmationStatus("success");
          } else {
            setConfirming(false);
            setConfirmationStatus("failed");
          }
        })
        .catch((error: Error) => {
          toast.error(error.message);
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setConfirming(false);
    }
  };

  useEffect(() => {
    if (reference) {
      verifyPayment(reference);
    }
  }, []);
  return (
    <Suspense fallback={<Spinner className="loading" />}>
      <main>
        {confirming ? (
          <div className="flex justify-center h-screen w-screen bg-white items-center">
            <Spinner className="loading" />
          </div>
        ) : (
          <div>
            {/* success modal */}
            <PopupModal
              type="alert"
              show={confirmationStatus === "success"}
              close={() => {}}
              standardContentProps={{
                title: "Savings gifted!",
                description:
                  "You’ve successfully gifted your youngster or loved one by contributing to their savings and helping them achieve their financial goals.",
                type: "success",
                confirmText: "Done",
                confirmAction: () => {
                  router.push("/gifting");
                },
                close: () => {
                  router.push("/gifting");
                },
              }}
            />
            {/* error modal */}
            <PopupModal
              type="alert"
              show={confirmationStatus === "failed"}
              close={() => {}}
              standardContentProps={{
                title: "Gifting failed!",
                description:
                  "Your gifting transaction was not successful due to a payment failure.",
                type: "error",
                confirmText: "Try again",
                confirmAction: () => {
                  router.push("/gifting");
                },
                close: () => {
                  router.push("/gifting");
                },
              }}
            />
            <div className="w-screen min-h-screen flex">
              <div className="hidden lg:block w-full bg-[#003E99] relative">
                <img
                  src={bgPattern.src}
                  alt=""
                  className="absolute w-full h-full top-0 right-0 opacity-30 text-[#004EC2]"
                />
                <img
                  src={Noise.src}
                  alt=""
                  className="absolute w-full h-full top-0 right-0 z-10 bg-transparent opacity-25"
                />
                <div className="flex flex-col justify-between h-full">
                  <Link href="/" className="w-inherit p-12 cursor-pointer z-30">
                    <Logo className="text-white" />
                  </Link>
                  <div className="flex flex-col gap-8 px-12">
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex gap-3 items-center">
                        <h1 className="text-5xl text-white font-medium text-nowrap">
                          The money
                        </h1>
                        <span className="h-12 w-[212px] rounded-[30px] bg-[#005FEB] relative">
                          <PhoneMockup className=" absolute bottom-0 right-1/2 translate-x-1/2" />
                        </span>
                        <h1 className="text-5xl text-white font-medium">app</h1>
                      </div>
                      <h1 className="text-5xl text-white font-medium">
                        for teenagers
                      </h1>
                    </div>
                    <div className="flex flex-col items-start gap-6 pr-[80px]">
                      <div className="flex items-start gap-4">
                        <div className="min-w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GiCheckMark className="text-[#003E99]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-lg font-semibold">
                            Introducing Kids To Safe Money Practices
                          </p>
                          <p className="text-[#D0D5DD]">
                            Teach your young ones to save, invest and spend
                            better
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="min-w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GiCheckMark className="text-[#003E99]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-lg font-semibold">
                            Walk Your Kids On Their Journey To Financial Freedom
                          </p>
                          <p className="text-[#D0D5DD]">
                            Access hundreds of resources and content to help
                            your young ones be money-wise
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="min-w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <GiCheckMark className="text-[#003E99]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white text-lg font-semibold">
                            Keep Kids Safe With Parental Control
                          </p>
                          <p className="text-[#D0D5DD]">
                            {
                              "Activate parental control to look out for your child's interest and keep them safe"
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-6">
                        <a
                          href="https://apps.apple.com/ng/app/miniemoney/id6670430893"
                          target="_blank"
                        >
                          <AppleStoreIcon className="cursor-pointer" />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.minimoney.minie_money&hl=en&pli=1"
                          target="_blank"
                        >
                          <PlayStoreIcon className="cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-inherit p-12 flex items-center justify-between">
                    <p className="text-sm text-white">© MinieMoney 2024</p>
                    <a
                      href="mailto:support@miniemoney.com"
                      className="text-sm text-white flex items-center gap-2 cursor-pointer"
                    >
                      <LuMail className="w-4 h-4" /> support@miniemoney.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white flex items-center justify-center">
                <div className="flex flex-col gap-8 w-full px-4 py-8 max-w-[400px]">
                  <div className="flex flex-col gap-4">
                    <Link href="/">
                      <Logo className="block lg:hidden text-Primary-500 cursor-pointer" />
                    </Link>
                    <div className="flex gap-6 items-center mt-2">
                      <div className="flex-grow flex items-center">
                        <span
                          className="w-full h-[6px] rounded"
                          style={{
                            background: "#005FEB",
                          }}
                        ></span>
                        <span
                          className="w-full h-[6px] rounded"
                          style={{
                            background: "#F2F4F7",
                          }}
                        ></span>
                      </div>
                      <p className="text-[12px] text-[#101828] font-semibold">
                        step 1 of 2
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-3xl font-semibold text-[#101828]">
                        Gift a Savings
                      </h2>
                      <p className="text-sm text-[#475467]">
                        Help your youngster or loved ones reach their financial
                        goals by gifting them any amount of money towards their
                        savings.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <div className="border rounded-lg bg-white py-2 px-4 flex flex-col">
                        <p className="text-[#667085] text-sm">Amount to gift</p>
                        <div className="flex items-center gap-1">
                          <span className="text-2xl">₦</span>{" "}
                          <input
                            type="text"
                            className="flex-grow text-3xl border-none outline-none bg-transparent"
                            placeholder="0.00"
                            name="amount"
                            // onChange={handleChange}
                            value={""}
                          />
                        </div>
                      </div>
                      <div className="border rounded-lg bg-white flex">
                        <div className="px-4 py-2 bg-[#F2F4F7] flex items-center justify-center gap-2 rounded-l font-semibold">
                          <NigerianFlag /> +234
                        </div>
                        <div className=" w-full px-4 py-2 flex-grow">
                          <input
                            type="text"
                            className="h-12 text-lg border-none outline-none bg-transparent w-full"
                            placeholder="Recipient’s phone number"
                            // onChange={handleChange}
                            name="reciepientPhone"
                            value={""}
                          />
                        </div>
                      </div>
                      <div className="border rounded-lg bg-white flex py-2 px-4">
                        <input
                          type="text"
                          className="text-lg border-none outline-none bg-transparent h-12 w-full"
                          placeholder="Recipient’s email address"
                          //   onChange={handleChange}
                          name="reciepientEmail"
                          value={""}
                        />
                      </div>
                    </div>
                    <button className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold mt-6">
                      Continue
                    </button>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="py-3 px-5 w-full">
                        <p className="text-sm">
                          Don’t have a MinieMoney account?{" "}
                          <span className="text-[#005FEB]">Create one</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <hr className="flex-grow border-t-1 border-dashed border-gray-300" />
                        <p className="text-gray-300 text-[12px]">OR</p>
                        <hr className="flex-grow border-t-1 border-dashed border-gray-300" />
                      </div>
                      <div className="flex items-center justify-center w-full gap-2 py-3 px-5">
                        <a
                          href="https://apps.apple.com/ng/app/miniemoney/id6670430893"
                          target="_blank"
                        >
                          <AppleStoreIcon className="cursor-pointer" />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.minimoney.minie_money&hl=en&pli=1"
                          target="_blank"
                        >
                          <PlayStoreIcon className="cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Suspense>
  );
};

export default PaymentConfirmationPage;
