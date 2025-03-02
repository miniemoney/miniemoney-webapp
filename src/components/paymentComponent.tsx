import { minieformValue } from "@/app/[id]/render";
import { formatNumberWithCommas } from "@/helpers/formatNumber";
import { Tuser } from "@/types/user";

const PaymentComponent = ({
  setStep,
  initialValue,
  setInitialValue,
  data,
}: {
  initialValue: minieformValue;
  setInitialValue: React.Dispatch<React.SetStateAction<minieformValue>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  data: Tuser | null;
}) => {
  const disable =
    initialValue.amount === "" ||
    initialValue.name === "" ||
    initialValue.email === "" ||
    initialValue.reason === "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const numericValue = value.replace(/[^0-9.]/g, "");

      const formattedValue = formatNumberWithCommas(numericValue);

      setInitialValue((state) => ({
        ...state,
        [name]: formattedValue || "",
      }));
    } else {
      setInitialValue((state) => ({ ...state, [name]: value }));
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="text"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Enter Name"
            onChange={handleChange}
            name="name"
            value={initialValue.name}
          />
        </div>
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="email"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Enter Email"
            onChange={handleChange}
            name="email"
            value={initialValue.email}
          />
        </div>
        <div className="border rounded-lg bg-white py-2 px-4 flex flex-col">
          <p className="text-[#667085] text-sm">Amount</p>
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
        <div className="border rounded-lg bg-white flex py-2 px-4">
          <input
            type="text"
            className="text-lg border-none outline-none bg-transparent h-12 w-full"
            placeholder="Enter Reason For Sending Money"
            onChange={handleChange}
            name="reason"
            value={initialValue.reason}
          />
        </div>
      </div>
      <button
        disabled={disable}
        onClick={() => setStep((state) => state + 1)}
        className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold mt-6"
      >
        Pay {data?.firstName}
      </button>
    </div>
  );
};

export default PaymentComponent;
