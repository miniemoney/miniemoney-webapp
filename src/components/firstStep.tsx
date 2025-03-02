
import { formValue } from "@/app/gifting/page";
import { AppleStoreIcon, NigerianFlag, PlayStoreIcon } from "./customIcon";
import { formatNumberWithCommas } from "@/helpers/formatNumber";

const FirstStep = ({
  setStep,
  initialValue,
  setInitialValue,
}: {
  initialValue: formValue;
  setInitialValue: React.Dispatch<React.SetStateAction<formValue>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const disable =
    initialValue.amount === "" ||
    initialValue.recipientPhone === "" ||
    initialValue.recipientEmail === "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const numericValue = value.replace(/[^0-9.]/g, "");

      const formattedValue = formatNumberWithCommas(numericValue);

      setInitialValue((state) => ({ ...state, [name]: formattedValue || "" }));
    } else if (name === "recipientPhone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      const limitedValue = numericValue.slice(0, 11);
      setInitialValue((state) => ({ ...state, [name]: limitedValue }));
    } else {
      setInitialValue((state) => ({ ...state, [name]: value }));
    }
  };
  return (
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
              onChange={handleChange}
              value={initialValue.amount}
            />
          </div>
        </div>
        <div className="border rounded-lg bg-white flex">
          <div className="px-4 py-2 bg-[#F2F4F7] flex items-center justify-center gap-2 rounded-l-lg font-semibold">
            <NigerianFlag /> +234
          </div>
          <div className=" w-full px-4 py-2 flex-grow">
            <input
              type="tel"
              className="h-12 text-lg border-none outline-none bg-transparent w-full"
              placeholder="Recipient’s phone number"
              onChange={handleChange}
              name="recipientPhone"
              value={initialValue.recipientPhone}
            />
          </div>
        </div>
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="email"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Recipient’s email address"
            onChange={handleChange}
            name="recipientEmail"
            value={initialValue.recipientEmail}
          />
        </div>
      </div>
      <button
        disabled={disable}
        onClick={() => setStep((state) => state + 1)}
        className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold mt-6"
      >
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
  );
};

export default FirstStep;
