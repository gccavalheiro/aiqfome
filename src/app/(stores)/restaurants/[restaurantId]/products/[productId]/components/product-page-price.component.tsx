"use client";
import { useCheckout } from "@/contexts/checkout.context";
import { ItemProps } from "@/utils/restaurant";

interface ProductPagePriceProps {
  product: ItemProps;
}

export function ProductPagePrice(props: ProductPagePriceProps) {
  const { product } = props;
  const { getItem } = useCheckout();

  const checkoutItem = getItem(product.id);
  const selectedSize = checkoutItem?.size || product.sizes[0].size;
  const sizePrice = product.sizes.find((size) => size.size === selectedSize);
  const price = sizePrice?.price || sizePrice?.originalPrice;

  if (!checkoutItem) {
    return `R$ ${price?.toFixed(2)}`;
  }

  const totalPrice = checkoutItem?.price * checkoutItem?.quantity;

  return `R$ ${totalPrice.toFixed(2)}`;
}
