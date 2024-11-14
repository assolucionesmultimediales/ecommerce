"use client"; // Indica que el componente se ejecuta en el cliente

import Image from "next/image"; // Importa el componente de imágenes optimizadas de Next.js
import { useAppContext } from "@/app/contexts/AppContext"; // Importa el contexto del carrito
import { useTriviaContext } from "@/app/contexts/TriviaContext"; // Importa el contexto de la trivia
import Link from "next/link"; // Importa el componente de enlaces de Next.js

const ProductsCheckOut = () => {
  const { cart, cartTotal, handleRemoveProduct } = useAppContext(); // Extrae funciones y datos del contexto del carrito
  const { triviaScore } = useTriviaContext(); // Extrae el puntaje de trivia del contexto de trivia

  // Calcula el porcentaje de descuento basado en el puntaje de trivia
  const getDiscountPercentage = () => {
    if (triviaScore >= 100) return 30;
    if (triviaScore > 80) return 25;
    if (triviaScore > 40) return 20;
    return 0;
  };

  // Calcula el total con el descuento aplicado
  const totalWithDiscount = () => {
    const discountPercentage = getDiscountPercentage();
    return cartTotal() * (1 - discountPercentage / 100);
  };

  return (
    <div className="mb-28">
      <h1 className="text-lg font-medium mb-14">Productos seleccionados</h1>

      {/* Mapea cada producto en el carrito */}
      <div className="mb-20">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col items-start mb-8">
            {/* Contenedor de imagen y detalles del producto */}
            <div className="flex items-center">
              <Image
                className="border-4 border-yellow-400 mb-4"
                src={`/imgs/${product.image}`}
                alt={product.name}
                width={150}
                height={300}
              />
              
              {/* Sub-contenedor para el nombre, cantidad y precio */}
              <div className="ml-16">
                <h2 className="mb-2">{`${product.name}  X  ${product.quantity}`}</h2> {/* Nombre y cantidad del producto */}
                <p className="mb-2 text-lg font-bold">$ {product.price * product.quantity}</p> {/* Precio total del producto */}
                <button
                  className="text-zinc-50 border-4 bg-pink-500 border-yellow-400 px-4 py-2"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enlace a la trivia para descuentos */}
      <Link
        className="border-4 border-yellow-400 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-200 hover:border-pink-500 hover:text-pink-500 hover:font-bold"
        href={`/trivia`}
      >
        Hace la trivia para obtener descuentos
      </Link>

      {/* Muestra el puntaje de trivia, descuento y total con descuento */}
      <p className="font-bold mt-6 mb-2">Puntaje: {triviaScore}</p>
      <p className="font-bold mb-2">Descuento: {getDiscountPercentage()}%</p>
      
      {/*eltoFixed es para que me ponga solo dos decimales*/}
      <p className="text-lg font-bold mb-4">Total con descuento: $ {totalWithDiscount().toFixed(2)}</p>
    </div>
  );
};

export default ProductsCheckOut;
