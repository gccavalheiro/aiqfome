"use client";
import { RadioGroup } from "@/components/ui/radio-group";
import { useCheckout } from "@/contexts/checkout.context";
import { ProductAdditionalProps, ProductProps } from "@/utils/restaurant";

interface ProductPageUniqueOptionsProps {
  children: React.ReactNode;
  product: ProductProps;
  additional: ProductAdditionalProps;
}

export function ProductPageUniqueOptions(props: ProductPageUniqueOptionsProps) {
  const { children, product, additional } = props;

  const { addAdditionalOptionToCheckout, getCheckoutProductById } =
    useCheckout();

  const checkoutProduct = getCheckoutProductById(product.id);
  const selectedOption = checkoutProduct?.additionals.find(
    (add) => add.id === additional.id,
  )?.options[0];

  function handleChange(value: string) {
    const additionalProduct = additional.options.find(
      (product) => product.id === value,
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
  }

  return (
    <RadioGroup.Root
      value={selectedOption?.id || ""}
      onValueChange={handleChange}
    >
      {children}
    </RadioGroup.Root>
  );
}
