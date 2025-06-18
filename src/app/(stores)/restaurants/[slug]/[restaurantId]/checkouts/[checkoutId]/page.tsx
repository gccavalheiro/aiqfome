import { NotFound } from "@/components/not-found";
import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getCheckoutByIdService } from "@/services/checkout-service";
import { getRestaurantByIdService } from "@/services/restaurant-service";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { CheckoutPageItem } from "./components/checkout-page-item.component";

interface CheckoutPageProps {
  params: Promise<{
    checkoutId: string;
  }>;
}

export default async function Checkout(props: CheckoutPageProps) {
  const { params } = props;
  const { checkoutId } = await params;

  const checkout = await getCheckoutByIdService(checkoutId);

  if (!checkout) {
    return (
      <div className="container-default">
        <NotFound.Root>
          <NotFound.Icon icon={faCartShopping} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Checkout não encontrado</NotFound.Title>
            <Button asChild className="mt-3">
              <Link href="/">Voltar para início</Link>
            </Button>
          </NotFound.Content>
        </NotFound.Root>
      </div>
    );
  }

  const restaurant = await getRestaurantByIdService(checkout.restaurantId);

  const calculateTotal = checkout.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="relative">
      <div className="container-default flex flex-col gap-6 py-4">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href="/"
                className="underline-offset-2 hover:underline"
              >
                Início
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href={`/restaurants/${checkout.restaurantId}`}
                className="underline-offset-2 hover:underline"
              >
                {restaurant?.name}
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Pedido</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>

        <div className="flex items-center gap-2">
          <RestaurantCard.Image className="max-w-8 min-w-8 rounded-sm md:max-w-[4.5rem]">
            <Image
              src="/assets/images/logo-loja-01.png"
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

        {checkout?.items.map((item) => (
          <CheckoutPageItem key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-neutral-0 sticky bottom-0 mt-auto border-t py-6">
        <div className="container-default flex flex-col items-center justify-center gap-2 text-center text-purple-500">
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <div className="flex flex-1 flex-col items-start">
              <h6 className="text-sm: font-bold text-neutral-900 md:text-lg">
                subtotal
              </h6>
              <h3 className="text-xl font-extrabold text-purple-500 md:text-2xl">
                R$ {calculateTotal.toFixed(2)}
              </h3>
            </div>

            <Button size="lg" className="xs:w-fit w-full" asChild>
              <Link href="#">ir para pagamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
