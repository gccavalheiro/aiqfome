import { Hero } from "@/components/hero";
import { ProductPage } from "@/components/product-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

import { Separator } from "@/components/ui/separator";
import { accompaniments, drinks, extras, utensils } from "@/utils/restaurant";

import { getProductByIdService } from "@/services/get-product-by-id-service";
import { getRestaurantByIdService } from "@/services/get-restaurants-service";
import Image from "next/image";
import Link from "next/link";
import { ProductPageAccompanimentItem } from "./components/product-page-accompaniment-item.component";
import { ProductPageDrinkItem } from "./components/product-page-drink-item.component";
import { ProductPageExtraItem } from "./components/product-page-extra-item.component";
import { ProductPageQuantityButtons } from "./components/product-page-quantity-buttons.component";
import { ProductPageUtensilItem } from "./components/product-page-utensil-item.component";
import { ProductPagePrice } from "./components/product-page-price.component";
import { ProductPageSizes } from "./components/product-page-sizes.component";

interface ProductProps {
  params: {
    restaurantId: string;
    productId: string;
  };
}

export default async function Product(props: ProductProps) {
  const { params } = props;

  const { restaurantId, productId } = await params;

  const restaurant = await getRestaurantByIdService(restaurantId);

  const product = await getProductByIdService({ productId, restaurantId });

  if (!restaurant || !product) {
    return <div>Produto não encontrado</div>;
  }

  const selectedSize = product.sizes[0];
  const currentPrice = selectedSize.price || selectedSize.originalPrice;

  return (
    <ProductPage.Root>
      <Hero.Root>
        <Image
          src="/assets/images/loja/item/main-image.jpg"
          alt="Hero"
          width={1200}
          height={400}
          className="h-auto max-h-[400px] w-full object-cover"
        />
      </Hero.Root>

      <ProductPage.Header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold text-neutral-700">
              {product.name}
            </h1>
            <p className="text-sm font-extrabold text-neutral-500">
              a partir de{" "}
              <span className="text-lg font-extrabold text-purple-500">
                R$ {currentPrice.toFixed(2)}
              </span>
            </p>
            <p className="text-sm font-semibold text-neutral-500">
              {product.description}
            </p>
          </div>

          <ProductPage.Quantity>
            <div className="flex w-full flex-col gap-1.5">
              <h2 className="text-base font-bold text-neutral-700">quantos?</h2>
              <p className="text-sm font-semibold text-neutral-500">
                total{" "}
                <span className="font-bold text-neutral-700">
                  <ProductPagePrice product={product} />
                </span>
              </p>
            </div>
            <div className="flex flex-1 flex-col items-end">
              <div className="flex w-fit items-center justify-between gap-2">
                <ProductPageQuantityButtons product={product} />
              </div>
            </div>
          </ProductPage.Quantity>
        </div>
      </ProductPage.Header>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {product.sizes.length > 0 && (
        <ProductPage.Section>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-neutral-900">
                qual o tamanho?
              </h2>
              <small className="text-xs font-bold text-neutral-500">
                escolha 1
              </small>
            </div>

            <Badge>obrigatório</Badge>
          </div>

          <ProductPageSizes product={product} />
        </ProductPage.Section>
      )}

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-neutral-900">
              acompanhamentos
            </h2>
            <small className="text-xs font-bold text-neutral-500">
              escolha 1 a 2
            </small>
          </div>

          <Badge>obrigatório</Badge>
        </div>

        <div className="flex flex-col">
          {accompaniments.map((option) => (
            <ProductPageAccompanimentItem
              key={option.id}
              id={option.id}
              label={option.label}
            />
          ))}
        </div>
      </ProductPage.Section>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-neutral-900">
              vai querer bebida?
            </h2>
            <small className="text-xs font-bold text-neutral-500">
              escolha quantos quiser
            </small>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {drinks.map((option) => (
            <ProductPageDrinkItem
              key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </ProductPage.Section>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-neutral-900">
              precisa de talher?
            </h2>
            <small className="text-xs font-bold text-neutral-500">
              escolha até 1
            </small>
          </div>
        </div>

        <RadioGroup.Root defaultValue="none">
          {utensils.map((option) => (
            <ProductPageUtensilItem
              key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
            />
          ))}
        </RadioGroup.Root>
      </ProductPage.Section>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-neutral-900">
              mais alguma coisa?
            </h2>
            <small className="text-xs font-bold text-neutral-500">
              escolha até 2
            </small>
          </div>
        </div>

        <div className="flex flex-col">
          {extras.map((option) => (
            <ProductPageExtraItem
              key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </ProductPage.Section>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <ProductPage.NotesTextArea />
      </ProductPage.Section>

      <ProductPage.Action>
        <div className="container-default flex lg:justify-end">
          <Button className="w-full min-w-[17rem] lg:w-fit" size="lg" asChild>
            <Link href={`/checkouts/4d29fb5c-5a61-4b9c-b6ed-3ec4d993d98b`}>
              ver ticket
            </Link>
          </Button>
        </div>
      </ProductPage.Action>
    </ProductPage.Root>
  );
}
