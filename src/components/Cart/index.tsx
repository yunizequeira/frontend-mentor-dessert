import Image from "next/image";
import { useDesertContextValue } from "@/context/desertContext";
import CartCard from "../CardCart";
import { Formatter } from "../../libs/Formatter/index";

const Cart = () => {
  const { cart, setShowConfirmOrder } = useDesertContextValue();
  const Total = cart
    .map((item) => item.cantidad * item.price)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="min-w-64 max-w-96 w-full p-5 shadow-md rounded-lg h-full space-y-5 py-10">
      <div className="flex gap-2 px-5 justify-center">
        <h2 className="font-bold text-Red text-4xl">Your Cart </h2>
        <p className="font-bold text-Red text-4xl">
          ({cart.map((item) => item.cantidad).reduce((a, b) => a + b, 0)})
        </p>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart"
            width={400}
            height={400}
            className="h-52 w-auto"
          />
          <p className="text-Rose500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartCard
              name={item.name}
              quantity={item.cantidad}
              key={item.name}
            />
          ))}
          <div className="py-5 flex justify-between items-center px-5">
            <p className="text-Rose500 text-sm ">Order Total</p>
            <p className="font-bold text-Rose900 text-xl">{Formatter(Total)}</p>
          </div>
          <div className="py-5 flex justify-center gap-2 items-center px-5 bg-Rose100 rounded">
            <Image
              src="/assets/images/icon-carbon-neutral.svg"
              alt={"icon-carbon-neutral"}
              width={50}
              height={50}
              className="h-5 w-auto"
            />
            <p className="text-Rose500 text-sm ">
              This is a carbon-neutral delivery
            </p>
          </div>
          <div className="py-5 flex justify-center gap-2 items-center px-5">
            <button
              className="bg-Red text-white w-full py-3 rounded-3xl hover:bg-Rose900 transition-colors duration-300"
              onClick={() => setShowConfirmOrder(true)}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
