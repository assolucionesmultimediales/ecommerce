'use client';

import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (name, price, image, id, quantity) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };
  

    const existingProduct = cart.find(item => item.id === id);
    
    if(existingProduct){
      existingProduct.quantity += quantity
      return setCart([...cart])
    }
    setCart ([...cart,product])

  };

  const handleRemoveProduct = (id) => {
    const restProducts = cart.filter(product => product.id !== id);
    setCart(restProducts);
  };

const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        handleRemoveProduct,
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
