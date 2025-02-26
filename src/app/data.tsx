
import { VFDIcon, BaseOneIcon, FilmHouseIcon, NGXIcon } from "@/components/customIcon";
import testimony2 from "../../public/testimony_2.png";
import testimony3 from "../../public/testimony_3.png";
import testimony1 from "../../public/testimony_1.png";
import testimony4 from "../../public/testimony_4.png";

export const items = [
  <VFDIcon key={1} className="text-Primary-500" />,
  <BaseOneIcon key={2} className="text-Primary-500" />,
  <FilmHouseIcon key={3} className="text-Primary-500" />,
  <NGXIcon key={4} className="text-Primary-500" />,
  <VFDIcon key={5} className="text-Primary-500" />,
  <BaseOneIcon key={6} className="text-Primary-500" />,
  <FilmHouseIcon key={7} className="text-Primary-500" />,
  <NGXIcon key={8} className="text-Primary-500" />,
];

export const testimonials = [
  {
    id: 1,
    image: testimony1,
    background: "#D2F3E3",
    ring: "#228153",
  },
  {
    id: 2,
    image: testimony2,
    background: "#D9CBFB",
    ring: "#340C98",
  },
  {
    id: 3,
    image: testimony3,
    background: "#CAFAFE",
    ring: "#0394A0",
  },
  {
    id: 4,
    image: testimony4,
    background: "#FAFFAD",
    ring: "#99A300",
  },
];

export const faqs = [
  {
    title: "What is MinieMoney?",
    description:
      "MinieMoney is a financial app designed to help kids and teens learn financial literacy while managing their money in a safe and structured way.",
    id: 1,
  },
  {
    title: "How does MinieMoney work?",
    description:
      "MinieMoney provides a secure digital banking experience for young users, allowing them to save, spend, and track their money under parental supervision. It also includes financial education features to teach responsible money management.",
    id: 2,
  },
  {
    title: "Who can use MinieMoney?",
    description:
      "MinieMoney is designed for kids and teens. Parents or guardians will need to set up an account and manage permissions for younger users.",
    id: 3,
  },
  {
    title: "Is MinieMoney safe for kids?",
    description:
      "Yes, MinieMoney has strict security measures in place to ensure a safe experience for young users.",
    id: 4,
  },
  {
    title: "How do I sign up for MinieMoney?",
    description:
      "To sign up, visit our website or download the MinieMoney app, follow the registration steps, and complete the verification process.",
    id: 5,
  },
  {
    title: "What features does MinieMoney offer?",
    id: 6,
  },
  {
    title: "Can kids use MinieMoney without a bank account?",
    description:
      "Yes, MinieMoney provides a standalone financial ecosystem for kids, but linking a parent’s account may be required for certain features.",
    id: 7,
  },
  {
    title: "How does MinieMoney teach financial literacy?",
    description:
      "MinieMoney incorporates interactive lessons, challenges, and real-world money management experiences to help kids develop smart financial habits.",
    id: 8,
  },
  {
    title: "⁠Are there any fees for using MinieMoney?",
    description:
      "Transactions within the app are free but standard charges apply on external transactions. ",
    id: 9,
  },
];
