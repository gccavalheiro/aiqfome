import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ItemSize, SizeProps } from "@/utils/restaurant";
import Image from "next/image";

interface ProductPageSizeItemProps {
  size: ItemSize;
}

const sizesMapper = {
  [SizeProps.SMALL]: "pequeno",
  [SizeProps.MEDIUM]: "médio",
  [SizeProps.LARGE]: "grande",
};

export function ProductPageSizeItem(props: ProductPageSizeItemProps) {
  const { size: sizeItem, } = props;

  const currentPrice = sizeItem.price || sizeItem.originalPrice;
  const isPromotion = sizeItem.price && sizeItem.price < sizeItem.originalPrice;

  return (
    <label
      htmlFor={sizeItem.size}
      key={sizeItem.size}
      className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
    >
      <div className="flex items-center gap-2">
        <RadioGroup.Item value={sizeItem.size} id={sizeItem.size} />

        {isPromotion && (
          <Image
            src="/assets/icons/badge-dolar.svg"
            alt="Valor promocional"
            width={20}
            height={20}
            className="h-auto w-auto"
          />
        )}

        <span className="text-sm font-normal">
          {sizesMapper[sizeItem.size]}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline gap-1 text-right">
        {isPromotion && (
          <span className="text-xs font-bold text-neutral-500">
            de R$ {sizeItem.originalPrice.toFixed(2)} por
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
