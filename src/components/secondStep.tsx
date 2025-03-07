import { IoArrowBack } from "react-icons/io5";
import { AppleStoreIcon, NigerianFlag, PlayStoreIcon } from "./customIcon";
import { formValue } from "@/app/gifting/page";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner/Spinner";

const SecondStep = ({
  setStep,
  setInitialValue,
  initialValue,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setInitialValue: React.Dispatch<React.SetStateAction<formValue>>;
  initialValue: formValue;
}) => {
  const [loading, setLoading] = useState(false);
  const disable =
    initialValue.senderName === "" ||
    initialValue.senderPhone === "" ||
    initialValue.senderEmail === "" ||
    initialValue.reason === "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "senderPhone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      const limitedValue = numericValue.slice(0, 11);
      setInitialValue((state) => ({ ...state, [name]: limitedValue }));
    } else {
      setInitialValue((state) => ({ ...state, [name]: value }));
    }
  };

  const handleSubmit = async (values: formValue) => {
    setLoading(true);
    const { amount, ...otherArgs } = values;
    try {
      await fetch("https://bankingapi.miniemoney.com/website-gifting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseInt(amount.replaceAll(",", "")),
          ...otherArgs,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Failed to initialize payment");
          }
        })
        .then((data) => {
          toast.success(data.message);
          window.location.href = data.paymentLink;
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
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="text"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Sender’s full name"
            onChange={handleChange}
            name="senderName"
            value={initialValue.senderName}
          />
        </div>
        <div className="border rounded-lg bg-white flex">
          <div className="px-4 py-2 bg-[#F2F4F7] flex items-center justify-center gap-2 rounded-l font-semibold">
            <NigerianFlag /> +234
          </div>
          <div className=" w-full px-4 py-2 flex-grow">
            <input
              type="tel"
              className="h-12 text-lg border-none outline-none bg-transparent w-full"
              placeholder="Sender’s phone number"
              onChange={handleChange}
              name="senderPhone"
              value={initialValue.senderPhone}
            />
          </div>
        </div>
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="text"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Sender’s email address"
            onChange={handleChange}
            name="senderEmail"
            value={initialValue.senderEmail}
          />
        </div>
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="text"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Reason for gifting"
            onChange={handleChange}
            name="reason"
            value={initialValue.reason}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => setStep((state) => state - 1)}
          className="flex items-center justify-center gap-2 py-3 px-5 rounded-[32px] bg-white font-semibold border border-gray-300 outline-none"
        >
          <IoArrowBack /> Back
        </button>
        <button
          disabled={disable || loading}
          onClick={() => handleSubmit(initialValue)}
          className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold"
        >
          {loading ? <Spinner /> : "Gift a savings"}
        </button>
      </div>
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
  );
};

export default SecondStep;
