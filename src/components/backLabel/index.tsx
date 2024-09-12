import { Label } from "@/constants/label";
import Link from "next/link";

export default function BackLabel() {
  return (
    <Link
      href="/"
      className="hover:font-extrabold font-semibold text-sm text-gray-700 justify-start p-2"
    >
      {Label.MAIN_PAGE_BACK}
    </Link>
  );
}
