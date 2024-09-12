"use client";
import CartSummary from "@/components/cartSummary";
import { CartContext } from "@/context";
import { Suspense, useContext } from "react";

export default function Page() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <Suspense>
      <CartSummary cartItems={cart} setCart={setCart} />
    </Suspense>
  );
}
