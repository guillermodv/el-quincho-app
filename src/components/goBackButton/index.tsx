"use client";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-gray-300 my-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <svg
        className="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L8.414 11H17a1 1 0 0 0 0-2H8.414l2.293-2.293a1 1 0 0 0 0-1.414z"
        />
      </svg>
      Volver
    </button>
  );
}
