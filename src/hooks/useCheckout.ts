import { useCheckoutState } from "./useCheckoutState";
import { useCheckoutProducts } from "./useCheckoutProducts";
import { useCheckoutAdditionals } from "./useCheckoutAdditionals";
import { useCheckoutPricing } from "./useCheckoutPricing";

export function useCheckout() {
  const { checkout, setCheckout, isLoading, createCheckout } = useCheckoutState();
  
  const {
    getCheckoutProductById,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
    addNotesToCheckout,
  } = useCheckoutProducts(checkout, setCheckout, createCheckout);

  const {
    addAdditionalOptionToCheckout,
    removeAdditionalOptionFromCheckout,
    addUpsellOptionToCheckout,
    removeUpsellOptionFromCheckout,
  } = useCheckoutAdditionals(checkout, setCheckout, createCheckout);

  const { getCheckoutTotalPrice } = useCheckoutPricing();

  return {
    checkout,
    isLoading,
    getCheckoutProductById,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
    addAdditionalOptionToCheckout,
    removeAdditionalOptionFromCheckout,
    addUpsellOptionToCheckout,
    removeUpsellOptionFromCheckout,
    getCheckoutTotalPrice,
    addNotesToCheckout,
  };
} 