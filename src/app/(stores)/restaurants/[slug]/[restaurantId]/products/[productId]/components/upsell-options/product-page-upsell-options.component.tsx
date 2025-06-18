"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ProductAdditionalProps } from "@/utils/restaurant";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ProductPageUpsellOptionsProps {
  additional: ProductAdditionalProps;
}

export function ProductPageUpsellOptions(props: ProductPageUpsellOptionsProps) {
  const { additional } = props;

  return additional.options.map((option) => (
    <div
      className="flex flex-1 gap-3 rounded-sm p-2 hover:bg-neutral-50"
      key={option.id}
    >
      <div className="flex w-fit items-center justify-between gap-2">
        <Button
          onClick={() => console.log("remove")}
          variant="ghost"
          disabled={false}
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400 disabled:border-neutral-100"
        >
          <Icon icon={faMinus} size={14} />
        </Button>
        <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
          {option.quantity}
        </span>
        <Button
          onClick={() => console.log("add")}
          variant="ghost"
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
        >
          <Icon icon={faPlus} size={14} />
        </Button>
      </div>

      <span className="flex-1 text-sm leading-tight">{option.title}</span>

      <p className="ml-auto text-sm font-bold whitespace-nowrap text-purple-500">
        +R$ {option.price.toFixed(2)}
      </p>
    </div>
  ));
}
