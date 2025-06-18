import { Hero } from "@/components/hero";
import { ProductPage } from "@/components/product-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { NotFound } from "@/components/not-found";
import { getProductByIdService } from "@/services/product-service";
import { getRestaurantByIdService } from "@/services/restaurant-service";
import { ProductAdditionalProps } from "@/utils/restaurant";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ProductPageMultipleOptions } from "./components/multiple-options/product-page-multiple-options.component";
import { ProductPageUpsellOptions } from "./components/upsell-options/product-page-upsell-options.component";
import { ProductPageActions } from "./components/product-page-actions.component";
import { ProductPagePrice } from "./components/product-page-price.component";
import { ProductPageQuantityButtons } from "./components/product-page-quantity-buttons.component";
import { ProductPageUniqueOptions } from "./components/unique-options/product-page-unique-options.component";
import React from "react";

interface ProductProps {
  params: Promise<{
    restaurantId: string;
    productId: string;
  }>;
}

export default async function Product(props: ProductProps) {
  const { params } = props;

  const { restaurantId, productId } = await params;

  const restaurant = await getRestaurantByIdService(restaurantId);

  const product = await getProductByIdService({ productId, restaurantId });

  const getAdditionalTitle = (additional: ProductAdditionalProps) => {
    if (additional.quantity === 1) return "escolha 1";
    if (additional.quantity === 2) return "escolha de 1 a 2";
    if (additional.quantity > 2) return `escolha de 1 a ${additional.quantity}`;
    if (additional.quantity === -1) return "escolha quantos quiser";
  };

  if (!restaurant || !product) {
    return (
      <div className="container-default">
        <NotFound.Root>
          <NotFound.Icon icon={faUtensils} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Produto não encontrado</NotFound.Title>
            <NotFound.Description>
              Tente buscar por outro nome
            </NotFound.Description>
            <Button asChild className="mt-3">
              <Link href="/">Voltar para início</Link>
            </Button>
          </NotFound.Content>
        </NotFound.Root>
      </div>
    );
  }

  return (
    <ProductPage.Root>
      <Hero.Root>
        <Image
          src={product.imageUrl || ""}
          alt={product.name}
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
                R$ {product.price.toFixed(2)}
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

      {product.additionals.map((additional) => (
        <React.Fragment key={additional.id}>
          <div className="container-fluid">
            <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
          </div>

          <ProductPage.Section>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-base font-bold text-neutral-900">
                  {additional.title}
                </h2>
                <small className="text-xs font-bold text-neutral-500">
                  {getAdditionalTitle(additional)}
                </small>
              </div>

              {additional.isRequired && <Badge>obrigatório</Badge>}
            </div>

            {additional.type === "unique" && (
              <ProductPageUniqueOptions additional={additional} />
            )}

            {additional.type === "multiple" && (
              <div className="flex flex-col">
                <ProductPageMultipleOptions additional={additional} />
              </div>
            )}

            {additional.type === "upsell" && (
              <div className="flex flex-col gap-4">
                <ProductPageUpsellOptions additional={additional} />
              </div>
            )}
          </ProductPage.Section>
        </React.Fragment>
      ))}

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <ProductPage.NotesTextArea />
      </ProductPage.Section>

      <ProductPageActions productId={productId} />
    </ProductPage.Root>
  );
}
