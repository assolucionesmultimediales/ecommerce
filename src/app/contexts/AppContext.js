'use client';

import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const cartLength = cart.length

const handleAddToCart =(name, price, image, id, quantity) => {
const product = {
  name,
  price,
  image,
  id,
  quantity
}
/*const existingProduct = cart.find((item) => item.id === id);
if(existingProduct){
  existingProduct.quantity += 1;
  return setCart([...cart]);
} else {*/
  setCart([...cart, product])
}
  ;

const handleRemoveProduct = () =>{
// to do, agregar id 
}

const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
