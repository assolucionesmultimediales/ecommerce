import Image from "next/image"
import AddToCart from "@/app/components/AddToCart";
const ProductSingle = ({product}) => {
    const {id, name, author, editorial, description, price, stock, image} = product
    return (
        <>
        <section className="py-28">
            <div className="grid grid-cols-12">
                <div className="col-span-6 flex justify-center items-center pl-36">
                    <Image
                    className="border-4 border-yellow-400 "
                    src={`/imgs/${image}`}
                    width={350}
                    height={550}
                    alt={name}
                    />
                </div>
                <div className="col-span-6 flex flex-col items-start pr-52">
                    <h1 className=" text-pink-500 text-xl font-semibold">Nombre: <span className="font-light text-pink-500 ">{name}</span></h1>
                    <h2 className="text-pink-500 text-lg font-medium">Autor: {author}</h2>
                    <h3 className="text-pink-500 text-lg font-medium">Precio: $ {price}</h3>
                    <p className="text-pink-500 text-lg font-medium">Descripción: <span className="text-pink-500">{description}</span></p>
                    <AddToCart  name={name} image={image} price={price} id={id}/>
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductSingle