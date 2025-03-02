import { Tuser } from "@/types/user";
import { useState } from "react";
import toast from "react-hot-toast";

const useUser = () => {
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (id: string): Promise<Tuser | null> => {
    try {
      const res = await fetch(
        `https://wallet.miniemoneyapi.com/payment/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.status === 400) {
        const errorData = data.data.message;
        setError(errorData);
        
      }
      return data?.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
      return null
    }
  };

  return { fetchUser, error };
};

export default useUser;
