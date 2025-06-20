"use client";
import { NotFound } from "@/components/not-found";
import { Button } from "@/components/ui/button";
import { useCheckoutContext } from "@/contexts/checkout.context";
import { RestaurantProps } from "@/utils/restaurant";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { CheckoutPageContentItems } from "./checkout-page-content-items.component";

interface CheckoutContentProps {
  restaurant: RestaurantProps;
}

export function CheckoutPageContent(props: CheckoutContentProps) {
  const { restaurant } = props;
  const { checkout, isLoading, getCheckoutTotalPrice } = useCheckoutContext();

  React.useEffect(() => {
    if (checkout?.products.length === 0) {
      redirect(`/restaurants/${restaurant.slug}`);
    }
  }, [restaurant.slug, checkout?.products]);

  if (isLoading) {
    return (
      <div className="container-default py-8">
        <div className="flex animate-pulse flex-col gap-6">
          <div className="h-8 w-1/3 rounded bg-neutral-200" />
          <div className="flex flex-col gap-4">
            <div className="h-6 w-1/4 rounded bg-neutral-200" />
            <div className="h-20 w-full rounded bg-neutral-200" />
            <div className="h-20 w-full rounded bg-neutral-200" />
          </div>
          <div className="flex justify-end">
            <div className="h-10 w-32 rounded bg-neutral-200" />
          </div>
        </div>
      </div>
    );
  }

  if (!checkout) {
    return (
      <div className="container-default">
        <NotFound.Root>
          <NotFound.Icon icon={faCartShopping} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Checkout não encontrado</NotFound.Title>
            <Button asChild className="mt-3">
              <Link href="/">voltar para início</Link>
            </Button>
          </NotFound.Content>
        </NotFound.Root>
      </div>
    );
  }

  const totalPrice = checkout.products.reduce(
    (acc, product) => acc + getCheckoutTotalPrice(product),
    0,
  );

  return (
    <div className="relative flex flex-1 flex-col">
      <CheckoutPageContentItems
        restaurant={restaurant}
        checkout={checkout}
        totalPrice={totalPrice}
      />
    </div>
  );
}
