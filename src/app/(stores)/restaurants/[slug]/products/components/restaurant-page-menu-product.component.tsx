import { cn } from "@/lib/utils";
import { ProductUtils } from "@/utils/product";
import { ProductProps } from "@/utils/restaurant";

import Image from "next/image";
import Link from "next/link";

interface RestaurantPageMenuProps {
  restaurantId: string;
  product: ProductProps;
  slug: string;
  isPromotion: boolean;
}

export function RestaurantPageMenuProduct(props: RestaurantPageMenuProps) {
  const { product, slug, isPromotion } = props;
  const { id, name, description, isVegetarian, isSpicy } = product;

  const additionalOption = ProductUtils.getAdditionalMainFirstOption(product.additionals);

  const currentPrice = additionalOption
    ? additionalOption.price - additionalOption.discount
    : product.price - product.discount;

  return (
    <Link
      href={`/restaurants/${slug}/products/${id}`}
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
                className="h-auto w-auto"
              />
            </span>
          )}
          {isSpicy && (
            <span className="max-w-4 text-base md:max-w-6 md:text-xl">
              <Image
                src="/assets/icons/pepper.svg"
                alt=""
                width={24}
                height={24}
                className="h-auto w-auto"
              />
            </span>
          )}
        </p>
        <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
          {description}
        </p>
      </span>
      <span className="flex flex-col items-end">
        {isPromotion && (
          <span className="text-xs font-bold text-neutral-500 line-through">
            R$ {additionalOption?.price.toFixed(2) || product.price.toFixed(2)}
          </span>
        )}
        <span
          className={cn(
            "inline-flex items-center gap-[2px] text-sm font-bold",
            isPromotion ? "text-other-green-500" : "text-purple-500",
          )}
        >
          {isPromotion && (
            <Image
              src="/assets/icons/badge-dolar.svg"
              alt=""
              width={16}
              height={16}
              className="h-auto w-auto"
            />
          )}
          R$ {currentPrice.toFixed(2)}
        </span>
      </span>
    </Link>
  );
}
