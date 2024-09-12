import { BackLabel, MenuRow } from "@/components";
import { shop } from "@/data/shopData";
import Image from "next/image";

interface MenuForm {
  showDescriptions: boolean;
  showImage: boolean;
}

export default function MenuForm({ showDescriptions, showImage }: MenuForm) {
  const categories = shop.categories;
  return (
    <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
      <Image
        src="/empanadas.png"
        className="mx-4 my-2"
        alt="Logo Aldo"
        width={190}
        height={480}
      />
      {categories?.map((category, key) => (
        <div className="md:w-4/5 w-full px-2" key={key}>
          <div className="flex flex-col">
            <div className="font-bold text-xl pt-2 text-orange-500">
              {category.name.toUpperCase()}
            </div>
            {showDescriptions && category.description && (
              <div className="sm:text-xl"> {category.description}</div>
            )}
          </div>
          {category.subcategories?.map((subcategory, key) => (
            <div key={key}>
              <MenuRow product={subcategory} />
            </div>
          ))}
        </div>
      ))}
      <BackLabel />
    </div>
  );
}
