"use client";
import NewOrderForm from "@/components/newOrderForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <NewOrderForm />
    </Suspense>
  );
}
