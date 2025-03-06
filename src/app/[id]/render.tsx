"use client";

import ConfirmationPage from "@/components/confirmationPage";
import { Logo } from "@/components/customIcon";
import ErrorComponent from "@/components/ErrorComponent";
import PaymentComponent from "@/components/paymentComponent";
import Spinner from "@/components/Spinner/Spinner";
import useUser from "@/hooks/useUser";
import { Tuser } from "@/types/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { standardAmountFormat } from "@/helpers/FormatAmount";

export type minieformValue = {
  name: string;
  email: string;
  amount: string;
  reason: string;
};

const Render = ({ id }: { id: string }) => {
  const { fetchUser, error } = useUser();
  const [data, setData] = useState<Tuser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const pathname = usePathname();
  const [initialValue, setInitialValue] = useState<minieformValue>({
    name: "",
    email: "",
    amount: "",
    reason: "",
  });

  const newData = async () => {
    setLoading(true);
    try {
      const response = await fetchUser(id);
      setData(response);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = (reference: string) => {
    console.log(reference);
    setLoading(true);
    const id = toast.loading("Completing transaction, please wait...");
    setTimeout(() => {
      toast.dismiss(id);
      Swal.fire({
        icon: "success",
        title: "Transaction successful!",
        text:
          "You have successfully transferred " +
          standardAmountFormat(initialValue.amount) +
          " to " +
          data?.firstName,
        confirmButtonColor: "#0066f5",
      }).then(() => {
        window.location.reload();
      });
    }, 3000);
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <PaymentComponent
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            setStep={setStep}
            data={data}
          />
        );
      case 2:
        return (
          <ConfirmationPage
            handlePayment={(reference) => handlePayment(reference)}
            initialValue={initialValue}
            setStep={setStep}
            data={data}
            id = {id}
          />
        );
      default:
        break;
    }
  };

  useEffect(() => {
    newData();
  }, []);
  return (
    <main className="w-screen min-h-screen">
      <div className="w-full max-w-[960px] mx-auto p-5 flex">
        <Link href="/">
          <Logo className="text-Primary-500" />{" "}
        </Link>
      </div>
      <div className="w-screen min-h-[calc(100vh-64px)] flex items-center justify-center">
        {loading ? (
          <Spinner className="loading" />
        ) : error ? (
          <ErrorComponent />
        ) : (
          <div className="flex flex-col gap-8 w-full px-4 py-8 max-w-[400px]">
            <div className="flex gap-6 items-center mt-2">
              <div className="flex-grow flex items-center">
                <span
                  className="w-full h-[6px] rounded"
                  style={{
                    background: `${step >= 1 ? "#005FEB" : "#F2F4F7"}`,
                  }}
                ></span>
                <span
                  className="w-full h-[6px] rounded"
                  style={{
                    background: `${step >= 2 ? "#005FEB" : "#F2F4F7"}`,
                  }}
                ></span>
              </div>
              <p className="text-[12px] text-[#101828] font-semibold">
                step {step} of 2
              </p>
            </div>
            <div className="w-inherit flex items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full border border-Primary-500 bg-white flex items-center justify-center">
                {data ? (
                  <Image
                    src={data.profileImage}
                    alt="Profile Image"
                    width={80}
                    height={80}
                    className="w-inherit h-inherit rounded-full"
                  />
                ) : (
                  <LuUser className="w-6 h-6" />
                )}
              </div>
              <div className="flex flex-col ">
                <h2 className="text-xl font-bold">
                  {data?.firstName} {data?.lastName}
                </h2>
                <p>{pathname?.replace("/", "")}</p>
              </div>
            </div>
            {renderStep(step)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Render;
