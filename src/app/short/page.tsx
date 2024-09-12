import OrderDetailForm from "@/components/orderDetailForm";
import { Label } from "@/constants/label";
import Image from "next/image";

import { shop } from "../../data/shopData";

export default function Short() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between pt-2 w:12/12">
      <div className="flex flex-col place-item-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/logo.jpeg"
          alt="logo"
          width={340}
          height={180}
          priority
        />
      </div>
      <div className="flex flex-col place-items-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/mercadopago.png"
          alt="mp"
          width={340}
          height={100}
          priority
        />
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12  w-96 md:w-10/12 bg-white text-black p-4">
        <div className="font-bold">{Label.WORK_TIME_TITLE.toUpperCase()}</div>
        <div>{shop.timezone}</div>
      </div>
      <OrderDetailForm />
      <div className="flex flex-col place-items-center lg:w-10/12  w-96 md:w-10/12 bg-slate-200 text-black p-4">
        {Label.REGARDS_LABEL}
      </div>
    </main>
  );
}
