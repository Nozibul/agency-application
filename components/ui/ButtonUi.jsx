"use client";
import { useRouter } from "next/navigation";

export const ButtonUi = ({ text, type }) => {
  const router = useRouter();

  const navigate = () => {
    if (text) return router.back();
  };

  return (
    <>
      <button
       type={type}
        className={`mb-4 py-4 rounded text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition duration-200 ${
          text.length > 8 ? "w-1/3  mx-auto flex justify-center items-center" : "w-full"
        }`}
        onClick={navigate}
      >
        {text}
      </button>
    </>
  );
};
