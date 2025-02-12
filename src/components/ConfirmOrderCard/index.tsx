import { desserts } from "@/libs/const";
import { Formatter } from "@/libs/Formatter";
import Image from "next/image";

const ConfirmOrderCard = ({
  name,
  cantidad,
}: {
  name: string;
  cantidad: number;
}) => {
  const desert = desserts.find((item) => item.name === name);
  return (
    <div className="boder-b border-Rose300 shadow  px-5">
      <div className=" py-3 boder-b border-Rose300 grid grid-cols-4">
        <div className="h-12 ">
          <Image
            src={desert?.image.thumbnail || ""}
            alt={desert?.name || ""}
            width={100}
            height={100}
            className="h-full w-auto rounded"
          />
        </div>
        <div className="col-span-2">
          <h2 className="font-semibold line-clamp-1">{desert?.name}</h2>
          <div className="flex gap-2 items-center">
            <p className="text-Rose500 text-sm font-semibold">{cantidad}X</p>
            <p className="text-sm text-Rose300">
              @{Formatter(desert?.price || 0)}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-semibold text-Rose900 ">
            {Formatter((desert?.price || 0) * cantidad)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderCard;
