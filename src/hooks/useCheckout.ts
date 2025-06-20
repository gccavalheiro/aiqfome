import { RestaurantProps } from "@/utils/restaurant";
import { useCheckoutAdditionals } from "./useCheckoutAdditionals";
import { useCheckoutPricing } from "./useCheckoutPricing";
import { useCheckoutProducts } from "./useCheckoutProducts";
import { useCheckoutState } from "./useCheckoutState";

interface UseCheckoutProps {
  restaurant: RestaurantProps;
}

export function useCheckout(props: UseCheckoutProps) {
  const { restaurant } = props;

  const { checkout, setCheckout, isLoading, createCheckout } =
    useCheckoutState({ restaurant });

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
