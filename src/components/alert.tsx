import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AlertProps } from "./popupModal";
import { LuInfo } from "react-icons/lu";
import { BiError } from "react-icons/bi";

const SuccessIcon = () => {
  return (
    <div className="mb-4 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[10px] border-[#ECF3FD] bg-[#C6DBFB]">
      <IoIosCheckmarkCircleOutline className="text-[28px] font-light text-[#005FEB]" />
    </div>
  );
};

const InfoIcon = () => {
  return (
    <div className="mb-4 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[10px] border-primary-50 bg-primary-100">
      <LuInfo className="text-[28px] font-light text-primary-600" />
    </div>
  );
};

const ErrorIcon = () => {
  return (
    <div className="mb-4 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[10px] border-error-50 bg-error-100">
      <BiError className="text-[28px] font-light text-error-600" />
    </div>
  );
};

function Alert({
  title,
  description,
  type,
  close,
  confirmText,
  confirmAction,
  children,
}: AlertProps) {
  const iconType = {
    success: <SuccessIcon />,
    info: <InfoIcon />,
    error: <ErrorIcon />,
  };

  const onConfirm = () => {
    if (confirmAction) {
      confirmAction();
    }
    close();
  };

  return (
    <div>
      {iconType[type]}
      <h3 className="mb-1 text-xl font-bold text-gray-900">{title}</h3>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      {children}
      <div className="mt-8 ">
        <button
          onClick={onConfirm}
          className="flex items-center justify-center w-full py-3 px-5 rounded-[32px] bg-[#005FEB] text-white font-semibold"
        >
          {confirmText || "Okay"}
        </button>
      </div>
    </div>
  );
}
export default Alert;
