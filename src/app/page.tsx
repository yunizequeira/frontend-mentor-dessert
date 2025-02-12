"use client";
import Cart from "@/components/Cart";
import ConfirmOrder from "@/components/ConfirmOrder";
import Dessert from "@/components/Dessert";
import { CartProvider } from "@/context/desertContext";

export default function Home() {
  return (
    <div className="">
      <div className="py-5">
        <h1 className="text-5xl font-bold px-5">Desert</h1>
      </div>
      <div className="grid lg:flex gap-10 px-2 lg:px-5">
        <CartProvider>
          <div className="py-10">
            <Dessert />
          </div>
          <Cart />

          <ConfirmOrder />
        </CartProvider>
      </div>
    </div>
  );
}
