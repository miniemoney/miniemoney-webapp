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
        url: "https://res.cloudinary.com/dvqiawhl4/image/upload/v1741261603/MinieMoney_-_Gifting_Thumbnail_1_yocnzh.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function GiftingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
