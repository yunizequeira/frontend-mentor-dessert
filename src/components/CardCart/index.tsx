import { useDesertContextValue } from "@/context/desertContext";
import { desserts } from "@/libs/const";
import Image from "next/image";
import { Formatter } from "../../libs/Formatter/index";

type Props = {
  name: string;
  quantity: number;
};
const CartCard = ({ name, quantity }: Props) => {
  const { cart, setCart } = useDesertContextValue();

  const deleteItem = (item: string) => {
    setCart(cart.filter((cartItem) => cartItem.name !== item));
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 ">
      <div>
        <h2 className="font-semibold">{name}</h2>
        <div className="flex gap-2 items-center">
          <p className="text-Rose500 text-sm font-semibold">{quantity}X</p>
          <p className="text-sm text-Rose300">
            @
            {Formatter(desserts.find((item) => item.name === name)?.price || 0)}
          </p>
          <p className="text-sm text-Rose300">
            {Formatter(
              (desserts.find((item) => item.name === name)?.price || 0) *
                quantity
            )}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center    ">
        <div
          className="h-5 w-5 p-1 flex justify-center items-center border border-Rose500 rounded-full cursor-pointer"
          onClick={() => deleteItem(name)}
        >
          <Image
            src="/assets/images/icon-remove-item.svg"
            alt={name}
            width={50}
            height={50}
            className="h-5 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
