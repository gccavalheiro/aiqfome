"use client";
import { ProductUtils } from "@/utils/product";
import {
  CheckoutProps,
  ProductAdditionalOptionProps,
  ProductAdditionalProps,
  ProductProps,
} from "@/utils/restaurant";
import React, { ReactNode } from "react";

import { v4 as uuid } from "uuid";

interface CheckoutContext {
  checkout: CheckoutProps | null;
  getCheckoutProductById: (productId: string) => ProductProps | undefined;
  addProductToCheckout: (props: AddProductToCheckoutProps) => void;
  decreaseProductQuantity: (productId: string) => void;
  removeProductFromCheckout: (productId: string) => void;
  addAdditionalOptionToCheckout: (
    props: AddAdditionalOptionToCheckoutProps,
  ) => void;
  removeAdditionalOptionFromCheckout: (
    props: RemoveAdditionalOptionFromCheckoutProps,
  ) => void;
  addUpsellOptionToCheckout: (props: AddUpsellOptionToCheckoutProps) => void;
  removeUpsellOptionFromCheckout: (
    props: RemoveUpsellOptionFromCheckoutProps,
  ) => void;
  getCheckoutTotalPrice: (checkoutProduct: ProductProps) => number;
  addNotesToCheckout: (product: ProductProps, observation: string) => void;
  isLoading: boolean;
}

const CheckoutContext = React.createContext<CheckoutContext>(
  {} as CheckoutContext,
);

interface AddProductToCheckoutProps {
  restaurantId: string;
  product: ProductProps;
}

interface AddAdditionalOptionToCheckoutProps {
  product: ProductProps;
  additionalProduct: ProductAdditionalProps;
}

interface RemoveAdditionalOptionFromCheckoutProps {
  product: ProductProps;
  additionalProduct: ProductAdditionalProps;
}

interface AddUpsellOptionToCheckoutProps {
  product: ProductProps;
  additional: ProductAdditionalProps;
  option: ProductAdditionalOptionProps;
}

