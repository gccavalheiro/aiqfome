import { ProductUtils } from "@/utils/product";
import { CheckoutProps, ProductProps } from "@/utils/restaurant";
import { useCallback } from "react";

interface AddProductToCheckoutProps {
  restaurantId: string;
  product: ProductProps;
}

export function useCheckoutProducts(
  checkout: CheckoutProps | null,
  setCheckout: React.Dispatch<React.SetStateAction<CheckoutProps | null>>,
  createCheckout: (props: CheckoutProps) => void,
) {
  const getCheckoutProductById = useCallback(
    (productId: string) => {
      return checkout?.products.find((product) => product.id === productId);
    },
    [checkout],
  );

  const addProductToCheckout = (props: AddProductToCheckoutProps) => {
    const { restaurantId, product } = props;

    const additionalMain = ProductUtils.getAdditionalMain(product.additionals);

    // se não houver checkout, cria um novo
    if (!checkout) {
      if (!additionalMain) {
        createCheckout({
          id: "",
          restaurantId,
          products: [{ ...product, quantity: 1, additionals: [] }],
        });
        return;
      }

      createCheckout({
        id: "",
        restaurantId,
        products: [
          {
            ...product,
            quantity: 1,
            additionals: [
              {
                ...additionalMain,
                main: true,
                options: [{ ...additionalMain.options[0], quantity: 1 }],
              },
            ],
          },
        ],
      });
      return;
    }

    const productAlreadyInCheckout = checkout.products.find(
      (item) => item.id === product.id,
    );

    // se o produto não estiver no checkout, adiciona um novo
    if (!productAlreadyInCheckout) {
      if (!additionalMain) {
        setCheckout((prevState) => {
          if (!prevState) {
            return prevState;
          }

          return {
            ...prevState,
            products: [
              ...prevState.products,
              { ...product, quantity: 1, additionals: [] },
            ],
          };
        });
        return;
      }

      setCheckout((prevState) => {
        if (!prevState) {
          return prevState;
        }

        return {
          ...prevState,
          products: [
            ...prevState.products,
            {
              ...product,
              quantity: 1,
              additionals: [
                {
                  ...additionalMain,
                  main: true,
                  options: [{ ...additionalMain.options[0], quantity: 1 }],
                },
              ],
            },
          ],
        };
      });

      return;
    }

    // se o produto já estiver no checkout, atualiza a quantidade
    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      const newProducts = prevState.products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  };

  const decreaseProductQuantity = (productId: string) => {
    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  };

  const removeProductFromCheckout = (productId: string) => {
    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.filter(
        (item) => item.id !== productId,
      );

      return {
        ...prevState,
        products: newProducts,
      };
    });
  };

  const addNotesToCheckout = (product: ProductProps, observation: string) => {
    if (!checkout) {
      createCheckout({
        id: "",
        restaurantId: product.restaurantId,
        products: [{ ...product, quantity: 1, additionals: [], observation }],
      });
      return;
    }

    setCheckout((prevState) => {
      if (!prevState) {
        return prevState;
      }

      return {
        ...prevState,
        products: prevState.products.map((product) =>
          product.id === product.id ? { ...product, observation } : product,
        ),
      };
    });
  };

  return {
    getCheckoutProductById,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
    addNotesToCheckout,
  };
} 