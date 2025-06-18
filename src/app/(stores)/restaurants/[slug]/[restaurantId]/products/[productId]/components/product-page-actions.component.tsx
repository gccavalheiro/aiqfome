"use client";

import { ProductPage } from "@/components/product-page";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useCheckout } from "@/contexts/checkout.context";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ProductPageActionsProps {
  productId: string;
}

export function ProductPageActions(props: ProductPageActionsProps) {
  const { productId } = props;

  const { checkout, getProductById } = useCheckout();

  const product = getProductById(productId);

  return checkout?.products && checkout.products.length > 0 ? (
    <ProductPage.Action>
      <div className="container-default flex lg:justify-end">
        <Button
          className="group w-full min-w-[17rem] gap-2 lg:w-fit"
          size="lg"
          asChild
        >
          <Link
            href={`/restaurants/${product?.restaurantId}/checkouts/54a5068d-3e8f-4ee3-98f7-bd24bf34598d`}
          >
            <Icon icon={faCartShopping} />
            <span>ver ticket</span>
            <span className="text-neutral-0 rounded-sm bg-purple-700 px-2.5 py-1 text-sm font-bold group-hover:bg-purple-500">
              {product?.quantity}
            </span>
          </Link>
        </Button>
      </div>
    </ProductPage.Action>
  ) : null;
}
