import { Hero } from "@/components/hero";
import { ProductPage } from "@/components/product-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { NotFound } from "@/components/not-found";
import { getProductByIdService } from "@/services/product-service";
import { getRestaurantBySlugService } from "@/services/restaurant-service";
import { ProductAdditionalProps } from "@/utils/restaurant";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProductUtils } from "@/utils/product";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  ProductPageActions,
  ProductPageMultipleOptions,
  ProductPageNotes,
  ProductPagePrice,
  ProductPageQuantityButtons,
  ProductPageUniqueOptionItem,
  ProductPageUniqueOptions,
  ProductPageUpsellOptions,
} from "./components";

interface ProductProps {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}

export default async function Product(props: ProductProps) {
  const { params } = props;

  const { slug, productId } = await params;

  const restaurant = await getRestaurantBySlugService(slug);

  if (!restaurant) {
    throw new Error("Restaurante não encontrado");
  }

  const product = await getProductByIdService({
    productId,
    restaurantId: restaurant.id,
  });

  if (!product) {
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
              <Link href="/">voltar para início</Link>
            </Button>
          </NotFound.Content>
        </NotFound.Root>
      </div>
    );
  }

  const productPrice = ProductUtils.getProductBasePrice(product);

  const getAdditionalTitle = (additional: ProductAdditionalProps) => {
    if (additional.quantity === 1) return "escolha 1";
    if (additional.quantity === 2) return "escolha de 1 a 2";
    if (additional.quantity > 2) return `escolha de 1 a ${additional.quantity}`;
    if (additional.quantity === -1) return "escolha quantos quiser";
  };

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

      <Breadcrumb.Root className="container-default pt-4">
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
              className="underline-offset-2 hover:underline"
            >
              {restaurant.name}
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <ProductPage.Header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold text-neutral-700">
              {product.name}
            </h1>
            <p className="text-sm font-extrabold text-neutral-500">
              a partir de{" "}
              <span className="text-lg font-extrabold text-purple-500">
                R$ {productPrice?.toFixed(2)}
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
                total <ProductPagePrice product={product} />
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
              <ProductPageUniqueOptions
                product={product}
                additional={additional}
              >
                {additional.options.map((option) => (
                  <ProductPageUniqueOptionItem
                    key={option.id}
                    option={option}
                  />
                ))}
              </ProductPageUniqueOptions>
            )}

            {additional.type === "multiple" && (
              <div className="flex flex-col">
                {additional.options.map((option) => (
                  <div className="flex-1" key={option.id}>
                    <ProductPageMultipleOptions
                      option={option}
                      product={product}
                      additional={additional}
                    />
                  </div>
                ))}
              </div>
            )}

            {additional.type === "upsell" && (
              <div className="flex flex-col gap-4">
                {additional.options.map((option) => (
                  <div
                    className="flex flex-1 gap-3 rounded-sm p-2 hover:bg-neutral-50"
                    key={option.id}
                  >
                    <ProductPageUpsellOptions
                      product={product}
                      additional={additional}
                      option={option}
                    />
                  </div>
                ))}
              </div>
            )}
          </ProductPage.Section>
        </React.Fragment>
      ))}

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      <ProductPage.Section>
        <ProductPageNotes product={product} />
      </ProductPage.Section>

      <ProductPageActions product={product} slug={restaurant.slug} />
    </ProductPage.Root>
  );
}
