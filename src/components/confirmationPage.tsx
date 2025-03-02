import { minieformValue } from "@/app/[id]/render";
import { IoArrowBack } from "react-icons/io5";

const ConfirmationPage = ({
    initialValue,
    setStep
}: {
  initialValue: minieformValue;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      <hr className="mx-auto my-5 h-[1px] bg-gray-300" />
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <span>Amount</span>
          <p className="font-bold text-xl">{initialValue?.amount}</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <span>Reason</span>
          <p className="font-bold text-xl">{initialValue?.reason}</p>
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
        //   disabled={disable || loading}
        //   onClick={() => handleSubmit(initialValue)}
          className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold"
        >
          Continue to send money
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
