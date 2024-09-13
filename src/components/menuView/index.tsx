"use client";
import { BackLabel, MenuRow } from "@/components";

import useGetData from "@/hooks/useGetData";
import Image from "next/image";

interface MenuForm {
  showDescriptions: boolean;
  showImage: boolean;
}

export default function MenuForm({ showDescriptions, showImage }: MenuForm) {
  const { data } = useGetData();
  return (
    <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
      <Image
        src="/empanadas.png"
        className="mx-4 my-2"
        alt="Logo quincho"
        width={190}
        height={480}
      />
      {data.length === 0 && (
        <div className="text-red-500 font-bold">Cargando datos...</div>
      )}
      {data.length > 0 && (
        <>
          <div className="md:w-4/5 w-full px-2">
            <div className="flex flex-col">
              <div className="font-bold text-xl pt-2 text-orange-500">
                {"Empanadas".toUpperCase()}
              </div>
              {showDescriptions && (
                <div className="sm:text-xl"> Empanadas </div>
              )}
            </div>
            {data?.map((dataItem: any, key: any) => (
              <div key={key}>
                <MenuRow product={dataItem} />
              </div>
            ))}
          </div>
        </>
      )}
      <BackLabel />
    </div>
  );
}
