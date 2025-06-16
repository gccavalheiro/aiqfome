import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckoutPageItem } from "./components/checkout-page-item.component";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const checkoutItems = [
  {
    id: "1",
    name: "Califórnia",
    price: 13.99,
    quantity: 0,
  },
  {
    id: "2",
    name: "Temaki Filadélfia",
    price: 14.0,
    quantity: 0,
  },
  {
    id: "3",
    name: "Temaki Mix",
    price: 22.0,
    quantity: 0,
  },
  {
    id: "4",
    name: "Coca-cola lata",
    price: 10.0,
    quantity: 0,
  },
];

interface CheckoutPageProps {
  params: {
    checkoutId: string;
  };
}

export default function Checkout(props: CheckoutPageProps) {
  const { checkoutId } = props.params;

  return (
    <div className="relative">
      <div className="container-default flex flex-col gap-6 py-4">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Início</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
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
              alt=""
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
              Matsuri Concept
            </h1>
          </div>
        </div>

        {checkoutItems.map((item) => (
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
                R$ 100,00
              </h3>
            </div>

            <Button size="lg" className="xs:w-fit w-full" asChild>
              <Link href={`/checkouts/4d29fb5c-5a61-4b9c-b6ed-3ec4d993d98b`}>
                ir para pagamento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
