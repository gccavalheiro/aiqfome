"use client";
import React, { ReactNode } from "react";
import { useCheckout } from "@/hooks";

interface CheckoutContext {
  checkout: ReturnType<typeof useCheckout>["checkout"];
  getCheckoutProductById: ReturnType<
    typeof useCheckout
  >["getCheckoutProductById"];
  addProductToCheckout: ReturnType<typeof useCheckout>["addProductToCheckout"];
  decreaseProductQuantity: ReturnType<
    typeof useCheckout
  >["decreaseProductQuantity"];
  removeProductFromCheckout: ReturnType<
    typeof useCheckout
  >["removeProductFromCheckout"];
  addAdditionalOptionToCheckout: ReturnType<
    typeof useCheckout
  >["addAdditionalOptionToCheckout"];
  removeAdditionalOptionFromCheckout: ReturnType<
    typeof useCheckout
  >["removeAdditionalOptionFromCheckout"];
  addUpsellOptionToCheckout: ReturnType<
    typeof useCheckout
  >["addUpsellOptionToCheckout"];
  removeUpsellOptionFromCheckout: ReturnType<
    typeof useCheckout
  >["removeUpsellOptionFromCheckout"];
  getCheckoutTotalPrice: ReturnType<
    typeof useCheckout
  >["getCheckoutTotalPrice"];
  addNotesToCheckout: ReturnType<typeof useCheckout>["addNotesToCheckout"];
  isLoading: ReturnType<typeof useCheckout>["isLoading"];
}

const CheckoutContext = React.createContext<CheckoutContext>(
  {} as CheckoutContext,
);

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider(props: CheckoutProviderProps) {
  const { children } = props;

  const checkoutHook = useCheckout();

  return (
    <CheckoutContext.Provider value={checkoutHook}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckoutContext() {
  const context = React.useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckoutContext context doesn't have a provider");
  }

  return context;
}
