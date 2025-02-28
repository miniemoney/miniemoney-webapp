import { FaFacebook, FaGooglePlay, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillApple, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FooterLogo, FooterWiggle, Logo } from "../components/customIcon";
import { LuArrowUpRight } from "react-icons/lu";
import DownloadModal from "../components/downloadModal";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const today = new Date();
  const pathname = usePathname()
  const router = useRouter()
  const handleFaq = () => {
    if (pathname === "/") {
      const aboutSection = document.getElementById("faq");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#faq")
    }
  }
  return (
    <div className="w-full bg-Primary-600 relative">
      <DownloadModal open={showModal} onClose={() => setShowModal(false)} />
      <div className="px-5 lg:px-0 flex flex-col gap-12 md:gap-[64px] lg:gap-16 mx-auto w-full max-w-[960px] pt-[80px] overflow-hidden">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="p-6 bg-Primary-500 relative flex md:items-center items-start gap-6 justify-between rounded-2xl overflow-hidden md:flex-row flex-col">
            <FooterWiggle className="absolute top-0 left-0 translate-y-1/8" />
            <div className="z-20 flex flex-col gap-1 w-[175px]">
              <Logo className="text-white w-[175px]" />
              <p className="font-nunito text-white text-lg font-semibold">
                The money app for teenagers
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="font-nunito hover:bg-Primary-50 z-20 flex items-center gap-2 text-Primary-500 bg-white text-sm font-semibold py-[10px] px-4 rounded-[32px]"
            >
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
                <p className="font-nunito font-semibold text-Primary-100">
                  Company
                </p>
                <div className="font-nunito flex flex-col">
                  <Link
                    href="/about-us"
                    className="font-nunito py-2 text-white font-medium"
                  >
                    About us
                  </Link>
                  <Link
                    href=""
                    className="font-nunito py-2 text-white font-medium flex items-center gap-1"
                  >
                    Career <LuArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-nunito font-semibold text-Primary-100">
                  Products
                </p>
                <div className="flex flex-col">
                  <Link
                    href=""
                    className="font-nunito py-2 text-white font-medium cursor-pointer"
                  >
                    MinieLink
                  </Link>
                  <Link
                    href="/gifting"
                    className="font-nunito py-2 text-white font-medium flex items-center gap-1 cursor-pointer"
                  >
                    Gifting
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-nunito font-semibold text-Primary-100">
                  Resources
                </p>
                <div className="flex flex-col">
                  <div
                    onClick={handleFaq}
                    className="cursor-pointer font-nunito py-2 text-white font-medium"
                  >
                    FAQs
                  </div>
                  <Link
                    href="https://myminiemoney.medium.com/"
                    className="font-nunito py-2 text-white font-medium flex items-center gap-1"
                  >
                    Blog <LuArrowUpRight className="w-5 h-5" />
                  </Link>
                  <p className="font-nunito py-2 text-white font-medium">
                    Press Kit
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-nunito font-medium text-Primary-100">
                  Legal
                </p>
                <div className="font-nunito flex flex-col">
                  <p
                    // onClick={() => navigate("/terms-of-service")}
                    className="font-nunito cursor-pointer py-2 text-white font-medium text-nowrap"
                  >
                    Terms of service
                  </p>
                  <Link
                    // onClick={() => navigate("/privacy-policy")}
                    href="/privacy-policy"
                    className="font-nunito py-2 text-white font-medium cursor-pointer"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href={"/AML-policy"}
                    className="font-nunito py-2 text-white font-medium cursor-pointer"
                  >
                    AML Policy
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-nunito font-medium text-Primary-100">
                  Contact
                </p>
                <div className="flex flex-col">
                  <Link
                    href="tel:+2349137093414"
                    className="font-nunito py-2 text-white font-medium"
                  >
                    +234 913 709 3414
                  </Link>
                  <Link
                    href="mailto:support@miniemoney.com"
                    className="font-nunito py-2 text-white font-medium"
                  >
                    support@miniemoney.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-1 text-Primary-500" />
          <div className="flex items-center justify-between gap-6 flex-wrap lg:flex-nowrap">
            <p className="font-nunito text-Primary-100">
              © {today.getFullYear()} MinieMoney. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com/miniemoney1"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaFacebook className="w-4 text-Primary-500" />
              </Link>
              <Link
                href="https://www.instagram.com/myminiemoney/"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <AiFillInstagram className="w-4 text-Primary-500" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/miniemoney"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaLinkedin className="w-4 text-Primary-500" />
              </Link>
              <Link
                href="https://x.com/myminiemoney"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaXTwitter className="w-4 text-Primary-500" />
              </Link>
              <Link
                href="https://www.tiktok.com/@myminiemoney"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaTiktok className="w-4 text-Primary-500" />
              </Link>
              <Link
                href="https://www.youtube.com/@theminiemoneyshow"
                className="bg-white hover:bg-Primary-50 rounded-full p-2 flex items-center justify-center"
              >
                <FaYoutube className="w-4 text-Primary-500" />
              </Link>
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
