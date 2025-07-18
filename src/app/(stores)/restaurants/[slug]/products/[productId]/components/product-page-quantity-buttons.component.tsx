"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ProductPageQuantityButtonsProps {
  product: ProductProps;
}

export function ProductPageQuantityButtons(
  props: ProductPageQuantityButtonsProps,
) {
  const { product } = props;

  const {
    getCheckoutProductById,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
  } = useCheckoutContext();
  const checkoutProduct = getCheckoutProductById(product.id);

  const quantity = checkoutProduct?.quantity || 0;

  function handleIncrease() {
    addProductToCheckout({
      restaurantId: product.restaurantId,
      product,
    });
  }

  function handleDecrease() {
    decreaseProductQuantity(product.id);
  }

  function handleClear() {
    removeProductFromCheckout(product.id);
  }

  if (quantity === 0) {
    return (
      <Button onClick={handleIncrease} variant="default">
        adicionar
      </Button>
    );
  }

  return (
    <>
      {quantity > 1 ? (
        <Button
          onClick={handleDecrease}
          variant="ghost"
          className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
        >
          <Icon icon={faMinus} size={14} />
        </Button>
      ) : (
        <Button
          onClick={handleClear}
          variant="ghost"
          className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-transparent p-0 text-teal-400 transition-none hover:border-teal-400 hover:bg-teal-400"
        >
          <Icon icon={faTrashAlt} size={20} />
        </Button>
      )}

      <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
        {quantity}
      </span>

      <Button
        disabled={quantity === 99}
        onClick={handleIncrease}
        variant="ghost"
        className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
      >
        <Icon icon={faPlus} size={14} />
      </Button>
    </>
  );
}
