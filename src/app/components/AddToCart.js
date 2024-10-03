'use client'
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({name, price, id, image}) => {
  const {handleAddToCart} = useAppContext()  
  return (
    <>
    <button onClick={()=> handleAddToCart(name, price, image, id, 1)} className="text-zinc-50 border-4 bg-pink-500  border-yellow-400 px-4 py-2 mt-6">
        Add to cart
    </button>
    </>
  )
}

export default AddToCart