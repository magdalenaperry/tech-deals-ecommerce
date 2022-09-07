import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// hook
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState();

  const [totalPrice, setTotalPrice] = useState();

  const [totalQuantities, setTotalQuantities] = useState();

  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item.id === product._id
    );
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// do not use {} and new line, or code cannot be accessed on [slug]
export const useStateContext = () => useContext(Context);
