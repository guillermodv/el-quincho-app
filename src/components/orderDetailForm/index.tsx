"use client";
import { useForm } from "react-hook-form";

import { Label } from "@/constants/label";
import { useRouter } from "next/navigation";
import WhatsappLogo from "../whatsappLogo";

export default function OrderDetailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push(`/order?firstName=${data.firstName}&address=${data.address}`);
  };

  return (
    <div className="flex flex-col place-items-center lg:w-10/12 w-96 md:w-10/12 bg-gray-200 text-black p-4">
      <div className="font-bold mx-4 mt-4 mb-2">
        {Label.COMPLETE_FORM_LABEL.toUpperCase()}
      </div>
      <div className="mx-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-1 flex flex-col">
            <label className="font-sans" htmlFor="firstName">
              Nombre:
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", {
                required: true,
                maxLength: 40,
                minLength: 2,
              })}
            />
            {errors.firstName && (
              <span className="font-sans text-red-500"> Ingrese Nombre</span>
            )}
          </div>

          <div className="py-1 flex flex-col">
            <label className="font-sans" htmlFor="address">
              Direccion:
            </label>
            <input
              id="address"
              type="text"
              {...register("address", {
                required: true,
                maxLength: 120,
                minLength: 2,
              })}
            />
            {errors.address && (
              <span className="font-sans text-red-500">Ingrese Dirección</span>
            )}
          </div>
          <button
            className="mt-4 align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  bg-green-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none items-center gap-3"
            type="submit"
          >
            <div className="m-1 flex items-center font-extrabold hover:font-bold">
              <WhatsappLogo /> {Label.PRE_DELIVERY_lABEL}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
