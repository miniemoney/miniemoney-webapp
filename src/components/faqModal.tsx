import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

type Iprops = {
  title: string;
  description?: React.ReactNode;
  key: number;
};

const FaqModal = ({ title, description,  key }: Iprops) => {
  const [showText, setShowText] = useState(false);
  const [renderText, setRenderText] = useState(false);
  const [openText, setOpenText] = useState(false);

  useEffect(() => {
    if (openText) {
      setShowText(true);
      setTimeout(() => {
        setRenderText(true);
      }, 50);
    } else {
      setRenderText(false);
      setTimeout(() => {
        setShowText(false);
      }, 150);
    }
  }, [openText]);
  return (
    <div
      key={key}
      className="lg:py-5 lg:px-6 py-3 px-4 flex items-start gap-6 justify-between rounded-2xl w-inherit bg-gray-50 h-fit"
    >
      <div className="flex flex-col gap-2 flex-grow">
        <p className="font-nunito text-lg font-medium text-gray-900">{title}</p>
        {showText && (
          <p
            className={`text-gray-600 font-nunito ${
              renderText
                ? "opacity-100 transition-all"
                : "opacity-0 -translate-y-10 transition-all"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      <LuChevronDown
        onClick={() => setOpenText((state) => !state)}
        className="min-w-6 min-h-5 text-grey-400 cursor-pointer"
        style={{
          transform: showText ? "rotate(180deg)" : "rotate(0deg)",
          transition: "all 0.3s",
        }}
      />
    </div>
  );
};

export default FaqModal;
