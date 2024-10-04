import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";

const ProductSingle = ({ product }) => {
  const { id, name, author, editorial, description, price, image } = product;

  return (
    <>
      <section className='py-28 mt-5 md:mt-14 md:mb-4'>
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
          <div className='col-span-12 md:col-span-6 max-w-xs md:max-w-lg flex flex-col items-start pr-10 mt-6 md:mt-0 ml-8 md:ml-0'>
            {" "}
            {/* Ajustamos el padding izquierdo y el margen */}
            <h1 className='text-pink-500 text-lg font-semibold mb-3'>{name}</h1>
            <h2 className='text-pink-500 text-lg font-semibold mb-3'>
              Autor: <span className='font-normal'>{author}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-3'>
              Editorial:{" "}
              <span className='text-pink-500 font-normal'>{editorial}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-3'>
              Descripción:{" "}
              <span className='text-pink-500 font-normal'>{description}</span>
            </h2>
            <h2 className='text-pink-500 text-lg font-semibold mb-3'>
              Precio: <span className='font-normal'>$ {price}</span>
            </h2>
            <AddToCart name={name} image={image} price={price} id={id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
