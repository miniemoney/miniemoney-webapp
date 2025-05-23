"use client"

import { PhoneMockup, PhoneMockupMobile, WiggleLong } from "@/components/customIcon";
import DownloadModal from "@/components/downloadModal";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar"
import Section from "@/layout/section";
import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import AboutUs1 from "../../../public/about_us_1.png";
import AboutUs2 from "../../../public/about_us_2.png";
import AboutUs3 from "../../../public/about_us_3.png";
import AboutUs4 from "../../../public/about_us_4.png";
import AboutUs5 from "../../../public/about_us_5.png";
import AboutUs6 from "../../../public/about_us_6.png";
import AboutUs7 from "../../../public/about_us_7.png";
import bgPattern from "../../../public/Miniemoney_Pattern.png";
import moneyAnimation from "../../../public/money-animation.gif";
import PhoneMockup5 from "../../../public/phone_mockup_5.png";
import Noise from "../../../public/Noise.png";

const AboutUs = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="relative w-screen">
      <Navbar />
      <div className="mt-[84px]">
        <Section className="px-5 py-[80px] md:py-[120px] bg-white">
          <div className=" flex flex-col gap-8 md:gap-12 items-start">
            <h2 className="font-intrument-sans text-[36px] lg:text-[48px] font-semibold text-gray-900">
              Together, we’re building smarter banking for the next generation
              of <span className="italic">teenagers</span>.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start overflow-hidden">
              <div className="flex flex-col gap-4">
                <p className="font-nunito text-xl text-gray-600">
                  Financial independence starts early.
                </p>
                <p className="font-nunito text-xl text-gray-600">
                  We’re building a seamless, secure, and intuitive banking
                  experience tailored for teenagers—empowering them to save,
                  spend, and grow their money with confidence.
                </p>
                <p className="font-nunito text-xl text-gray-600">
                  Our mission is to raise a generation of financially aware kids
                  who understand the fundamentals of money and wealth
                  management, equipping them to make smart financial decisions
                  in the future.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-nunito text-xl text-gray-600">
                  MinieMoney is proudly partnered with VFD Bank for all banking
                  services.
                </p>
                <div className="relative bg-Primary-700 pt-8 px-12 rounded-2xl w-full ">
                  <img
                    src={bgPattern.src}
                    alt=""
                    className="absolute w-full h-full top-0 right-0 opacity-30 text-primary-600 object-cover rounded-3xl"
                  />
                  <img
                    src={Noise.src}
                    alt=""
                    className="absolute w-full h-full top-0 right-0 z-10 bg-transparent opacity-25 object-cover rounded-3xl"
                  />
                  <div className="h-6 absolute bottom-0 left-0 w-full bg-Primary-500 rounded-b-2xl"></div>
                  <div className="z-20 flex items-start justify-between relative">
                    <img
                      src={moneyAnimation.src}
                      alt=""
                      className="z-10 absolute -top-[7px] left-[57px] w-[24px] h-[24px]"
                    />
                    <h1 className="font-intrument-sans w-full max-w-[360px] text-2xl font-semibold text-white">
                      The money app for{" "}
                      <span className="italic">teenagers</span>
                    </h1>
                    <div className="z-20">
                      <img src={PhoneMockup5.src} alt="" />
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-600">
                  Let’s shape the future of finance together!
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] md:py-[120px] bg-white">
          <div className=" flex flex-col gap-8 md:gap-12 items-start">
            <div className="flex flex-col gap-2">
              <p className="font-nunito font-bold text-lg text-Primary-500 ">
                OUR BIG STORY
              </p>
              <h3 className="font-intrument-sans text-[36px] font-semibold text-gray-900">
                Only 25-34% of adults in Nigeria, and 35-44% of adults in Africa
                are financially literate.
              </h3>
              <div className="flex flex-col gap-4">
                <p className="font-nunito text-lg text-gray-600">
                  This is why MinieMoney was created, to prepare the future
                  generation for better statistics by helping kids learn how to
                  use money the right way.
                </p>
                <p className="font-nunito text-lg text-gray-600">
                  Kids who use MinieMoney will learn the value of money, how to
                  spend it wisely and how to invest towards their future. It
                  would make us all proud to see our children grow into
                  responsible members of society.
                </p>
              </div>
            </div>
            <div className="rounded-3xl w-full p-6 bg-Primary-100">
              <img src={AboutUs1.src} alt="" />
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] md:py-[120px] bg-cyan-25">
          <div className="flex items-stretch w-full flex-wrap md:flex-nowrap">
            <div className="p-6 rounded-3xl md:rounded-l-3xl bg-cyan-200 flex-grow">
              <img src={AboutUs2.src} alt="" className="w-full h-full" />
            </div>
            <div className="p-8 bg-white flex flex-col gap-2 w-full md:w-[520px]">
              <h3 className="font-intrument-sans text-[30px] md:text-[36px] font-semibold text-gray-900 -tracking-[2%]">
                Learning about money is a very important life skill.
              </h3>
              <div className="flex flex-col gap-4">
                <p className="font-nunito md:text-lg text-gray-600">
                  Kids begin to form lifelong habits from as early as 7 years
                  old, so why not take the opportunity to start teaching your
                  kids about money as early as possible? Just like every skill
                  or habit we have picked up, we learnt them by doing it over
                  and over again.
                </p>
                <p className="font-nunito md:text-lg text-gray-600">
                  With MinieMoney, they get to understand money by practising
                  and having control of the money they spend, save, and earn
                  with the guidance of their parents.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] md:py-[120px] bg-white">
          <div className="flex gap-8 md:gap-12 items-center flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-4 w-full ">
              <div className="flex gap-4 w-full flex-grow md:w-[420px]">
                <div className="flex flex-col gap-4 flex-grow">
                  <img src={AboutUs3.src} alt="" className="flex-grow" />
                  <img src={AboutUs5.src} alt="" className="flex-grow" />
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <img src={AboutUs4.src} alt="" className="col-span-3" />
                  <img src={AboutUs6.src} alt="" className="col-span-3" />
                </div>
              </div>
              <img src={AboutUs7.src} alt="" className="col-span-5" />
            </div>
            <div className="flex flex-col gap-3 ">
              <h3 className="font-intrument-sans text-[30px] md:text-[36px] font-semibold text-gray-900 -tracking-[0.72px]">
                We are building a community of parents wey sabi!
              </h3>
              <div className="flex flex-col gap-4">
                <p className="font-nunito md:text-lg text-gray-600">
                  Our goal is to create a smart banking and financial literacy
                  app that helps kids engage in family finances and develop
                  essential money skills. Together, we’re inspiring a generation
                  to build healthier financial habits and make better
                  contributions to society.
                </p>
                <p className="font-nunito md:text-lg text-gray-600">
                  We take a child-first approach to innovation—because we were
                  all children once, even those of us who are now parents. We
                  acknowledge the growth and maturity of teenagers by involving
                  them in real-world financial experiences, including within our
                  own team—our content team includes two teenagers!
                </p>
                <p className="font-nunito md:text-lg text-gray-600">
                  We believe in maintaining a childlike spirit, embracing
                  enthusiasm, creativity, innocence, and fun. This mindset
                  guides us in building the best child-friendly banking
                  experience—one that empowers kids and reassures parents.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="px-5 py-[80px] md:py-[120px] bg-white">
          <div className="bg-Primary-25 rounded-2xl relative pt-[48px] pb-0 lg:pl-[48px] lg:pr-8 px-6 overflow-hidden">
            <WiggleLong className="absolute top-0 left-0 " />
            <div className="w-full h-[56px] bg-Primary-500 absolute bottom-0 left-0 rounded-b-2xl"></div>
            <div className="flex items-center lg:items-start justify-between gap-6 lg:flex-row flex-col">
              <div className="z-20 flex flex-col">
                <h3 className="font-intrument-sans text-3xl lg:text-[36px] font-semibold text-gray-900">
                  Start your financial journey
                </h3>
                <h3 className="font-intrument-sans text-3xl lg:text-[36px] font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
                  with us today!{" "}
                  <button
                    onClick={() => setShowModal(true)}
                    className="font-nunito hover:bg-Primary-600 flex items-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-[32px]"
                  >
                    <span className="flex items-center gap-[6px] text-white">
                      <AiFillApple className="text-white w-4 h-4" /> |{" "}
                      <FaGooglePlay className="text-white w-4 h-4" />
                    </span>
                    Download app
                  </button>
                </h3>
              </div>
              <div className="w-[260px] z-20 h-full lg:block hidden">
                <PhoneMockup />
              </div>
              <div className="w-[260px] z-20 h-full lg:hidden flex items-center justify-center">
                <PhoneMockupMobile />
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
      <DownloadModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default AboutUs;