"use client";

import { Label } from "@/constants/label";

export const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noreferrer");
};

export const cleanObject = (obj: any) => {
  return Object.keys(obj)
    .filter((key) => obj[key] !== "")
    .reduce((acc: any, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
};

export const onSubmit = (data: any) => {
  openInNewTab(
    `${Label.MESSAGE_DELIVERY} Pedido a nombre de: ${
      data.firstName
    } Direccion: ${data.address} Pedido: ${JSON.stringify(
      cleanObject(data)
    ).replace('"', "")}`
  );
};
