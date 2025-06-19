import { ProductProps } from "@/utils/restaurant";

export function useCheckoutPricing() {
  const getCheckoutTotalPrice = (checkoutProduct: ProductProps) => {
    if (checkoutProduct.additionals.length === 0) {
      return checkoutProduct.price * checkoutProduct.quantity;
    }

    const total = checkoutProduct.additionals.reduce((acc, additional) => {
      const additionalPrice = additional.options.reduce((acc, option) => {
        if (option.price === 0) {
          return acc;
        }

        const isPromotion = option.discount && option.discount > 0;
        const optionPrice = isPromotion
          ? option.price - option.discount
          : option.price;

        return acc + optionPrice * option.quantity * checkoutProduct.quantity;
      }, 0);

      return acc + additionalPrice;
    }, 0);

    return total + checkoutProduct.price * checkoutProduct.quantity;
  };

  return {
    getCheckoutTotalPrice,
  };
} 