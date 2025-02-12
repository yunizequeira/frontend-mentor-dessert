"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
export interface CartItems {
  name: string;
  cantidad: number;
  price: number;
}

interface CartContext {
  cart: CartItems[];
  setCart: Dispatch<SetStateAction<CartItems[]>>;
  showConfirmOrder: boolean;
  setShowConfirmOrder: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContext>({
  cart: [],
  setCart: () => {},
  showConfirmOrder: false,
  setShowConfirmOrder: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItems[]>([]);
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  return (
    <CartContext.Provider
      value={{ cart, setCart, showConfirmOrder, setShowConfirmOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useDesertContextValue = () => useContext(CartContext);