interface RemoveUpsellOptionFromCheckoutProps {
  product: ProductProps;
  additional: ProductAdditionalProps;
  option: ProductAdditionalOptionProps;
}

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider(props: CheckoutProviderProps) {
  const { children } = props;

  const [checkout, setCheckout] = React.useState<CheckoutProps | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const getCheckoutProductById = React.useCallback(
    (productId: string) => {
      return checkout?.products.find((product) => product.id === productId);
    },
    [checkout],
  );

  function createCheckout(props: CheckoutProps) {
    const { restaurantId, products } = props;

    const initialCheckout = {
      id: uuid(),
      restaurantId,
      products,
    };

    setCheckout(initialCheckout);
  }

  function addProductToCheckout(props: AddProductToCheckoutProps) {
    const { restaurantId, product } = props;

    const additionalMain = ProductUtils.getAdditionalMain(product.additionals);

    // se não houver checkout, cria um novo
    if (!checkout) {
      if (!additionalMain) {
        createCheckout({
          id: uuid(),
          restaurantId,
          products: [{ ...product, quantity: 1, additionals: [] }],
        });
        return;
      }

      createCheckout({
        id: uuid(),
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
  }

  function decreaseProductQuantity(productId: string) {
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
  }

  function removeProductFromCheckout(productId: string) {
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
  }

  function addAdditionalOptionToCheckout(
    props: AddAdditionalOptionToCheckoutProps,
  ) {
    const { product, additionalProduct } = props;

    if (!checkout) {
      createCheckout({
        id: uuid(),
        restaurantId: product.restaurantId,
        products: [
          { ...product, quantity: 1, additionals: [additionalProduct] },
        ],
      });
      return;
    }

    const productAlreadyInCheckout = checkout.products.find(
      (item) => item.id === product.id,
    );

    if (!productAlreadyInCheckout) {
      setCheckout((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          products: [
            ...prevState.products,
            { ...product, quantity: 1, additionals: [additionalProduct] },
          ],
        };
      });
      return;
    }

    // Verifica se o adicional já existe no produto
    const additionalOptionAlreadyInCheckout =
      productAlreadyInCheckout.additionals.find(
        (item) => item.id === additionalProduct.id,
      );

    if (!additionalOptionAlreadyInCheckout) {
      // Se o adicional não existe, adiciona ao produto existente
      setCheckout((prevState) => {
        if (!prevState) return prevState;

        const newProducts = prevState.products.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              additionals: [...item.additionals, additionalProduct],
            };
          }
          return item;
        });

        return {
          ...prevState,
          products: newProducts,
        };
      });
      return;
    }

    // Se o adicional já existe, atualiza as opções (para casos de múltipla seleção)
    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.map((item) => {
        if (item.id === product.id) {
          const updatedAdditionals = item.additionals.map((additional) => {
            if (additional.id === additionalProduct.id) {
              // Para adicionais do tipo 'multiple', adiciona a nova opção
              if (additional.type === "multiple") {
                return {
                  ...additional,
                  options: [
                    ...additional.options,
                    ...additionalProduct.options,
                  ],
                };
              }
              // Para outros tipos, substitui as opções
              return additionalProduct;
            }
            return additional;
          });

          return {
            ...item,
            additionals: updatedAdditionals,
          };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  }

  function removeAdditionalOptionFromCheckout(
    props: RemoveAdditionalOptionFromCheckoutProps,
  ) {
    const { product, additionalProduct } = props;

    if (!checkout) {
      return;
    }

    const productAlreadyInCheckout = checkout.products.find(
      (item) => item.id === product.id,
    );

    if (!productAlreadyInCheckout) {
      return;
    }

    // Verifica se o adicional existe no produto
    const additionalOptionAlreadyInCheckout =
      productAlreadyInCheckout.additionals.find(
        (item) => item.id === additionalProduct.id,
      );

    if (!additionalOptionAlreadyInCheckout) {
      return;
    }

    // Se o adicional existe, remove do produto existente
    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.map((item) => {
        if (item.id === product.id) {
          const updatedAdditionals = item.additionals
            .map((additional) => {
              if (additional.id === additionalProduct.id) {
                // Para adicionais do tipo 'multiple', remove apenas a opção específica
                if (additional.type === "multiple") {
                  const optionToRemove = additionalProduct.options[0];
                  const updatedOptions = additional.options.filter(
                    (option) => option.id !== optionToRemove.id,
                  );

                  // Se não há mais opções, remove o adicional inteiro
                  if (updatedOptions.length === 0) {
                    return null;
                  }

                  return {
                    ...additional,
                    options: updatedOptions,
                  };
                }
                // Para outros tipos, remove o adicional inteiro
                return null;
              }
              return additional;
            })
            .filter(
              (additional): additional is ProductAdditionalProps =>
                additional !== null,
            ); // Remove os nulls e faz cast

          return {
            ...item,
            additionals: updatedAdditionals,
          };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  }

  function addUpsellOptionToCheckout(props: AddUpsellOptionToCheckoutProps) {
    const { product, additional, option } = props;

    if (!checkout) {
      createCheckout({
        id: uuid(),
        restaurantId: product.restaurantId,
        products: [
          {
            ...product,
            quantity: 1,
            additionals: [
              {
                ...additional,
                options: [{ ...option, quantity: 1 }],
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

    if (!productAlreadyInCheckout) {
      setCheckout((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          products: [
            ...prevState.products,
            {
              ...product,
              quantity: 1,
              additionals: [
                {
                  ...additional,
                  options: [{ ...option, quantity: 1 }],
                },
              ],
            },
          ],
        };
      });
      return;
    }

    // Verifica se o adicional já existe no produto
    const additionalOptionAlreadyInCheckout =
      productAlreadyInCheckout.additionals.find(
        (item) => item.id === additional.id,
      );

    if (!additionalOptionAlreadyInCheckout) {
      // Se o adicional não existe, adiciona ao produto existente
      setCheckout((prevState) => {
        if (!prevState) return prevState;

        const newProducts = prevState.products.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              additionals: [
                ...item.additionals,
                {
                  ...additional,
                  options: [{ ...option, quantity: 1 }],
                },
              ],
            };
          }
          return item;
        });

        return {
          ...prevState,
          products: newProducts,
        };
      });
      return;
    }

    // Se o adicional já existe, verifica se a opção já existe
    const existingOption = additionalOptionAlreadyInCheckout.options.find(
      (opt) => opt.id === option.id,
    );

    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.map((item) => {
        if (item.id === product.id) {
          const updatedAdditionals = item.additionals.map((add) => {
            if (add.id === additional.id) {
              if (existingOption) {
                // Se a opção já existe, incrementa a quantidade
                const updatedOptions = add.options.map((opt) => {
                  if (opt.id === option.id) {
                    return { ...opt, quantity: opt.quantity + 1 };
                  }
                  return opt;
                });
                return { ...add, options: updatedOptions };
              } else {
                // Se a opção não existe, adiciona com quantidade 1
                return {
                  ...add,
                  options: [...add.options, { ...option, quantity: 1 }],
                };
              }
            }
            return add;
          });

          return {
            ...item,
            additionals: updatedAdditionals,
          };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  }

  function removeUpsellOptionFromCheckout(
    props: RemoveUpsellOptionFromCheckoutProps,
  ) {
    const { product, additional, option } = props;

    if (!checkout) {
      return;
    }

    const productAlreadyInCheckout = checkout.products.find(
      (item) => item.id === product.id,
    );

    if (!productAlreadyInCheckout) {
      return;
    }

    // Verifica se o adicional existe no produto
    const additionalOptionAlreadyInCheckout =
      productAlreadyInCheckout.additionals.find(
        (item) => item.id === additional.id,
      );

    if (!additionalOptionAlreadyInCheckout) {
      return;
    }

    // Verifica se a opção existe no adicional
    const existingOption = additionalOptionAlreadyInCheckout.options.find(
      (opt) => opt.id === option.id,
    );

    if (!existingOption || existingOption.quantity <= 0) {
      return;
    }

    // Se o adicional existe, remove uma unidade da opção
    setCheckout((prevState) => {
      if (!prevState) return prevState;

      const newProducts = prevState.products.map((item) => {
        if (item.id === product.id) {
          const updatedAdditionals = item.additionals
            .map((add) => {
              if (add.id === additional.id) {
                const updatedOptions = add.options
                  .map((opt) => {
                    if (opt.id === option.id) {
                      const newQuantity = opt.quantity - 1;
                      if (newQuantity <= 0) {
                        return null; // Remove a opção se quantidade for 0
                      }
                      return { ...opt, quantity: newQuantity };
                    }
                    return opt;
                  })
                  .filter(
                    (opt): opt is ProductAdditionalOptionProps => opt !== null,
                  );

                // Se não há mais opções, remove o adicional inteiro
                if (updatedOptions.length === 0) {
                  return null;
                }

                return { ...add, options: updatedOptions };
              }
              return add;
            })
            .filter((add): add is ProductAdditionalProps => add !== null);

          return {
            ...item,
            additionals: updatedAdditionals,
          };
        }
        return item;
      });

      return {
        ...prevState,
        products: newProducts,
      };
    });
  }

  function getCheckoutTotalPrice(checkoutProduct: ProductProps) {
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
  }

  function addNotesToCheckout(product: ProductProps, observation: string) {
    if (!checkout) {
      createCheckout({
        id: uuid(),
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
  }

  React.useEffect(() => {
    const checkoutInStorageJSON = localStorage.getItem("checkout");

    if (checkoutInStorageJSON) {
      const checkoutInStorage = JSON.parse(checkoutInStorageJSON);

      setCheckout(checkoutInStorage);
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (checkout) {
      console.log("checkout", checkout);
      localStorage.setItem("checkout", JSON.stringify(checkout));
    }
  }, [checkout]);

  return (
    <CheckoutContext.Provider
      value={{
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
