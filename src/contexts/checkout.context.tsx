"use client";
import {
  CheckoutItemProps,
  CheckoutProps,
  ItemProps,
  RestaurantData,
  SizeProps,
} from "@/utils/restaurant";
import React, { ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface CheckoutContext {
  checkout: CheckoutProps | null;
  handleAddItem: (props: HandleAddItemProps) => void;
  getItem: (itemId: string) => CheckoutItemProps | undefined;
  handleDecreaseItem: (itemId: string) => void;
  handleRemoveItem: (itemId: string) => void;
  handleSelectSize: (itemId: ItemProps, size: SizeProps) => void;
}

const CheckoutContext = React.createContext<CheckoutContext>(
  {} as CheckoutContext,
);

interface CheckoutProviderProps {
  children: ReactNode;
  restaurantData?: RestaurantData;
}

interface HandleAddItemProps {
  restaurantId: string;
  item: ItemProps;
}

function createCheckoutItem(
  item: ItemProps,
  size: SizeProps,
): CheckoutItemProps {
  const sizeSelected = item.sizes.find((sizeItem) => sizeItem.size === size);

  return {
    ...item,
    quantity: 1,
    size,
    price: sizeSelected?.price || sizeSelected?.originalPrice || 0,
  };
}

export function CheckoutProvider(props: CheckoutProviderProps) {
  const { children } = props;
  const [checkout, setCheckout] = React.useState<CheckoutProps | null>(null);

  function getItem(itemId: string) {
    return checkout?.items.find((item) => item.id === itemId);
  }


  function updateCheckoutItems(item: CheckoutItemProps) {
    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      const newItems = prevState.items.map((checkoutItem) => {
        if (checkoutItem.id === item.id) {
          return { ...checkoutItem, quantity: checkoutItem.quantity + 1 };
        }

        return checkoutItem;
      });

      return { ...prevState, items: newItems };
    });
  }

  function handleAddItem(props: HandleAddItemProps) {
    const { restaurantId, item } = props;

    if (!checkout) {
      setCheckout({
        id: uuid(),
        restaurantId,
        items: [
          {
            ...item,
            quantity: 1,
            size: item.sizes[0].size,
            price: item.sizes[0].price || item.sizes[0].originalPrice,
          },
        ],
      });

      return;
    }

    const itemAlreadyExists = checkout.items.find(
      (checkoutItem) => checkoutItem.id === item.id,
    );

    if (!itemAlreadyExists) {
      setCheckout((prevState) => {
        if (!prevState) {
          return prevState;
        }

        return {
          ...prevState,
          items: [
            ...prevState.items,
            {
              ...item,
              quantity: 1,
              size: item.sizes[0].size,
              price: item.sizes[0].price || item.sizes[0].originalPrice,
            },
          ],
        };
      });

      return;
    }

    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      const newItems = prevState.items.map((checkoutItem) => {
        if (checkoutItem.id === item.id) {
          return { ...checkoutItem, quantity: checkoutItem.quantity + 1 };
        }

        return checkoutItem;
      });

      return { ...prevState, items: newItems };
    });
  }

  function handleDecreaseItem(itemId: string) {
    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      const newItems = prevState.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });

      return { ...prevState, items: newItems };
    });
  }

  function handleRemoveItem(itemId: string) {
    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      const newItems = prevState.items.filter((item) => item.id !== itemId);

      return { ...prevState, items: newItems };
    });
  }

  function handleSelectSize(product: ItemProps, size: SizeProps) {
    if (!checkout) {
      setCheckout({
        id: uuid(),
        restaurantId: product.restaurantId,
        items: [
          {
            ...product,
            quantity: 1,
            size,
            price:
              product.sizes.find((sizeItem) => sizeItem.size === size)?.price ||
              product.sizes.find((sizeItem) => sizeItem.size === size)
                ?.originalPrice ||
              0,
          },
        ],
      });

      return;
    }

    const itemAlreadyExists = checkout.items.find(
      (checkoutItem) => checkoutItem.id === product.id,
    );

    if (!itemAlreadyExists) {
      setCheckout((prevState) => {
        if (!prevState) {
          return prevState;
        }

        return {
          ...prevState,
          items: [
            ...prevState.items,
            {
              ...product,
              quantity: 1,
              size,
              price:
                product.sizes.find((sizeItem) => sizeItem.size === size)
                  ?.price ||
                product.sizes.find((sizeItem) => sizeItem.size === size)
                  ?.originalPrice ||
                0,
            },
          ],
        };
      });
    }

    setCheckout((prevState) => {
      if (!prevState) {
        console.log("prevState is null");
        return prevState;
      }

      const newItems = prevState.items.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            size,
            price:
              product.sizes.find((sizeItem) => sizeItem.size === size)?.price ||
              product.sizes.find((sizeItem) => sizeItem.size === size)
                ?.originalPrice ||
              0,
          };
        }

        return item;
      });

      return { ...prevState, items: newItems };
    });
  }

  React.useEffect(() => {
    console.log(checkout);
  }, [checkout]);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        getItem,
        handleAddItem,
        handleDecreaseItem,
        handleRemoveItem,
        handleSelectSize,
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
