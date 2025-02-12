"use client";
import { desserts } from "@/libs/const";
import Card from "../Card";
import { useDesertContextValue } from "@/context/desertContext";

const Dessert = () => {
  const { cart } = useDesertContextValue();
  return (
    <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {desserts.map((dessert) => (
        <Card
          dessert={dessert}
          quantity={
            cart.find((cartItem) => cartItem.name === dessert.name)?.cantidad ||
            0
          }
          key={dessert.name}
        />
      ))}
    </div>
  );
};

export default Dessert;
