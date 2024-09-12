type Shop = {
  name: string;
  address: string;
  phone: string;
  categories: Category[];
};

type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Product[];
};

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  price_small?: string;
  quantity: string;
};

type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

/**
 * An array of `Category` objects representing the categories and subcategories of products available in the application.
 */
const categories: Category[] = [
  {
    id: "1",
    name: "Empanadas",
    description: "Precio por docena 15600$",
    image: "https://i.imgur.com/2310245.jpg",
    subcategories: [
      {
        id: "1",
        name: "Empanada Capresse",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "15",
      },
      {
        id: "2",
        name: "Empanada de Carne",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "3",
        name: "Empanada de Pollo",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "4",
        name: "Empanada de Verdura",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "5",
        name: "Empanada J y Q",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "12",
      },
      {
        id: "6",
        name: "Empanada de Pollo",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "10",
      },
      {
        id: "7",
        name: "Empanada de Roquefort",
        description: "",
        image: "/empanadas.png",
        price: "1300",
        quantity: "12",
      },
    ],
  },
];

const shop = {
  name: "El Quincho",
  address: "Boccuzzi 1610, Fcio Varela, Bs As.",
  phone: "11-65550438",
  timezone: "De viernes a domingos de 19hs a 23hs.",
  categories: categories,
};

export { shop };
export type { CartItem, Category, Product, Shop };
