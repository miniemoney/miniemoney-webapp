import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MinieMoney || Gifting",
  description: "Support your loved ones’ savings with a thoughtful cash gift.",
  openGraph: {
    title: "MinieMoney || Gifting",
    description:
      "Support your loved ones’ savings with a thoughtful cash gift.",
    url: "https://miniemoney.com/gifting",
    images: [
      {
        url: "https://res.cloudinary.com/dvqiawhl4/image/upload/v1740553156/minie-link/tmymhjyef4zscc0yod74.png",
      },
    ],
  },
};

export default function GiftingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
