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
                    className="border-4 border-yellow-400 mt-20"
                    src={`/imgs/${image}`}
                    width={350}
                    height={550}
                    alt={name}
                    />
                </div>
                <div className="col-span-6 flex flex-col items-start pr-52 mt-28">
                    <h1 className=" text-pink-500 text-lg font-semibold mb-3">{name}</h1>
                    <h2 className="text-pink-500 text-lg font-semibold mb-3"> Autor:<span className="font-normal" > {author}</span></h2>
                    <h2 className="text-pink-500 text-lg font-semibold mb-3">Editorial: <span className="text-pink-500 font-normal">{editorial}</span></h2>
                    <h2 className="text-pink-500 text-lg font-semibold mb-3">Descripción: <span className="text-pink-500 font-normal">{description}</span></h2>
                    <h2 className="text-pink-500 text-lg font-semibold mb-3">Precio: <span className="font-normal">$ {price}</span></h2>
                    <AddToCart  name={name} image={image} price={price} id={id}/>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductSingle