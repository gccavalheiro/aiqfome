"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckoutContext } from "@/contexts/checkout.context";
import {
  ProductAdditionalOptionProps,
  ProductAdditionalProps,
  ProductProps,
} from "@/utils/restaurant";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ProductPageUpsellOptionsProps {
  product: ProductProps;
  additional: ProductAdditionalProps;
  option: ProductAdditionalOptionProps;
}

export function ProductPageUpsellOptions(props: ProductPageUpsellOptionsProps) {
  const { additional, product, option } = props;

  const { addUpsellOptionToCheckout, removeUpsellOptionFromCheckout } =
    useCheckoutContext();

  // Busca a quantidade atual da opção no checkout
  const checkoutProduct = useCheckoutContext().getCheckoutProductById(
    product.id,
  );
  const currentAdditional = checkoutProduct?.additionals.find(
    (add) => add.id === additional.id,
  );
  const currentOption = currentAdditional?.options.find(
    (opt) => opt.id === option.id,
  );
  const currentQuantity = currentOption?.quantity || 0;

  function handleChange(increase: boolean) {
    if (increase) {
      // Adiciona a opção ao checkout
      addUpsellOptionToCheckout({
        product,
        additional,
        option,
      });
    } else {
      // Remove a opção do checkout
      removeUpsellOptionFromCheckout({
        product,
        additional,
        option,
      });
    }
  }

  return (
    <>
      <div className="flex w-fit items-center justify-between gap-2">
        <Button
          onClick={() => handleChange(false)}
          variant="ghost"
          disabled={currentQuantity === 0}
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400 disabled:border-neutral-100"
        >
          <Icon icon={faMinus} size={14} />
        </Button>
        <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
          {currentQuantity}
        </span>
        <Button
          onClick={() => handleChange(true)}
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
    </>
  );
}
