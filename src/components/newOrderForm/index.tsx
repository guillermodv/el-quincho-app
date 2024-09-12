"use client";
import { Label } from "@/constants/label";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useContext } from "react";

import { BackLabel, CartFooter, GoBackButton } from "@/components";
import { CartContext } from "@/context";
import useToast from "@/hooks/useToast";
import { Toaster } from "react-hot-toast";
import { CartItem, Product, shop } from "../../data/shopData";

const selectedStyle =
  "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110";

const nonSelectedStyle =
  "bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110";

export default function NewOrderForm() {
  const searchParams = useSearchParams();
  let { cart, setCart } = useContext(CartContext);

  const firstName = searchParams.get("firstName");
  const address = searchParams.get("address");
  const categories = shop.categories;

  const onAdd = (product: Product, quantity: number) => {
    const oldCart = cart;
    let productCart: CartItem = {
      id: Math.random().toString(36).substring(2, 9),
      product: product,
      quantity: quantity,
    };
    const newCart = [...oldCart, productCart];
    setCart(newCart);
  };

  const isSelected = useCallback(
    (name: string) => {
      return cart.some((item: CartItem) => item.product.name === name);
    },
    [cart]
  );

  const { notifyAdded } = useToast();

  return (
    <Suspense>
      <div>
        <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
          <Image
            src="/logo.jpeg"
            className="mx-4 my-2"
            alt="Logo Aldo"
            width={120}
            height={380}
          />
          <Toaster />
          <GoBackButton />
          <div className="font-bold mx-4 mt-4 mb-2 text-green-800">
            {Label.COMPLETE_FORM_LABEL.toUpperCase()}
          </div>
          <div className="font-mono md:text-xl text-sm">{`Hola! ${firstName}`}</div>
          <div className="font-mono md:text-xl text-sm p-2">
            {`Pedido a entregar en: ${address}`}
          </div>
          {categories?.map((category, key) => (
            <div className="md:w-4/5 w-full px-2" key={key}>
              <div className="flex flex-col">
                <div className="font-bold md:text-xl text-orange-500 text-sm pt-2">
                  {category.name.toUpperCase()}
                </div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                {category.subcategories?.map((subcategory, key) => (
                  <div
                    key={key}
                    className="border-gray-400 border-2 mb-1 rounded-md bg-slate-200 p-2 flex flex-col justify-between"
                  >
                    <Image
                      src={subcategory.image} // Asegúrate de que `subcategory.image` es una URL válida
                      alt={subcategory.name}
                      width={200} // Ajusta el tamaño según tus necesidades
                      height={200} // Ajusta el tamaño según tus necesidades
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                    <div className="px-4 py-2 flex flex-col justify-between flex-grow">
                      <div className="font-bold text-sm md:text-xl mb-2">
                        {subcategory.name}
                      </div>
                      <p className="text-gray-700 text-sm md:text-xl">
                        {subcategory.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="md:text-xl text-sm font-bold">
                          ${subcategory.price}
                        </div>
                        <button
                          onClick={() => {
                            notifyAdded(), onAdd(subcategory, 1);
                          }}
                          className={
                            isSelected(subcategory.name)
                              ? selectedStyle
                              : nonSelectedStyle
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <CartFooter
            productCount={cart.length}
            params={searchParams}
            products={cart}
          />
          <BackLabel />
        </div>
      </div>
    </Suspense>
  );
}
