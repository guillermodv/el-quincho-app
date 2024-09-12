"use client";
import Link from "next/link";
import { Suspense } from "react";

import useScreen from "../../hooks/useScreen";

interface Props {
  productCount: number;
  params: any;
  products: any[];
}

export default function CartFooter({ productCount, params, products }: Props) {
  const { isMobile } = useScreen();
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold md:text-lg text-sm text-orange-500">
          {isMobile ? "Productos:" : "Productos seleccionados:"}
        </span>
        <span className="md:text-xl  text-sm md:ml-2 ml-0.5 transition transform hover:scale-110">
          {productCount}
        </span>
        <div className="flex ml-4 space-x-2">
          {products?.slice(0, 3).map((cart) => (
            <img
              key={cart.id}
              src={cart.product.image}
              alt={cart.name}
              className="md:w-12 md:h-12 w-8 h-10 object-cover rounded"
              title={cart.name}
            />
          ))}
          {products?.length > 3 && (
            <div className="md:w-8 md:h-8 flex items-center justify-center bg-gray-600 rounded">
              <span className="text-white">+{products.length - 3}</span>
            </div>
          )}
        </div>
      </div>
      <Suspense>
        <Link
          href={`/cartPayment?${params}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md md:text-lg text-sm"
        >
          {isMobile ? "Ver" : "Ver Carrito"}
        </Link>
      </Suspense>
    </footer>
  );
}
