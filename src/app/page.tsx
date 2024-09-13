import OrderDetailForm from "@/components/orderDetailForm";
import Image from "next/image";
import Link from "next/link";
import { Label } from "../constants/label";
import { shop } from "../data/shopData";

const mapUrl =
  "https://maps.google.com/maps?q=+Boccuzzi+1610%2C+B1888%2C+Provincia+de+Buenos+Aires&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between pt-2 w:12/12">
      <div className="flex flex-col place-item-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/empanadas.png"
          alt="logo"
          width={540}
          height={480}
          priority
        />
      </div>
      <div className="flex flex-col place-items-center">
        {/* <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/mercadopago.png"
          alt="mp"
          width={540}
          height={150}
          priority
        /> */}
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12 w-12/12 md:w-10/12 bg-gray-300 p-2 font-extrabold md:text-xl">
        {Label.WORK_ZONE_TITLE.toUpperCase()}
        <div className="p-2">
          <iframe
            width="400"
            height="300"
            src={mapUrl}
            title="Quincho"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12  w-96 md:w-10/12 bg-white text-black p-4">
        <div className="font-bold">{shop.address}</div>
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12  w-96 md:w-10/12 bg-white text-black p-4">
        <div className="font-bold">{Label.WORK_TIME_TITLE.toUpperCase()}</div>
        <div>{shop.timezone}</div>
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12 w-96 md:w-10/12 bg-orange-400 text-black p-4">
        <Link href="/menu" className="hover:font-extrabold font-normal text-xl">
          {Label.DIGITAL_MENU_LABEL}
        </Link>
      </div>
      <div className="flex flex-col text-center">
        {/* <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/jamonYmorrones.jpg"
          alt="Logo"
          width={640}
          height={80}
          priority
        /> */}
      </div>
      <OrderDetailForm />
      <div className="flex flex-col place-items-center lg:w-10/12  w-96 md:w-10/12 bg-slate-200 text-black p-4">
        {Label.REGARDS_LABEL}
      </div>
    </main>
  );
}
