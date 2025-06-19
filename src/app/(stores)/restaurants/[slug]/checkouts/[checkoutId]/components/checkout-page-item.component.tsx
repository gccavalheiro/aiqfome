import { CheckoutItem } from "@/components/checkout/checkout-item";
import { Icon } from "@/components/ui/icon";
import { ProductProps } from "@/utils/restaurant";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { CheckoutPageItemQuantityControls } from "./checkout-page-item-quantity-controls.component";

interface CheckoutPageItemProps {
  product: ProductProps;
  slug: string;
}

export function CheckoutPageItem(props: CheckoutPageItemProps) {
  const { product, slug } = props;
  const { id, name } = product;

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
          <CheckoutPageItemQuantityControls product={product} />
        </div>
      </CheckoutItem.Header>

      {product.additionals.map((additional) => (
        <CheckoutItem.Resume key={additional.id}>
          <CheckoutItem.ResumeHeader>
            {additional.title}
          </CheckoutItem.ResumeHeader>
          <CheckoutItem.ResumeContent>
            {additional.options.map((option) => {
              const hasDiscount = option.discount && option.discount > 0;
              const priceWithDiscount = hasDiscount
                ? (option.price - option.discount) * option.quantity
                : option.price * option.quantity;

              return (
                <p key={option.id} className="flex items-center">
                  {option.quantity > 1 && (
                    <span className="mr-1">{option.quantity}x</span>
                  )}
                  <span>{option.title}</span>
                  {option.price > 0 && (
                    <span className="ml-2 font-bold text-teal-400">
                      +R${" "}
                      {(hasDiscount
                        ? priceWithDiscount
                        : option.price * option.quantity
                      ).toFixed(2)}
                    </span>
                  )}
                </p>
              );
            })}
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
