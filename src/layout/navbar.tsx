import { AiFillApple, AiOutlineClose } from "react-icons/ai";
import { Logo } from "../components/customIcon";
import { FaGooglePlay } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <nav className="z-30 fixed top-0 left-0 w-full p-[20px] bg-white">
      <div className="w-full max-w-[960px] mx-auto flex items-center justify-between">
        <a href="/" className="cursor-pointer">
          <Logo className="text-Primary-500" />
        </a>
        <div className="md:flex items-center gap-8 hidden">
          <ul className="flex">
            <li className="py-[10px] px-4 rounded-4xl">
              <a href="/" className="text-gray-600 font-semibold text-sm">
                Company
              </a>
            </li>
            <li className="py-[10px] px-4 rounded-4xl">
              <a href="/about" className="text-gray-600 font-semibold text-sm">
                Products
              </a>
            </li>
            <li className="py-[10px] px-4 rounded-4xl">
              <a
                href="/contact"
                className="text-gray-600 font-semibold text-sm"
              >
                Resources
              </a>
            </li>
          </ul>
          <button className="flex items-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-4xl">
            <span className="flex items-center gap-[6px] text-white">
              <AiFillApple className="text-white w-4 h-4" /> |{" "}
              <FaGooglePlay className="text-white w-4 h-4" />
            </span>
            Download app
          </button>
        </div>
        <div className="rounded-full p-[10px] border border-Primary-400 cursor-pointer">
          <HiOutlineMenuAlt3
            className="text-Primary-500"
            onClick={() => setShowSide(true)}
          />
        </div>
        <div
          className={`p-4 flex flex-col gap-6 md:hidden fixed top-0 left-0 w-screen h-screen z-40 bg-white ${showSide ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <Logo className="text-Primary-500" />
            </a>
            <div className="rounded-full p-[10px] border border-Primary-400 cursor-pointer">
              <AiOutlineClose
                className="text-Primary-500"
                onClick={() => setShowSide(false)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="px-4 py-[10px] text-gray-600 text-sm font-semibold">
              Company
            </div>
            <div className="px-4 py-[10px] text-gray-600 text-sm font-semibold">
              Products
            </div>
            <div className="px-4 py-[10px] text-gray-600 text-sm font-semibold">
              Resources
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-4xl">
            <span className="flex items-center gap-[6px] text-white">
              <AiFillApple className="text-white w-4 h-4" /> |{" "}
              <FaGooglePlay className="text-white w-4 h-4" />
            </span>
            Download app
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
