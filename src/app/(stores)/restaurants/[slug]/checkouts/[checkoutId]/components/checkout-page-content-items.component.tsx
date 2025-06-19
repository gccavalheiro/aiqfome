import { ProductPage } from "@/components/product-page";
import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CheckoutProps, RestaurantProps } from "@/utils/restaurant";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { CheckoutPageItem } from "./checkout-page-item.component";

interface CheckoutPageContentItemsProps {
  restaurant: RestaurantProps;
  checkout: CheckoutProps;
  totalPrice: number;
}

export function CheckoutPageContentItems(props: CheckoutPageContentItemsProps) {
  const { restaurant, checkout, totalPrice } = props;

  return (
    <>
      <div className="container-default flex flex-col gap-6 py-4">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href="/"
                className="underline-offset-2 hover:underline"
              >
                início
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href={`/restaurants/${restaurant.slug}`}
                className="lowercase underline-offset-2 hover:underline"
              >
                {restaurant?.name}
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>pedido</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <RestaurantCard.Image className="max-w-8 min-w-8 rounded-sm md:max-w-[4.5rem]">
              <Image
                src={restaurant?.logoUrl || "/assets/images/logo-loja-01.png"}
                alt={restaurant?.name ?? "Logo do restaurante"}
                width={100}
                height={100}
                className="object-cover"
              />
            </RestaurantCard.Image>

            <div className="flex flex-col">
              <h5 className="text-sm font-semibold text-neutral-500">
                seus itens em
              </h5>
              <h1 className="text-base font-bold text-neutral-900 md:text-3xl">
                {restaurant?.name}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {checkout.products.map((product) => (
              <div key={product.id} className="[&+&]:mt-4">
                <CheckoutPageItem product={product} slug={restaurant.slug} />
              </div>
            ))}
          </div>

          <div className="flex md:w-fit">
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/restaurants/${restaurant.slug}`}>
                <Icon icon={faPlus} size={16} />
                adicionar mais itens
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ProductPage.Action>
        <div className="container-default flex flex-col items-center justify-center gap-2 text-center text-purple-500">
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <div className="flex flex-1 flex-col items-start">
              <h6 className="text-sm: font-bold text-neutral-900 md:text-lg">
                total
              </h6>
              <h3 className="text-xl font-extrabold text-purple-500 md:text-2xl">
                R$ {totalPrice.toFixed(2)}
              </h3>
            </div>

            <Button size="lg" className="xs:w-fit w-full" asChild>
              <Link href="/#">ir para pagamento</Link>
            </Button>
          </div>
        </div>
      </ProductPage.Action>
    </>
  );
}
