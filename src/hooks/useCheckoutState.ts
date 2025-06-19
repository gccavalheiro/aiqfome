import { CheckoutProps } from "@/utils/restaurant";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export function useCheckoutState() {
  const [checkout, setCheckout] = useState<CheckoutProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Carrega o checkout do localStorage na inicialização
  useEffect(() => {
    const checkoutInStorageJSON = localStorage.getItem("checkout");

    if (checkoutInStorageJSON) {
      const checkoutInStorage = JSON.parse(checkoutInStorageJSON);
      setCheckout(checkoutInStorage);
    }

    setIsLoading(false);
  }, []);

  // Salva o checkout no localStorage sempre que mudar
  useEffect(() => {
    if (checkout) {
      
      localStorage.setItem("checkout", JSON.stringify(checkout));
    }
  }, [checkout]);

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