import { CheckoutProps, ProductAdditionalOptionProps, ProductAdditionalProps, ProductProps } from "@/utils/restaurant";

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

export function useCheckoutAdditionals(
  checkout: CheckoutProps | null,
  setCheckout: React.Dispatch<React.SetStateAction<CheckoutProps | null>>,
  createCheckout: (props: CheckoutProps) => void,
) {
  const addAdditionalOptionToCheckout = (
    props: AddAdditionalOptionToCheckoutProps,
  ) => {
    const { product, additionalProduct } = props;

    if (!checkout) {
      createCheckout({
        id: "",
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
  };

  const removeAdditionalOptionFromCheckout = (
    props: RemoveAdditionalOptionFromCheckoutProps,
  ) => {
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
            );

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
  };

  const addUpsellOptionToCheckout = (props: AddUpsellOptionToCheckoutProps) => {
    const { product, additional, option } = props;

    if (!checkout) {
      createCheckout({
        id: "",
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
  };

  const removeUpsellOptionFromCheckout = (
    props: RemoveUpsellOptionFromCheckoutProps,
  ) => {
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
  };

  return {
    addAdditionalOptionToCheckout,
    removeAdditionalOptionFromCheckout,
    addUpsellOptionToCheckout,
    removeUpsellOptionFromCheckout,
  };
} 