"use client";
import { useCheckout } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";

interface ProductPagePriceProps {
  product: ProductProps;
}

export function ProductPagePrice(props: ProductPagePriceProps) {
  const { product } = props;
  const { getProductById } = useCheckout();

  const checkoutProduct = getProductById(product.id);
  const price = checkoutProduct?.price;

  if (!checkoutProduct) {
    return `R$ ${price?.toFixed(2)}`;
  }

  const totalPrice = checkoutProduct?.price * checkoutProduct?.quantity;

  return `R$ ${totalPrice.toFixed(2)}`;
}
