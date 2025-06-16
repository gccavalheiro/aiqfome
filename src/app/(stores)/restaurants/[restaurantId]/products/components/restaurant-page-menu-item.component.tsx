import { cn } from "@/lib/utils";
import { ItemProps } from "@/utils/restaurant";
import Image from "next/image";
import Link from "next/link";
import { randomUUID } from "node:crypto";

interface RestaurantPageMenuItemProps {
  item: ItemProps;
}

export function RestaurantPageMenuItem(props: RestaurantPageMenuItemProps) {
  const { item } = props;

  const {
    id,
    name,
    description,
    price,
    originalPrice,
    isVegetarian,
    isPromotion,
  } = item;

  return (
    <Link
      href={`/restaurants/${randomUUID()}/products/${id}`}
      key={id}
      className="xs:gap-4 focus-visible:border-ring flex justify-between gap-2 px-6 py-3 outline-0 hover:bg-neutral-100 focus-visible:ring-[2px] focus-visible:ring-purple-400/50 md:px-6"
    >
      <span className="flex flex-1 flex-col items-start">
        <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
          {name}
          {isVegetarian && (
            <span className="max-w-4 text-base md:max-w-6 md:text-xl">
              <Image
                src="/assets/icons/vegetarian.svg"
                alt=""
                width={24}
                height={24}
              />
            </span>
          )}
        </p>
        <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
          {description}
        </p>
      </span>
      <span className="flex flex-col items-end">
        {originalPrice && (
          <span className="text-xs font-bold text-neutral-500 line-through">
            {originalPrice}
          </span>
        )}
        <span
          className={cn(
            "inline-flex gap-[2px] text-sm font-bold",
            isPromotion ? "text-other-green-500" : "text-purple-500",
          )}
        >
          {isPromotion && (
            <Image
              src="/assets/icons/badge-dolar.svg"
              alt=""
              width={16}
              height={16}
            />
          )}
          {price}
        </span>
      </span>
    </Link>
  );
}
