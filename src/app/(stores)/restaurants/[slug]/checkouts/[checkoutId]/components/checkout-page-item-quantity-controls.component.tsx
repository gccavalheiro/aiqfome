"use client";
import { CheckoutItem } from "@/components/checkout/checkout-item";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

interface CheckoutPageItemQuantityControlsProps {
  product: ProductProps;
}

export function CheckoutPageItemQuantityControls(
  props: CheckoutPageItemQuantityControlsProps,
) {
  const { product } = props;

  const {
    getCheckoutTotalPrice,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
  } = useCheckoutContext();

  const totalPrice = getCheckoutTotalPrice(product);

  function handleIncreaseQuantity() {
    addProductToCheckout({
      restaurantId: product.restaurantId,
      product,
    });
  }

  function handleDecreaseQuantity() {
    decreaseProductQuantity(product.id);
  }

  function handleRemoveProduct() {
    removeProductFromCheckout(product.id);
  }

  return (
    <>
      <CheckoutItem.Price>R$ {totalPrice.toFixed(2)}</CheckoutItem.Price>
      <CheckoutItem.Quantity>
        {product.quantity > 1 ? (
          <Button
            onClick={handleDecreaseQuantity}
            variant="ghost"
            className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
          >
            <Icon icon={faMinus} size={14} />
          </Button>
        ) : (
          <Button
            onClick={handleRemoveProduct}
            variant="ghost"
            className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-transparent p-0 text-teal-400 transition-none hover:border-teal-400 hover:bg-teal-400"
          >
            <Icon icon={faTrashAlt} size={16} />
          </Button>
        )}

        <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
          {product.quantity}
        </span>

        <Button
          variant="ghost"
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
          onClick={handleIncreaseQuantity}
        >
          <Icon icon={faPlus} size={14} />
        </Button>
      </CheckoutItem.Quantity>
    </>
  );
}
