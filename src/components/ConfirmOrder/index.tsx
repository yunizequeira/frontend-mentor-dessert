import { useDesertContextValue } from "@/context/desertContext";
import { Formatter } from "@/libs/Formatter";
import Image from "next/image";
import ConfirmOrderCard from "../ConfirmOrderCard";
const ConfirmOrder = () => {
  const { cart, setCart, showConfirmOrder, setShowConfirmOrder } =
    useDesertContextValue();
    const Total = cart
    .map((item) => item.cantidad * item.price)
    .reduce((a, b) => a + b, 0);

    const Confirmation = () => {
        setShowConfirmOrder(false);
        setCart([]);
    }
  return (
    showConfirmOrder && (
      <div className="fixed top-0 left-0 w-full h-screen lg:flex lg:justify-center lg:items-center z-50 bg-black/50" >
        <div className="h-full px-5 py-10 flex flex-col gap-3 bg-white rounded-lg max-w-sm mx-auto space-y-4 overflow-y-scroll">
          <div>
            <Image
              src="/assets/images/icon-order-confirmed.svg"
              alt="empty cart"
              width={40}
              height={32}
            />
          </div>
          <div>
            <h2 className="text-5xl font-black">Order Confirmed</h2>
            <p className="text-Rose300">We hope you enjoy your food!</p>
          </div>
          <div className="">
            {cart.map((item) => (
             <ConfirmOrderCard name={item.name} cantidad={item.cantidad} key={item.name}/>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-Rose300 ">Order Total </p>
            <p className="font-bold text-2xl">{Formatter(Total)}</p>
          </div>
          <div className="py-5 flex justify-center gap-2 items-center px-5">
            <button className="bg-Red text-white w-full py-3 rounded-3xl hover:bg-Rose900 transition-colors duration-300 font-semibold" onClick={() =>Confirmation()}>
              Start New Order
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmOrder;
