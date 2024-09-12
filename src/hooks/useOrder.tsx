import { useState } from "react";

export function useOrder() {
  const [order, setOrder] = useState({});

  return { order, setOrder };
}
