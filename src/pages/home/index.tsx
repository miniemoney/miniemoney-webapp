import { AiFillApple } from "react-icons/ai";
import Navbar from "../../layout/navbar";
import Section from "../../layout/section";
import bgPattern from "/Miniemoney_Pattern.png";
import Noise from "/Noise.png";
import PhoneMockup2 from "/phone_mockup_2.png";
import PhoneMockup3 from "/phone_mockup_3.png";
import DotPattern from "/dot_pattern.png";
import image1 from "/Image_1.png";
import image2 from "/Image_2.png";
import image3 from "/Image_3.png";
import moneyAnimation from "/money-animation.gif";
import { FaGooglePlay } from "react-icons/fa";
import {
  CreditCard,
  Gift,
  GraduationCap,
  GraphBar,
  MoneyBag,
  PhoneMockup,
  PhoneMockupMobile,
  Piggy,
  Shield,
  Wiggle,
  WiggleLong,
} from "../../components/customIcon";
import Carousel from "../../components/carousel";
import "../../index.css";
import { useState } from "react";
import { faqs, items, testimonials } from "./data";
import FaqModal from "../../components/faqModal";
import Footer from "../../layout/footer";
import DownloadModal from "../../components/downloadModal";

const Home = () => {
  const [currrentBackground, setCurrentbackground] =
    useState<string>("#D2F3E3");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="relative w-screen">
      <Navbar />
      <div className="mt-[84px]">
        <Section className="px-5 pt-[48px] pb-[120px] h-full ">
          <div className="flex flex-col gap-[64px] lg:gap-[100px] ">
            <div className="relative bg-Primary-700 p-[80px] rounded-3xl w-full max-w-[960px] hidden lg:block">
              <img
                src={bgPattern}
                alt=""
                className="absolute w-full h-full top-0 right-0 opacity-30 text-primary-600 object-cover rounded-3xl"
              />
              <img
                src={Noise}
                alt=""
                className="absolute w-full h-full top-0 right-0 z-10 bg-transparent opacity-25 object-cover rounded-3xl"
              />
              <div className=" flex flex-col gap-6 relative">
                <img
                  src={moneyAnimation}
                  alt=""
                  className="z-10 absolute -top-[30px] left-[149px] w-[60px] h-[60px]"
                />
                <h1 className="font-intrument-sans z-20 w-full max-w-[360px] text-5xl font-semibold text-white">
                  The money app for <span className="italic">teenagers</span>
                </h1>
                <div className="w-full z-20 bg-Primary-500 rounded-4xl flex items-center justify-between">
                  <button
                    onClick={() => setShowModal(true)}
                    className="font-nunito hover:bg-Primary-600 w-fit flex items-center gap-2 bg-Primary-500 text-white text-sm font-semibold  px-4 rounded-4xl h-12"
                  >
                    <span className="flex items-center gap-[6px] text-white">
                      <AiFillApple className="text-white w-4 h-4" /> |{" "}
                      <FaGooglePlay className="text-white w-4 h-4" />
                    </span>
                    Download app
                  </button>
                  <span className="h-12 w-[240px] rounded-[30px] bg-[#005FEB] relative">
                    <PhoneMockup className=" absolute bottom-0 right-1/2 translate-x-1/2" />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative bg-Primary-700 rounded-3xl pt-[48px] px-6 block lg:hidden">
              <img
                src={bgPattern}
                alt=""
                className="absolute w-full h-full top-0 right-0 opacity-30 text-primary-600 object-cover rounded-3xl"
              />
              <img
                src={Noise}
                alt=""
                className="absolute w-full h-full top-0 right-0 z-10 bg-transparent opacity-25 object-cover rounded-3xl"
              />
              <div className="flex flex-col items-center gap-6 z-20">
                <img
                  src={moneyAnimation}
                  alt=""
                  className="z-10 absolute -top-[12px] left-[81px] w-[48px] h-[48px]"
                />
                <h1 className="font-intrument-sans w-full max-w-[360px] text-4xl font-semibold text-white text-center">
                  The money app for <span className="italic">teenagers</span>
                </h1>
                <button
                  onClick={() => setShowModal(true)}
                  className="font-nunito hover:bg-Primary-600 w-fit flex items-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-4xl"
                >
                  <span className="flex items-center gap-[6px] text-white">
                    <AiFillApple className="text-white w-4 h-4" /> |{" "}
                    <FaGooglePlay className="text-white w-4 h-4" />
                  </span>
                  Download app
                </button>
                <PhoneMockupMobile className="z-20 h-full" />
              </div>
              <div className="z-10 absolute bottom-0 left-0 h-[56px] bg-Primary-500 w-full rounded-b-2xl"></div>
            </div>
            <div className="flex items-center gap-16 flex-wrap lg:flex-nowrap">
              <div className="w-full flex flex-col gap-2">
                <h3 className="font-intrument-sans text-3xl font-semibold text-gray-900">
                  Backed by real businesses
                </h3>
                <p className="font-nunito text-[#4B5563] text-lg">
                  We are supported by some of the foremost companies in Africa.
                  You’re in great company.
                </p>
              </div>
              <div className="w-full py-8 bg-gray-25 rounded-2xl relative flex items-center justify-center overflow-hidden max-w-[548px]">
                <div className="absolute top-0 left-0 w-full fade z-10"></div>
                <Carousel items={items} />
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 h-full pt-[80px] lg:pt-[120px] bg-Primary-25 flex items-end ">
          <div className="bg-white flex flex-col w-full rounded-t-3xl lg:rounded-t-[48px]">
            <div className="flex flex-col items-center px-6 lg:px-8 pt-12 pb-6 gap-2">
              <h2 className="font-intrument-sans text-center text-3xl lg:text-[36px] font-semibold text-gray-900">
                Open a free bank account with your NIN
              </h2>
              <p className="font-nunito text-center text-gray-600 lg:text-lg lg:px-[80px]">
                Easily open a NUBAN bank account in under 3 minutes using just
                your National Identification Number (NIN). Fast, simple, and
                hassle-free!
              </p>
            </div>
            <div className="lg:px-[48px] lg:pt-6 p-6 pb-0">
              <div className="bg-[#E3EDFC] rounded-t-[48px] w-full relative lg:pt-[48px] flex justify-center p-6 pb-0">
                <img
                  src={bgPattern}
                  alt=""
                  className="absolute rounded-t-[48px] w-full h-full top-0 right-0 opacity-30 text-primary-600 object-cover"
                />
                <img
                  src={Noise}
                  alt=""
                  className="absolute rounded-t-[48px] w-full h-full top-0 right-0 z-10 bg-transparent opacity-25 object-cover"
                />
                <img src={PhoneMockup2} alt="" className="z-20" />
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[120px] bg-Primary-50">
          <div className=" flex flex-col gap-12 items-start">
            <h2 className="font-intrument-sans text-center text-[36px] font-semibold text-gray-900">
              Why use MinieMoney
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 rounded-[24px] bg-Green-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-Green-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-Green-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Save smart with KoloSave
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      Earn up to 10% annual interest when you save with
                      KoloSave. Grow your money effortlessly!
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-Green-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-Green-200" />
                      <Wiggle className="fill-Green-200" />
                    </div>
                    <Piggy className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 rounded-[24px] lg:order-2 bg-indigo-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-indigo-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-indigo-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Send and receive money instantly
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      Transfer funds to friends and family easily using your
                      unique MinieTAG or MinieMoney bank account.
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-indigo-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-indigo-200" />
                      <Wiggle className="fill-indigo-200" />
                    </div>
                    <MoneyBag className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 rounded-[24px] bg-cyan-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-cyan-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-cyan-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Get cash gifts the cool way
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      Receive cash gifts from friends, family, and loved ones
                      effortlessly using your MinieTAG or MinieLink.
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-cyan-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-cyan-200" />
                      <Wiggle className="fill-cyan-200" />
                    </div>
                    <Gift className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 rounded-[24px] lg:order-2 bg-yellow-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-yellow-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-yellow-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Top up and earn with Saveback
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      With saveback, 3% of airtime or data you purchase is
                      automatically saved in your KoloSave wallet.
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-yellow-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-yellow-200" />
                      <Wiggle className="fill-yellow-200" />
                    </div>
                    <CreditCard className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 rounded-[24px] bg-moss-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-moss-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-moss-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Fun financial education
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      Make learning about money fun with engaging educational
                      content and live quizzes.
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-moss-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-moss-200" />
                      <Wiggle className="fill-moss-200" />
                    </div>
                    <GraduationCap className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
              <div className="flex items-stretch gap-6 flex-col lg:flex-row">
                <div className="px-6 pt-6 lg:order-2 rounded-[24px] bg-violet-200 h-inherit flex items-end">
                  <div className="px-4 pt-4 bg-violet-100 rounded-t-[48px] mx-auto">
                    <img src={PhoneMockup3} alt="" />
                  </div>
                </div>
                <div className="flex-grow flex flex-col rounded-[24px] bg-white">
                  <div className="p-6 flex flex-col items-start  border-2 border-violet-100 rounded-t-[24px] border-b-0">
                    <h3 className="font-intrument-sans font-semibold text-3xl lg:text-[36px] text-gray-900">
                      Great investment opportunities
                    </h3>
                    <p className="font-nunito pr-[60px] lg:text-lg text-gray-600">
                      Get access to the world of investing early with stock
                      market and parental control.
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-violet-100 rounded-b-[24px] relative">
                    <div className="absolute items-stretch w-full flex">
                      <Wiggle className="fill-violet-200" />
                      <Wiggle className="fill-violet-200" />
                    </div>
                    <GraphBar className="w-[200px] h-[200px] z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] lg:py-[120px] bg-white h-full min-h-screen">
          <div className="flex items-start flex-col md:flex-row gap-[48px] lg:gap-[64px]">
            <div className="w-full md:w-[360px] flex flex-col items-start gap-2">
              <h1 className="font-intrument-sans text-[48px] font-semibold text-gray-900">
                Why MinieMoney matters
              </h1>
              <p className="font-nunito text-[#4B5563] text-xl">
                Here’s why MinieMoney is a must-have for every youngster.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col rounded-3xl bg-gray-25">
                <div className="rounded-t-3xl p-8 flex flex-col gap-2 border-2 border-gray-200 border-b-0">
                  <h3 className="font-intrument-sans text-3xl lg:text-[36px] font-semibold text-gray-900">
                    Data privacy
                  </h3>
                  <p className="font-nunito text-gray-600 lg:text-lg pr-[80px]">
                    We protect your data with our app’s comprehensive privacy
                    measures and safe storage solutions.
                  </p>
                </div>
                <div className="p-6 bg-Primary-100 rounded-b-3xl ">
                  <div className="w-full h-full bg-Primary-600 flex items-center justify-center rounded-2xl  relative">
                    <img
                      src={DotPattern}
                      alt=""
                      className="top-0 left-0 w-full h-full object-cover absolute rounded-2xl"
                    />
                    <div className="p-6 z-10">
                      <Shield />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-3xl bg-gray-25">
                <div className="rounded-t-3xl p-8 flex flex-col gap-2 border-2 border-gray-200 border-b-0">
                  <h3 className="font-intrument-sans text-3xl lg:text-[36px] font-semibold text-gray-900">
                    Raising money smart kids
                  </h3>
                  <p className="font-nunito text-gray-600 lg:text-lg pr-[80px]">
                    MinieMoney equips you with life skills and learnings.
                    Raising youngsters who know all the important stuff about
                    money and finance.
                  </p>
                </div>
                <div className="p-6 bg-Green-100 rounded-b-3xl ">
                  <div className="w-full h-full grid grid-cols-2 gap-4">
                    <img
                      src={image1}
                      alt=""
                      className="row-span-2 rounded-2xl w-full"
                    />
                    <img src={image2} alt="" className="rounded-2xl w-full" />
                    <img src={image3} alt="" className="rounded-2xl w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] lg:py-[120px] bg-gray-50">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-start px-8 pt-12 pb-6 gap-2">
              <h2 className="font-intrument-sans text-[48px] font-semibold text-gray-900">
                Friends of MinieMoney
              </h2>
              <p className="font-nunito text-gray-600 text-xl ">
                See what people are saying.
              </p>
            </div>
            <div className="flex items-center gap-8 lg:gap-[64px] flex-col lg:flex-row">
              <div
                className="p-6 flex flex-col gap-6 rounded-3xl transition-transform duration-300"
                style={{ background: currrentBackground }}
              >
                <p className="font-nunito lg:text-lg text-gray-700">
                  “MinieMoney is amazing, I was able to participate in a quiz
                  competition from the app and I look forward to saving my money
                  for some interest.”
                </p>
                <div className="flex flex-col gap-1">
                  <h4 className="font-nunito lg:text-lg font-bold text-gray-900">
                    Adeola Toba
                  </h4>
                  <p className="text-gray-500 font-nunito">Youngster</p>
                </div>
              </div>
              <div className="flex">
                {testimonials.map((testimonial) => {
                  return (
                    <div
                      key={testimonial.id}
                      className="w-[100px] h-[100px] cursor-pointer"
                      onClick={() =>
                        setCurrentbackground(testimonial.background)
                      }
                    >
                      <div
                        className="w-full h-full p-[10px] bg-white rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{
                          scale: `${
                            currrentBackground === testimonial.background
                              ? 1
                              : 0.8
                          }`,
                          border: `${
                            currrentBackground === testimonial.background
                              ? `2px solid ${testimonial.ring}`
                              : "none"
                          }`,
                        }}
                      >
                        <div
                          className="flex items-center justify-center rounded-full p-2"
                          style={{ background: testimonial.background }}
                        >
                          <img
                            src={testimonial.image}
                            alt=""
                            className="w-[64px] h-[64px]"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
        <Section id="faq" className="px-5 py-[64px] lg:py-[120px] bg-white">
          <div className="flex flex-col gap-[48px]">
            <h2 className="font-intrument-sans text-[48px] font-semibold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq) => {
                return (
                  <FaqModal
                    title={faq.title}
                    description={
                      faq.id === 6 ? (
                        <ul className="list-disc list-inside">
                          <li>Digital savings accounts</li>
                          <li>Goal-based savings</li>
                          <li>Financial education content</li>
                        </ul>
                      ) : (
                        faq.description
                      )
                    }
                    key={faq.id}
                  />
                );
              })}
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[80px] lg:py-[120px] bg-Primary-25">
          <div className="flex flex-col gap-[48px]">
            <h2 className="font-intrument-sans text-[36px] md:text-[48px] font-semibold text-gray-900">
              Getting started is easy—here’s how.
            </h2>
            <div className="bg-[#E3EDFC] rounded-2xl w-full relative p-8 grid md:grid-cols-3 gap-[28px] grid-cols-1">
              <img
                src={bgPattern}
                alt=""
                className="absolute rounded-t-[48px] w-full h-full top-0 right-0 opacity-30 text-primary-600 object-cover"
              />
              <img
                src={Noise}
                alt=""
                className="absolute rounded-t-[48px] w-full h-full top-0 right-0 z-10 bg-transparent opacity-25 object-cover"
              />
              <div className="col-span-2 z-20 rounded-2xl bg-Primary-25 border-4 border-Primary-300 p-8 pb-0 flex flex-col gap-6 justify-between">
                <h3 className="text-gray-900 text-[30px] font-semibold leading-[40px] font-intrument-sans">
                  Download the Miniemoney app from App Store or Google Play
                </h3>
                <div className="bg-Primary-100 rounded-t-[48px] p-4 pb-0 flex items-center gap-4 flex-col md:flex-row">
                  <div className="w-1/2">
                    <img src={PhoneMockup2} alt="" className="w-full" />
                  </div>
                  <div className="w-1/2">
                    <img src={PhoneMockup2} alt="" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl z-20 bg-Primary-25 border-4 border-Primary-300 p-8 pb-0 flex flex-col gap-6 justify-between">
                <h3 className="text-gray-900 text-[30px] font-semibold leading-[40px] font-intrument-sans">
                  Open an account in 3 steps
                </h3>
                <div className="bg-Primary-100 rounded-t-[48px] p-4 pb-0 w-full h-full">
                  <img src={PhoneMockup2} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="px-5 py-[120px] bg-white">
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
                    className="font-nunito hover:bg-Primary-600 flex items-center gap-2 bg-Primary-500 text-white text-sm font-semibold py-[10px] px-4 rounded-4xl"
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

export default Home;
