import { FaFacebook, FaGooglePlay, FaLinkedin } from "react-icons/fa";
// import { FooterLogo } from "../component/customIcon";
import { AiFillApple, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import { FooterLogo, FooterWiggle, Logo } from "../components/customIcon";
import { LuArrowUpRight } from "react-icons/lu";

const Footer = () => {
  const today = new Date();
  // const navigate = useNavigate()
  return (
    <div className="w-full bg-Primary-600">
      <div className="px-5 lg:px-0 flex flex-col gap-12 md:gap-[64px] lg:gap-16 mx-auto w-full max-w-[960px] pt-[80px] overflow-hidden">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="p-6 bg-Primary-500 relative flex md:items-center items-start gap-6 justify-between rounded-2xl overflow-hidden md:flex-row flex-col">
            <FooterWiggle className="absolute top-0 left-0 translate-y-1/8" />
            <div className="z-20 flex flex-col gap-1 w-[175px]">
              <Logo className="text-white w-[175px]" />
              <p className="text-white text-lg font-semibold">
                The money app for teenagers
              </p>
            </div>
            <button className="z-20 flex items-center gap-2 text-Primary-500 bg-white text-sm font-semibold py-[10px] px-4 rounded-4xl">
              <span className="flex items-center gap-[6px] text-Primary-500">
                <AiFillApple className="text-Primary-500 w-4 h-4" /> |{" "}
                <FaGooglePlay className="text-Primary-500 w-4 h-4" />
              </span>
              Download app
            </button>
          </div>
          <div className="flex items-start flex-wrap lg:flex-nowrap gap-6 justify-between w-inherit">
            <div className="flex items-start flex-wrap lg:flex-nowrap gap-y-6 gap-x-[48px] lg:gap-x-0 justify-between w-full">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-Primary-100">Company</p>
                <div className="flex flex-col">
                  <p className="py-2 text-white font-medium">About us</p>
                  <p className="py-2 text-white font-medium flex items-center gap-1">
                    Career <LuArrowUpRight className="w-5 h-5" />
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-Primary-100">Products</p>
                <div className="flex flex-col">
                  <p className="py-2 text-white font-medium">MinieLink</p>
                  <p className="py-2 text-white font-medium flex items-center gap-1">
                    Gifting
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-Primary-100">Resources</p>
                <div className="flex flex-col">
                  <p className="py-2 text-white font-medium">FAQs</p>
                  <p className="py-2 text-white font-medium flex items-center gap-1">
                    Blog <LuArrowUpRight className="w-5 h-5" />
                  </p>
                  <p className="py-2 text-white font-medium">Press Kit</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-Primary-100">Legal</p>
                <div className="flex flex-col">
                  <p
                    // onClick={() => navigate("/terms-of-service")}
                    className="cursor-pointer py-2 text-white font-medium text-nowrap"
                  >
                    Terms of service
                  </p>
                  <p
                    // onClick={() => navigate("/privacy-policy")}
                    className="py-2 text-white font-medium cursor-pointer"
                  >
                    Privacy policy
                  </p>
                  <p
                    // onClick={() => navigate("/privacy-policy")}
                    className="py-2 text-white font-medium cursor-pointer"
                  >
                    AML Policy
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-Primary-100">Contact</p>
                <div className="flex flex-col">
                  <a
                    href="tel:+2349137093414"
                    className="py-2 text-white font-medium"
                  >
                    +234 913 709 3414
                  </a>
                  <a
                    href="mailto:support@miniemoney.com"
                    className="py-2 text-white font-medium"
                  >
                    support@miniemoney.com
                  </a>
                  <a
                    href="mailto:sales@miniemoney.com"
                    className="py-2 text-white font-medium"
                  >
                    sales@miniemoney.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-1 text-Primary-500" />
          <div className="flex items-center justify-between gap-6 flex-wrap lg:flex-nowrap">
            <p className="text-Primary-100">
              © {today.getFullYear()} FlexFees. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaFacebook className="w-4 text-Primary-500" />
              </a>
              <a
                href="/"
                className="bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <AiFillInstagram className="w-4 text-Primary-500" />
              </a>
              <a
                href="/"
                className="bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaLinkedin className="w-4 text-Primary-500" />
              </a>
              <a
                href="/"
                className="bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaXTwitter className="w-4 text-Primary-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <FooterLogo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
