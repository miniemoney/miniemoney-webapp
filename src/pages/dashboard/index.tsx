import { useState } from "react";
import FirstStep from "../../components/firstStep";
import SecondStep from "../../components/secondStep";
import bgPattern from "/Miniemoney_Pattern.png";
import Noise from "/Noise.png";
import { AppleStoreIcon, Logo, PhoneMockup, PlayStoreIcon } from "../../components/customIcon";
import { GiCheckMark } from "react-icons/gi";
import { LuMail } from "react-icons/lu";
import { Outlet } from "react-router";


export type formValue = {
  amount: string;
  recipientPhone: string;
  recipientEmail: string;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  reason: string;
};

const Dashboard = () => { 
    const [step, setStep] = useState(1);
    const [initialValue, setInitialValue] = useState<formValue>({
      amount: "",
      recipientPhone: "",
      recipientEmail: "",
      senderName: "",
      senderPhone: "",
      senderEmail: "",
      reason: "",
    });

    const renderStep = (step: number) => {
      switch (step) {
        case 1:
          return (
            <FirstStep
              initialValue={initialValue}
              setInitialValue={setInitialValue}
              setStep={setStep}
            />
          );
        case 2:
          return (
            <SecondStep
              initialValue={initialValue}
              setInitialValue={setInitialValue}
              setStep={setStep}
            />
          );
        default:
          break;
      }
    };
    return (
      <main className="w-screen min-h-screen flex">
        <Outlet />
        <div className="hidden lg:block w-full bg-[#003E99] relative">
          <img
            src={bgPattern}
            alt=""
            className="absolute w-full h-full top-0 right-0 opacity-30 text-[#004EC2]"
          />
          <img
            src={Noise}
            alt=""
            className="absolute w-full h-full top-0 right-0 z-10 bg-transparent opacity-25"
          />
          <div className="flex flex-col justify-between h-full">
            <a href="/" className="w-inherit p-12 cursor-pointer z-30">
              <Logo className="text-white" />
            </a>
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
                      Teach your young ones to save, invest and spend better
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
                      Access hundreds of resources and content to help your
                      young ones be money-wise
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
                      Activate parental control to look out for your child's
                      interest and keep them safe
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <AppleStoreIcon />
                  <PlayStoreIcon />
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
            <div className="flex flex-col gap-4 ">
              <a href="/">
                <Logo className="block lg:hidden text-Primary-500 cursor-pointer" />
              </a>
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
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold text-[#101828]">
                  Gift a Savings
                </h2>
                <p className="text-sm text-[#475467]">
                  Help your youngster or loved ones reach their financial goals
                  by gifting them any amount of money towards their savings.
                </p>
              </div>
            </div>
            {renderStep(step)}
          </div>
        </div>
      </main>
    );
}

export default Dashboard