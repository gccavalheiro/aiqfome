"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useCheckout } from "@/contexts/checkout.context";
import {
  ProductAdditionalOptionProps,
  ProductAdditionalProps,
  ProductProps,
} from "@/utils/restaurant";

interface ProductPageMultipleOptionsProps {
  option: ProductAdditionalOptionProps;
  product: ProductProps;
  additional: ProductAdditionalProps;
}

export function ProductPageMultipleOptions(
  props: ProductPageMultipleOptionsProps,
) {
  const { option, product, additional } = props;

  const {
    addAdditionalOptionToCheckout,
    removeAdditionalOptionFromCheckout,
    getCheckoutProductById,
  } = useCheckout();

  const checkoutProduct = getCheckoutProductById(product.id);
  const isSelected =
    checkoutProduct?.additionals
      .find((add) => add.id === additional.id)
      ?.options.some((opt) => opt.id === option.id) || false;

  function handleChange(value: boolean) {
    if (value) {
      const additionalProduct = additional.options.find(
        (product) => product.id === option.id,
      );

      if (additionalProduct) {
        addAdditionalOptionToCheckout({
          product,
          additionalProduct: {
            ...additional,
            options: [additionalProduct],
          },
        });
      }
    } else {
      removeAdditionalOptionFromCheckout({
        product,
        additionalProduct: {
          ...additional,
          options: [option],
        },
      });
    }
  }

  const isDisabled =
    checkoutProduct?.additionals.find((add) => add.id === additional.id)
      ?.options.length === additional.quantity;

  return (
    <label
      className="flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50"
      htmlFor={option.id}
    >
      <Checkbox
        id={option.id}
        value={option.id}
        checked={isSelected}
        onCheckedChange={handleChange}
        disabled={isDisabled && !isSelected}
      />
      <span className="text-sm text-neutral-500">{option.title}</span>
      {option.price > 0 && (
        <span className="ml-auto text-sm font-bold text-purple-500">
          R$ {option.price.toFixed(2)}
        </span>
      )}
    </label>
  );
}
