import { CheckoutProps, RestaurantProps } from "@/utils/restaurant";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

interface UseCheckoutStateProps {
  restaurant: RestaurantProps;
}

export function useCheckoutState(props: UseCheckoutStateProps) {
  const { restaurant } = props;

  const [checkout, setCheckout] = useState<CheckoutProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Carrega o checkout do localStorage na inicialização
  React.useEffect(() => {
    const checkoutInStorageJSON = localStorage.getItem("checkout");

    if (checkoutInStorageJSON) {
      const checkoutInStorage = JSON.parse(checkoutInStorageJSON);
      setCheckout(checkoutInStorage);
    }

    setIsLoading(false);
  }, []);

  // Salva o checkout no localStorage sempre que mudar
  React.useEffect(() => {
    if (checkout) {
      localStorage.setItem("checkout", JSON.stringify(checkout));
    }
  }, [checkout]);

  React.useEffect(() => {
    if (checkout?.restaurantId !== restaurant.id) {
      setCheckout(null);
    }
  }, [checkout, restaurant]);

  const createCheckout = (props: CheckoutProps) => {
    const { restaurantId, products } = props;

    const initialCheckout = {
      id: uuid(),
      restaurantId,
      products,
    };

    setCheckout(initialCheckout);
  };

  return {
    checkout,
    setCheckout,
    isLoading,
    createCheckout,
  };
}
