'use client'
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({name, price, id, image}) => {
  const {handleAddToCart} = useAppContext()  
  return (
    <>
    <button onClick={()=> handleAddToCart(name, price, image, id, 1)} className="text-zinc-50 border-4 bg-pink-700  border-yellow-400 px-4 py-2 mb-14 hover:bg-pink-500">
        Agregar al carrito
    </button>
    </>
  )
}

export default AddToCart