import type { Metadata } from "next";
import Render from "./render";
import { Tuser } from "@/types/user";

type Props = {
  params: Promise<{ id: string }>;
};


const fetchUser = async (id: string): Promise<Tuser> => {
  try {
    const res = await fetch(`https://wallet.miniemoneyapi.com/payment/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const user = await fetchUser(id);
  return {
    icons: [
      {
        url: `${user?.profileImage}`,
        rel: "icon",
      },
    ],
    title: `${"Dash " + user.firstName + " money on MinieMoney"}`,
    openGraph: {
      title: `${"Dash " + user.firstName + " money on MinieMoney"}`,
      description: `${
        "Send money to " +
        user.firstName +
        " on MinieMoney to help them start their financial journey"
      }`,
      images: [
        {
          url: `${user.profileImage}`,
        },
      ],
      url: `https://miniemoney.com/`,
      type: "website",
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
  return (
    <div>
      <Render id={id} />
    </div>
  );
};

export default Page;
