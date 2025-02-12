import Image from "next/image";
import { Formatter } from "@/libs/Formatter";
import { Dessert } from "@/libs/Interfaces";
import { useDesertContextValue } from "@/context/desertContext";

interface Props {
  dessert: Dessert;
  quantity: number;
}

const Card = ({ dessert, quantity }: Props) => {
  const { cart, setCart } = useDesertContextValue();

  const decrement = (item: string) => {
    const find = cart.find((cartItem) => cartItem.name === item);
    if (find) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item
            ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
            : cartItem
        )
      );
      if (find.cantidad === 0) {
        setCart(cart.filter((cartItem) => cartItem.name !== item));
      }
    }
  };

  const increment = (item: string) => {
    const find = cart.find((cartItem) => cartItem.name === item);
    if (find) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item
            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { name: item, cantidad: 1, price: dessert.price }]);
    }
  };

  return (
    <div className="w-full space-y-5">
      <figure className="w-full relative px-5 lg:px-0">
        <Image
          src={dessert.image.desktop}
          alt={dessert.name}
          className="w-full rounded-md shadow-lg hidden lg:block"
          width={400}
          height={360}
          priority
        />
        <Image
          src={dessert.image.tablet}
          alt={dessert.name}
          className="w-full rounded-md shadow-lg hidden lg:hidden md:block"
          width={400}
          height={360}
          priority
        />
        <Image
          src={dessert.image.tablet}
          alt={dessert.name}
          className="w-full rounded-md shadow-lg md:hidden"
          width={400}
          height={360}
          priority
        />
        <div className="absolute -bottom-4 right-0 left-0 flex justify-center items-center">
          {quantity === 0 ? (
            <div
              className="bg-Rose50 rounded-full flex justify-center items-center gap-2 border border-Rose300 py-2 px-5 cursor-pointer"
              onClick={() => increment(dessert.name)}
            >
              <Image
                src="/assets/images/icon-add-to-cart.svg"
                alt="cart"
                width={20}
                height={16}
                className="h-5 w-auto"
              />
              <p className="font-semibold">Add to Cart</p>
            </div>
          ) : (
            <div className="bg-Red rounded-full flex justify-between items-center gap-4 border border-Rose300 py-2 px-5 cursor-pointer text-white">
              <button
                className="cursor-pointer  rounded-full h-5 w-5 flex justify-center items-center p-1 border border-white"
                onClick={() => decrement(dessert.name)}
                type="button"
              >
                <Image
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="cart"
                  width={20}
                  height={16}
                  className="h-5 w-auto"
                />
              </button>
              <p className="font-semibold">{quantity}</p>
              <button
                className="cursor-pointer  border border-white rounded-full h-5 w-5 flex justify-center items-center p-1 hover:bg-Rose300 "
                onClick={() => increment(dessert.name)}
                type="button"
              >
                <Image
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="cart"
                  width={20}
                  height={16}
                  className="h-5 w-auto"
                />
              </button>
            </div>
          )}
        </div>
      </figure>
      <div className="space-y-1 px-5">
        <p className="text-sm text-Rose300">{dessert.category}</p>
        <h2 className="text-xl font-bold">{dessert.name}</h2>
        <p className="font-semibold text-Rose500">{Formatter(dessert.price)}</p>
      </div>
    </div>
  );
};

export default Card;
