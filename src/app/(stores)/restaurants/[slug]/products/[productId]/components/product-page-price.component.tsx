"use client";
import { useCheckout } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";

interface ProductPagePriceProps {
  product: ProductProps;
}

export function ProductPagePrice(props: ProductPagePriceProps) {
  const { product } = props;
  const { getCheckoutProductById, getCheckoutTotalPrice } = useCheckout();

  const checkoutProduct = getCheckoutProductById(product.id);

  if (!checkoutProduct) {
    return (
      <span className="text-sm font-bold text-neutral-700">
        R$ {product.price.toFixed(2)}
      </span>
    );
  }

  return (
    <span className="text-sm font-bold text-neutral-700">
      R$ {getCheckoutTotalPrice(checkoutProduct).toFixed(2)}
    </span>
  );
}
