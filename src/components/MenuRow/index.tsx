interface Props {
  product: any;
}

const MenuRow = ({ product }: Props) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
      </div>
      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-600 font-bold">${product.price} c/u</p>
      </div>
    </div>
  );
};

export default MenuRow;
