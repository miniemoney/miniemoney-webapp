import { ClipBoardIcon, Logo, MenuBoard } from "@/components/customIcon";
import DownloadModal from "@/components/downloadModal";
import DropdownButton, { MobileDropdownButton } from "@/components/DropdownButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillApple, AiOutlineClose } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { TbUserSquareRounded } from "react-icons/tb";
import { VscLink } from "react-icons/vsc";

const Navbar = () => {
  const [showSide, setShowSide] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleFaqScroll = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("faq");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="z-50 fixed top-0 left-0 w-full p-[20px] bg-white"
      style={{ padding: "20px" }}
    >
      <div className="w-full max-w-[960px] mx-auto flex items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Logo className="text-Primary-500" />
        </Link>
        <div className="md:flex items-center gap-8 hidden">
          <ul className="flex">
            <DropdownButton
              type="text"
              width="93px"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="font-nunito flex items-center gap-4 text-gray-900">
                          <TbUserSquareRounded className="text-Primary-500 w-6 h-6" />
                          About us
                        </div>
                      ),
                      onClick: () => {
                        router.push("/about-us");
                      },
                    },
                    {
                      id: 2,
                      content: (
                        <div className="font-nunito flex items-center gap-4">
                          <IoBookOutline className="text-Primary-500 w-6 h-6" />
                          Career
                        </div>
                      ),
                      onClick: () => {},
                    },
                  ].map((item) => (
                    <p
                      key={item.id}
                      onClick={item.onClick}
                      className="cursor-pointer text-nowrap px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </p>
                  ))}
                </div>
              }
            >
              <li className="py-[10px] px-4 rounded-[32px]">
                <p className="font-nunito text-gray-600 font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                  Company
                </p>
              </li>
            </DropdownButton>
            <DropdownButton
              type="text"
              width="93px"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="flex items-start gap-4 text-gray-900">
                          <div className="w-12 h-12 p-3 rounded-[10px] flex items-center justify-center bg-Primary-25 border border-Primary-100">
                            <VscLink className="text-Primary-500 w-6 h-6" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="font-nunito text-semibold text-gray-900">
                              MinieLink
                            </p>
                            <p className="font-nunito text-sm text-gray-600">
                              Receive money easily with a personalized link.
                            </p>
                          </div>
                        </div>
                      ),
                      onClick: () => {},
                    },
                    {
                      id: 2,
                      content: (
                        <div className="flex items-start gap-4 text-gray-900">
                          <div className="w-12 h-12 p-3 rounded-[10px] flex items-center justify-center bg-Primary-25 border border-Primary-100">
                            <GoGift className="text-Primary-500 w-6 h-6" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="font-nunito text-semibold text-gray-900">
                              Gifting
                            </p>
                            <p className="font-nunito text-sm text-gray-600">
                              Support your loved ones’ savings with a thoughtful
                              cash gift.
                            </p>
                          </div>
                        </div>
                      ),
                      onClick: () => {
                        router.push("/gifting");
                      },
                    },
                  ].map((item) => (
                    <p
                      key={item.id}
                      onClick={item.onClick}
                      className="font-nunito cursor-pointer text-nowrap px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </p>
                  ))}
                </div>
              }
            >
              <li className="py-[10px] px-4 rounded-[32px]">
                <p className="text-gray-600 font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                  Products
                </p>
              </li>
            </DropdownButton>
            <DropdownButton
              type="text"
              width="93px"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="font-nunito flex items-center gap-4 text-gray-900">
                          <MenuBoard className="text-Primary-500 w-6 h-6" />
                          FAQ
                        </div>
                      ),
                      onClick: handleFaqScroll,
                    },
                    {
                      id: 2,
                      content: (
                        <Link
                          href="https://myminiemoney.medium.com/"
                          className="font-nunito flex items-center gap-4"
                        >
                          <LuBookText className="text-Primary-500 w-6 h-6" />
                          Blog
                        </Link>
                      ),
                      onClick: () => {},
                    },
                    {
                      id: 3,
                      content: (
                        <div className="font-nunito flex  items-center gap-4">
                          <ClipBoardIcon className="text-Primary-500 w-6 h-6" />
                          Press Kit
                        </div>
                      ),
                      onClick: () => {},
                    },
                  ].map((item) => (
                    <p
                      key={item.id}
                      onClick={item.onClick}
                      className="font-nunito cursor-pointer text-nowrap px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </p>
                  ))}
                </div>
              }
            >
              <li className="py-[10px] px-4 rounded-[32px]">
                <p className="text-gray-600 font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                  Resources
                </p>
              </li>
            </DropdownButton>
          </ul>
          <button
            onClick={() => setShowModal(true)}
            className="font-nunito flex items-center gap-2 bg-Primary-500 hover:bg-Primary-600 text-white text-sm font-semibold py-[10px] px-4 rounded-[32px]"
          >
            <span className="flex items-center gap-[6px] text-white">
              <AiFillApple className="text-white w-4 h-4" /> |{" "}
              <FaGooglePlay className="text-white w-4 h-4" />
            </span>
            Download app
          </button>
        </div>
        <div className="block md:hidden rounded-full p-[10px] border border-Primary-400 cursor-pointer ">
          <HiOutlineMenuAlt3
            className="text-Primary-500"
            onClick={() => setShowSide(true)}
          />
        </div>
        <div
          className={`p-4 flex flex-col gap-6 md:hidden fixed top-0 left-0 w-screen h-screen z-40 bg-white ${
            showSide ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          style={{ transform: showSide ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer">
              <Logo className="text-Primary-500" />
            </Link>
            <div className="rounded-full p-[10px] border border-Primary-400 cursor-pointer">
              <AiOutlineClose
                className="text-Primary-500"
                onClick={() => setShowSide(false)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <MobileDropdownButton
              type="text"
              width="93px"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="font-nunito flex items-center gap-4 text-gray-900">
                          <TbUserSquareRounded className="text-Primary-500 w-6 h-6" />
                          About us
                        </div>
                      ),
                      onClick: () => {
                        router.push("/about-us");
                      },
                    },
                    {
                      id: 2,
                      content: (
                        <div className="font-nunito flex items-center gap-4">
                          <IoBookOutline className="text-Primary-500 w-6 h-6" />
                          Career
                        </div>
                      ),
                      onClick: () => {},
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={item.onClick}
                      className="cursor-pointer text-nowrap px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </div>
                  ))}
                </div>
              }
            >
              <p className="font-nunito flex items-start text-gray-600 font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                Company
              </p>
            </MobileDropdownButton>
            <MobileDropdownButton
              type="text"
              width="100%"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="flex items-start gap-4 text-gray-900">
                          <div className="w-12 h-12 p-3 rounded-[10px] flex items-center justify-center bg-Primary-25 border border-Primary-100">
                            <VscLink className="text-Primary-500 w-6 h-6" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="font-nunito text-semibold text-gray-900">
                              MinieLink
                            </p>
                            <p className="font-nunito text-sm text-gray-600">
                              Receive money easily with a personalized link.
                            </p>
                          </div>
                        </div>
                      ),
                      onClick: () => {},
                    },
                    {
                      id: 2,
                      content: (
                        <div className="flex items-start gap-4 text-gray-900">
                          <div className="w-12 h-12 p-3 rounded-[10px] flex items-center justify-center bg-Primary-25 border border-Primary-100">
                            <GoGift className="text-Primary-500 w-6 h-6" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="font-nunito text-semibold text-gray-900">
                              Gifting
                            </p>
                            <p className="font-nunito text-sm text-gray-600">
                              Support your loved ones’ savings with a thoughtful
                              cash gift.
                            </p>
                          </div>
                        </div>
                      ),
                      onClick: () => {
                        router.push("/gifting");
                      },
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={item.onClick}
                      className="font-nunito cursor-pointer px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </div>
                  ))}
                </div>
              }
            >
              <p className="text-gray-600 w-full flex items-start font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                Products
              </p>
            </MobileDropdownButton>
            <MobileDropdownButton
              type="text"
              width="93px"
              dropdownContent={
                <div>
                  {[
                    {
                      id: 1,
                      content: (
                        <div className="font-nunito flex items-center gap-4 text-gray-900">
                          <MenuBoard className="text-Primary-500 w-6 h-6" />
                          FAQ
                        </div>
                      ),
                      onClick: handleFaqScroll,
                    },
                    {
                      id: 2,
                      content: (
                        <Link
                          href="https://myminiemoney.medium.com/"
                          className="font-nunito flex items-center gap-4"
                        >
                          <LuBookText className="text-Primary-500 w-6 h-6" />
                          Blog
                        </Link>
                      ),
                      onClick: () => {},
                    },
                    {
                      id: 3,
                      content: (
                        <div className="font-nunito flex items-center gap-4">
                          <ClipBoardIcon className="text-Primary-500 w-6 h-6" />
                          Press Kit
                        </div>
                      ),
                      onClick: () => {},
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={item.onClick}
                      className="cursor-pointer text-nowrap px-3 py-[10px] text-sm font-medium hover:bg-gray-100"
                    >
                      {item.content}
                    </div>
                  ))}
                </div>
              }
            >
              <p className="font-nunito text-gray-600 flex items-start font-semibold text-sm py-[10px] px-4 rounded-[32px] focus:bg-gray-50">
                Resources
              </p>
            </MobileDropdownButton>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="font-[font-family: var(--font-nunito)] hover:bg-Primary-600 w-full flex items-center justify-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-[32px]"
          >
            <span className="flex items-center gap-[6px] text-white">
              <AiFillApple className="text-white w-4 h-4" /> |{" "}
              <FaGooglePlay className="text-white w-4 h-4" />
            </span>
            Download app
          </button>
        </div>
      </div>
      <DownloadModal open={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
