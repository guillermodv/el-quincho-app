import toast, { Toaster as Message } from "react-hot-toast";

const notifyAdded = () => toast("Producto Agregado!");
const notifyDeleted = () => toast("Producto Eliminado!");

export default function useToast() {
  return { Message, notifyAdded, notifyDeleted };
}
