import React from "react";
import { PaystackConsumer } from "react-paystack";
import { minieformValue } from "@/app/[id]/render";
import { Tuser } from "@/types/user";
import toast from "react-hot-toast";

function Paystack({
  handlePayment,
  initialValue,
  data,
  id
}: {
  handlePayment: (reference: string) => void;
  initialValue: minieformValue;
    data: Tuser | null;
    id: string;
}) {
  console.log(id)
  const handleClose = () => {
    console.log(id);
    toast.error("Payment not completed");
  };

  const config = {
    reference: new Date().getTime().toString(),
    email:
      initialValue?.email !== "" ? initialValue?.email : "hello@miniemoney.com",
    amount: parseFloat(
      (parseFloat(initialValue?.amount) * 100 * 1.015).toFixed(2)
    ),
    publicKey: "pk_live_75b2fa1bf9ff039679aea7bc981c032121a4db0a",
    metadata: {
      custom_fields: [
        {
          display_name: String(id) || "",
          variable_name: data?.accountType || "",
          value: "Bearer " + data?.token,
        },
      ],
    },
  };
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: () => handleSuccess(config.reference),
    onClose: handleClose,
  };

  const handleSuccess = (reference: string) => {
    handlePayment(reference);
  };

  const receivePayment = (initializePayment: (onSuccess: (reference: string) => void, onClose: () => void) => void) => {
    initializePayment(handleSuccess, handleClose);
  };

  return (
    <form>
      <PaystackConsumer {...componentProps}>
        {({ initializePayment }) => (
          <div
            className="disabled:bg-[#F2F4F7] disabled:text-[#98A2B3] disabled:cursor-not-allowed flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold"
            onClick={() => receivePayment(initializePayment)}
          >
            <span>Continue to send money</span>
          </div>
        )}
      </PaystackConsumer>
    </form>
  );
}

export default Paystack;
