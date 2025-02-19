import { MdOutlineClose } from "react-icons/md";
import { AppleStoreIcon, PlayStoreIcon } from "./customIcon";
import QrCode from 'qrcode';
import { useEffect, useState } from "react";

const DownloadModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  
    const [src, setSrc] = useState<string>('')
      useEffect(() => {
          QrCode.toDataURL("https://qrcode.miniemoney.com").then((url) =>
            setSrc(url)
          );
      }, [])
    return (
    <>
      {open && (
        <div className="z-50 w-screen h-screen fixed top-0 left-0 flex items-center justify-center p-3">
          <div
            onClick={onClose}
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-40"
          ></div>
          <div className="z-50 flex flex-col gap-6 items-center">
            <div className="bg-white p-6 md:p-8 rounded-3xl flex flex-col gap-2 md:gap-6">
              <p className="font-semibold text-4xl lg:text-3xl text-center">
                Get the MinieMoney app
              </p>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-gray-600 font-medium">
                  Scan the QR code to download the app
                </p>
                <img src={src} alt="" className="w-full" />
              </div>
              <div className="flex items-center gap-2">
                <hr className="flex-grow border-t-1 border-dashed border-gray-300" />
                <p className="text-gray-300 text-[12px]">OR</p>
                <hr className="flex-grow border-t-1 border-dashed border-gray-300" />
              </div>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-gray-600 font-medium">
                  Download the app via:
                </p>
                <div className="flex items-center justify-center w-full gap-2">
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
            <div className="cursor-pointer w-fit rounded-full bg-white p-[6px] flex items-center justify-center">
              <MdOutlineClose onClick={onClose} className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadModal;
