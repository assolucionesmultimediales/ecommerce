import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
import Link from "next/link";

const ProductSingle = ({ product }) => {
  const { id, name, author, editorial, description, price, image } = product;

  return (
    <>
      <section className='py-28 mt-5 md:mt-20 md:mb-4'>
        <div className='grid grid-cols-12 gap-6'>
          {/* Imagen a la izquierda en pantallas grandes, y ocupando todo el ancho en pantallas pequeñas */}
          <div className='col-span-12 md:col-span-6 flex justify-center'>
            <Image
              className='border-4 border-yellow-400 max-w-xs md:max-w-md h-auto' // Controlamos el ancho máximo
              src={`/imgs/${image}`}
              width={350}
              height={550}
              alt={name}
            />
          </div>

          {/* Texto debajo de la imagen en pantallas pequeñas, a la derecha en pantallas grandes */}
          <div className='col-span-12 md:col-span-6 max-w-xs md:max-w-lg flex flex-col items-start pr-10 mt-6 md:mt-24 ml-8 md:ml-0'>
            {" "}
            {/* Ajustamos el padding izquierdo y el margen */}
            <h2 className='text-pink-500 text-lg font-semibold mb-5'>
              Autor: <span className='font-normal'>{author}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-5'>
              Editorial:{" "}
              <span className='text-pink-500 font-normal'>{editorial}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-5'>
              Descripción:{" "}
              <span className='text-pink-500 font-normal'>{description}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-10'>
              Precio: <span className='font-normal'>$ {price}</span>
            </h2>
            <Link
        className="text-zinc-50 border-4 bg-pink-700  border-yellow-400 px-4 py-2 mb-14 text-lg font-semibold hover:bg-pink-500"
        href={`/trivia`}
      >
        Hace la trivia para obtener descuentos
      </Link>

            <AddToCart name={name} image={image} price={price} id={id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
