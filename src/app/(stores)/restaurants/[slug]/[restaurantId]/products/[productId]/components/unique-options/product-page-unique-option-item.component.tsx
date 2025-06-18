import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ProductAdditionalOptionProps } from "@/utils/restaurant";

import Image from "next/image";

interface ProductPageUniqueOptionItemProps {
  option: ProductAdditionalOptionProps;
}

export function ProductPageUniqueOptionItem(
  props: ProductPageUniqueOptionItemProps,
) {
  const { option } = props;

  const isPromotion = option.discount > 0;

  const currentPrice = isPromotion
    ? option.price - option.discount
    : option.price;

  return (
    <label
      htmlFor={option.id}
      key={option.id}
      className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
    >
      <div className="flex items-center gap-2">
        <RadioGroup.Item value={option.id} id={option.id} />

        {isPromotion && (
          <Image
            src="/assets/icons/badge-dolar.svg"
            alt="Valor promocional"
            width={20}
            height={20}
            className="h-auto w-auto"
          />
        )}

        <span className="text-sm font-normal">{option.title}</span>
      </div>
      <div className="flex flex-wrap items-baseline gap-1 text-right">
        {isPromotion && (
          <span className="text-xs font-bold text-neutral-500">
            de R$ {option.price.toFixed(2)} por
          </span>
        )}
        <span
          className={cn(
            "text-sm font-bold",
            isPromotion ? "text-other-green-500" : "text-purple-500",
          )}
        >
          R$ {currentPrice.toFixed(2)}
        </span>
      </div>
    </label>
  );
}
