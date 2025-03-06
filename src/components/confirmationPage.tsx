import { minieformValue } from "@/app/[id]/render";
import { Tuser } from "@/types/user";
import { IoArrowBack } from "react-icons/io5";
import Paystack from "./Paystack";

const ConfirmationPage = ({
  initialValue,
  setStep,
  handlePayment,
  data,
  id,
}: {
  initialValue: minieformValue;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handlePayment: (reference: string) => void;
  data: Tuser | null;
  id: string;
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
        <Paystack
          data={data}
          handlePayment={(reference) => handlePayment(reference)}
          initialValue={initialValue}
          id={id}
        />
      </div>
    </div>
  );
};

export default ConfirmationPage;
