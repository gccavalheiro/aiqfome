"use client";

import { ProductPage } from "@/components/product-page";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { RestaurantProps } from "@/utils/restaurant";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface RestaurantPageActionsProps {
  restaurant: RestaurantProps;
}

export function RestaurantPageActions(props: RestaurantPageActionsProps) {
  const { restaurant } = props;
  const { getCheckoutTotalPrice, checkout } = useCheckoutContext();

  const totalPrice = checkout?.products.reduce((acc, product) => {
    return acc + getCheckoutTotalPrice(product);
  }, 0);

  return checkout?.products.length && checkout.products.length > 0 ? (
    <ProductPage.Action>
      <div className="container-default mt-auto flex flex-col items-center justify-center gap-2 text-center text-purple-500">
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <div className="flex flex-1 flex-col items-start">
            <h6 className="text-sm: font-bold text-neutral-900 md:text-lg">
              total
            </h6>
            <h3 className="text-xl font-extrabold text-purple-500 md:text-2xl">
              R$ {totalPrice?.toFixed(2)}
            </h3>
          </div>

          <Button size="lg" className="group xs:w-fit w-full" asChild>
            <Link
              href={`/restaurants/${restaurant.slug}/checkouts/54a5068d-3e8f-4ee3-98f7-bd24bf34598d`}
            >
              <Icon icon={faCartShopping} />
              <span>ver ticket</span>
              <span className="text-neutral-0 rounded-sm bg-purple-700 px-2.5 py-1 text-sm font-bold group-hover:bg-purple-500">
                {checkout?.products.length}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </ProductPage.Action>
  ) : null;
}
