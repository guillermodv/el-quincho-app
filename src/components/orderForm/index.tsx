"use client";
import { Label } from "@/constants/label";
import { cleanObject, openInNewTab } from "@/util";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";

import { shop } from "../../data/shopData";
import BackLabel from "../backLabel";
import WhatsappLogo from "../whatsappLogo";

export default function OrderForm() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const address = searchParams.get("address");
  const categories = shop.categories;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => {
    openInNewTab(
      `${
        Label.MESSAGE_DELIVERY
      } *Nombre:* ${firstName}, *Direccion:* ${address}, *Pedido:* ${JSON.stringify(
        cleanObject(data)
      )
        .replace(/"/g, "")
        .replace("{", "")
        .replace("}", "")
        .replace(",", " ")}`
    );
  };
  return (
    <Suspense>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
            <Image
              src="/logo.jpeg"
              className="mx-4 my-2"
              alt="Logo Aldo"
              width={120}
              height={380}
            />
            <div className="font-bold mx-4 mt-4 mb-2 text-green-800">
              {Label.COMPLETE_FORM_LABEL.toUpperCase()}
            </div>
            <div className="font-mono md:text-xl text-sm">{`Hola! ${firstName}`}</div>
            <div className="font-mono md:text-xl text-sm">
              {`Pedido a entregar en: ${address}`}
            </div>
            {categories?.map((category, key) => (
              <div className="md:w-4/5 w-full px-2" key={key}>
                <div className="flex flex-col">
                  <div className="font-bold md:text-xl text-orange-500 text-sm pt-2">
                    {category.name.toUpperCase()}
                  </div>
                </div>
                {category.subcategories?.map((subcategory, key) => (
                  <div key={key}>
                    <div className="flex flex-row w-full border-gray-400 border-2 mb-1 rounded-md bg-slate-200">
                      <div className="flex flex-row w-full justify-between  border-blue-400 border-2">
                        <div className="flex flex-col">
                          <div className="px-1 font-bold md:text-xl text-xs">
                            {subcategory.name}
                          </div>
                          <div className="px-1 md:text-xl text-xs">
                            {subcategory.description}
                          </div>
                          <div className="px-1 font-mono md:text-sm text-xs">
                            ${subcategory.price}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          {subcategory.price_small && (
                            <div className="font-mono md:text-sm text-xs py-1">
                              <div className="mx-4">Chica</div>
                              <input
                                type="number"
                                className="bg-gray-50  border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2 w-16 h-8"
                                onKeyPress={(e) =>
                                  !/[0-9]/.test(e.key) && e.preventDefault()
                                }
                                min="0"
                                max="10"
                                placeholder="0"
                                {...register(
                                  `${category.name}-chica-${subcategory.name}`,
                                  {
                                    required: false,
                                  }
                                )}
                              />
                            </div>
                          )}
                          <div className="font-mono md:text-sm text-xs py-1">
                            {subcategory.price_small && (
                              <div className="mx-1.5">Grande</div>
                            )}
                            <input
                              type="number"
                              className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-16 h-8"
                              onKeyPress={(e) =>
                                !/[0-9]/.test(e.key) && e.preventDefault()
                              }
                              min="0"
                              max="10"
                              placeholder="0"
                              {...register(
                                `${category.name}${
                                  subcategory.price_small ? "-grande" : ""
                                }-${subcategory.name}`,
                                {
                                  required: false,
                                }
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <button
              className="mt-4 align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  bg-green-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none items-center gap-3"
              type="submit"
            >
              <div className="m-1 flex items-center font-extrabold hover:font-bold">
                <WhatsappLogo /> {Label.DELIVERY_lABEL}
              </div>
            </button>
            <BackLabel />
          </div>
        </form>
      </div>
    </Suspense>
  );
}
