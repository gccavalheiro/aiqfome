"use client";
import { CheckoutItem } from "@/components/checkout/checkout-item";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckout } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";
import {
  faMinus,
  faPencilAlt,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

interface CheckoutPageItemProps {
  product: ProductProps;
  slug: string;
}

export function CheckoutPageItem(props: CheckoutPageItemProps) {
  const { product, slug } = props;
  const { id, name, quantity } = product;
  const {
    getCheckoutTotalPrice,
    addProductToCheckout,
    decreaseProductQuantity,
    removeProductFromCheckout,
  } = useCheckout();

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
    <CheckoutItem.Root key={id}>
      <CheckoutItem.EditButton asChild>
        <Link href={`/restaurants/${slug}/products/${id}`}>
          <Icon icon={faPencilAlt} size={12} />
          editar
        </Link>
      </CheckoutItem.EditButton>

      <CheckoutItem.Header>
        <CheckoutItem.Title>{name}</CheckoutItem.Title>
        <div className="flex justify-between">
          <CheckoutItem.Price>R$ {totalPrice.toFixed(2)}</CheckoutItem.Price>
          <CheckoutItem.Quantity>
            {quantity > 1 ? (
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
                <Icon icon={faTrashAlt} size={20} />
              </Button>
            )}

            <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
              {quantity}
            </span>

            <Button
              variant="ghost"
              className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
              onClick={handleIncreaseQuantity}
            >
              <Icon icon={faPlus} size={14} />
            </Button>
          </CheckoutItem.Quantity>
        </div>
      </CheckoutItem.Header>

      {product.additionals.map((additional) => (
        <CheckoutItem.Resume key={additional.id}>
          <CheckoutItem.ResumeHeader>
            {additional.title}
          </CheckoutItem.ResumeHeader>
          <CheckoutItem.ResumeContent>
            {additional.options.map((option) => (
              <p key={option.id} className="flex items-center gap-2">
                {option.title}{" "}
                {option.price > 0 && (
                  <span className="font-bold text-teal-400">
                    +R$ {option.price.toFixed(2)}
                  </span>
                )}
              </p>
            ))}
          </CheckoutItem.ResumeContent>
        </CheckoutItem.Resume>
      ))}

      {product.observation && (
        <CheckoutItem.Observation>
          <p className="text-xs font-semibold text-neutral-700">
            <span className="font-bold">observação:</span> {product.observation}
          </p>
        </CheckoutItem.Observation>
      )}
    </CheckoutItem.Root>
  );
}
