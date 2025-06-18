"use client";
import { CheckoutProps, ProductProps } from "@/utils/restaurant";
import React, { ReactNode } from "react";

interface CheckoutContext {
  checkout: CheckoutProps | null;
  getProductById: (productId: string) => ProductProps | undefined;
}

const CheckoutContext = React.createContext<CheckoutContext>(
  {} as CheckoutContext,
);

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider(props: CheckoutProviderProps) {
  const { children } = props;

  const [checkout, setCheckout] = React.useState<CheckoutProps | null>(null);

  const getProductById = React.useCallback(
    (productId: string) => {
      return checkout?.products.find((product) => product.id === productId);
    },
    [checkout],
  );

  React.useEffect(() => {
    console.log("checkout", checkout);
  }, [checkout]);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        getProductById,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = React.useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout context doesn't have a provider");
  }

  return context;
}
