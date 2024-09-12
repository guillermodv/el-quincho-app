"use client";
import { Label } from "@/constants/label";
import { CartItem } from "@/data/shopData";
import useToast from "@/hooks/useToast";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import GoBackButton from "../goBackButton";
import WhatsappLogo from "../whatsappLogo";

interface props {
  cartItems: CartItem[];
  setCart: any;
}

export default function CartSummary({ cartItems, setCart }: props) {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const address = searchParams.get("address");
  const { notifyDeleted } = useToast();

  const onDelete = (id: string) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const calculateSum = useCallback(() => {
    return cartItems.reduce(
      (sum: number, item) =>
        sum + ((item.product?.price || 0) as number) * item.quantity,
      0
    );
  }, [cartItems]);

  const sendMessage = () => {
    const cartShop = cartItems.reduce((message, item) => {
      return message + `${item.product.name}: ${item.quantity}, `;
    }, "");
    const message = `${Label.MESSAGE_DELIVERY}, + Nombre: ${firstName}, Direccion: ${address}, + ${cartShop}`;
    window.open(`${message}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-screen">
      <h2 className="text-lg font-semibold mb-4">Resumen del Carrito</h2>

      <GoBackButton />

      {cartItems.length === 0 && <div>No posee items a pagar</div>}
      {cartItems.length !== 0 && (
        <>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-4 mb-2">
                <div className="flex items-center col-span-2">
                  <div className="ml-2">
                    <p className="md:text-xl text-sm">{item.product?.name}</p>
                    <p className="text-gray-500 md:text-md text-xs">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-600 p-5">${item.product?.price}</div>
                <button
                  onClick={() => onDelete(item.id)}
                  className="inline-flex items-center justify-center p-2 rounded-full text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t pt-4">
            <p className="font-semibold">Total:</p>
            <p className="font-semibold">${calculateSum()}</p>
          </div>
          <button
            className="mt-4 align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  bg-green-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none items-center gap-3"
            onClick={() => {
              notifyDeleted(), sendMessage();
            }}
          >
            <div className="m-1 flex items-center font-extrabold hover:font-bold">
              <WhatsappLogo /> {Label.DELIVERY_lABEL}
            </div>
          </button>
        </>
      )}
    </div>
  );
}
