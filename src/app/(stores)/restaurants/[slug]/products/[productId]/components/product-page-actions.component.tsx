"use client";

import { ProductPage } from "@/components/product-page";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { ProductProps } from "@/utils/restaurant";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ProductPageActionsProps {
  product: ProductProps;
  slug: string;
}

export function ProductPageActions(props: ProductPageActionsProps) {
  const { product, slug } = props;

  const { checkout, getCheckoutProductById, getCheckoutTotalPrice } =
    useCheckoutContext();

  const mainPrice = product?.additionals.find((add) => add.main === true)
    ?.options[0].price;

  const checkoutProduct = getCheckoutProductById(product.id);

  const isDisabled = product.additionals
    .filter((add) => add.isRequired)
    .some((add) => {
      const additional = checkoutProduct?.additionals.find(
        (checkoutAdd) => checkoutAdd.id === add.id,
      );

      return !additional;
    });

  return checkout?.products &&
    checkout.products.length > 0 &&
    checkoutProduct ? (
    <ProductPage.Action>
      <div className="container-default mt-auto flex flex-col items-center justify-center gap-2 text-center text-purple-500">
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <div className="flex flex-1 flex-col items-start">
            <h6 className="text-sm: font-bold text-neutral-900 md:text-lg">
              subtotal
            </h6>
            <h3 className="text-xl font-extrabold text-purple-500 md:text-2xl">
              R${" "}
              {getCheckoutTotalPrice(checkoutProduct).toFixed(2) ||
                mainPrice?.toFixed(2)}
            </h3>
          </div>

          <Button
            size="lg"
            className="group xs:w-fit w-full"
            disabled={isDisabled}
            asChild
            aria-disabled={isDisabled}
          >
            <Link
              href={`/restaurants/${slug}/checkouts/54a5068d-3e8f-4ee3-98f7-bd24bf34598d`}
              className="disabled:pointer-events-none disabled:opacity-50"
            >
              <Icon icon={faCartShopping} />
              <span>ver ticket</span>
              <span className="text-neutral-0 rounded-sm bg-purple-700 px-2.5 py-1 text-sm font-bold group-hover:bg-purple-500">
                {checkoutProduct?.quantity}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </ProductPage.Action>
  ) : null;
}
