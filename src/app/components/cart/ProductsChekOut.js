"use client";
import Image from "next/image";
import { useAppContext } from "@/app/contexts/AppContext";

const ProductsChekOut = () => {
  const { cart, cartTotal, handleRemoveProduct } = useAppContext();
  return (
    <div>
      <h1 className=" text-lg font-medium mb-14">Productos seleccionados</h1>
      <div>
        {cart.map(product => (
          <div key={product.id} className='flex justify-between items-center '>
            <div className='flex items-center'>
              <Image
              className="border-4 border-yellow-400 mb-8"
                src={`/imgs/${product.image}`}
                alt={product.name}
                width={150}
                height={300}
              />
              <h2 className="ml-8">{`${product.name}  X  ${product.quantity}`}</h2>
            </div>
            <p className="text-lg font-bold">$ {product.price * product.quantity}</p>
            <button className="text-zinc-50 border-4 bg-pink-500  border-yellow-400 px-4 py-2 mt-6" onClick={()=> handleRemoveProduct(product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <p className="text-lg font-bold mb-24">Total: $ {cartTotal()}</p>
    </div>
  );
};

export default ProductsChekOut;
