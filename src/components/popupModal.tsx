import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Alert from "./alert";

export type AlertProps = {
  title: string;
  description?: string;
  children?: JSX.Element;
  type: "success" | "info" | "error";
  confirmText?: string;
  confirmAction?: () => void;
  close: () => void;
};

type AlertType = {
  type: "alert";
  show: boolean;
  width?: string;
  standardContentProps: AlertProps;

  // this is not needed for standard content
  children?: undefined;
  close: () => void;
};


const PopUpModal = ({
  type,
  show,
  width,
  children,
  standardContentProps,
  close,
}: AlertType) => { 
    const [renderModal, setRenderModal] = useState(show);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
    if (show) {
      setRenderModal(true);
      setTimeout(() => {
        setOpenModal(true);
      }, 50);
    } else {
      setOpenModal(false);
      setTimeout(() => {
        setRenderModal(false);
      }, 300);
    }
  }, [show]);
    
    return (
      <div>
        {renderModal && (
          <div>
            <div
              className={`fixed inset-0 z-40 bg-modal-background backdrop-blur transition-all ${
                openModal ? "opacity-100" : "opacity-0"
              }`}
              onClick={close}
            />
            <div
              style={{
                width: width || "400px",
              }}
              className={`fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] bg-white p-6 shadow-xl transition-all ${
                openModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <AiOutlineClose
                className="absolute right-6 z-10 cursor-pointer text-lg text-gray-400"
                onClick={close}
              />
              <Alert {...standardContentProps} close={close}>
                {children}
              </Alert>
            </div>
          </div>
        )}
      </div>
    );
}

export default PopUpModal;