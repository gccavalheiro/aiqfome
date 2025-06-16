import { Hero } from "@/components/hero";
import { ProductPage } from "@/components/product-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { RadioGroup } from "@/components/ui/radio-group";

import { Separator } from "@/components/ui/separator";
import { accompaniments, drinks, extras, utensils } from "@/utils/restaurant";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import { ProductPageAccompanimentItem } from "./components/product-page-accompaniment-item.component";
import { ProductPageDrinkItem } from "./components/product-page-drink-item.component";
import { ProductPageExtraItem } from "./components/product-page-extra-item.component";
import { ProductPageUtensilItem } from "./components/product-page-utensil-item.component";

export default function Product() {
  return (
    <ProductPage.Root>
      <Hero.Root>
        <Image
          src="/assets/images/loja/item/main-image.jpg"
          alt="Hero"
          width={1200}
          height={400}
          className="max-h-[400px] w-full object-cover"
        />
      </Hero.Root>

      <ProductPage.Header>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl font-bold text-neutral-700">
              Ceviche de salmão
            </h1>
            <p className="text-sm font-extrabold text-neutral-500">
              a partir de{" "}
              <span className="text-lg font-extrabold text-purple-500">
                R$ 19,90
              </span>
            </p>
            <p className="text-sm font-semibold text-neutral-500">
              salmão temperado com limão, cebola e pimenta
            </p>
          </div>

          <ProductPage.Quantity>
            <div className="flex w-full flex-col gap-1.5">
              <h2 className="text-base font-bold text-neutral-700">quantos?</h2>
              <p className="text-sm font-semibold text-neutral-500">
                total{" "}
                <span className="font-bold text-neutral-700">R$ 19,90</span>
              </p>
            </div>
            <div className="flex flex-1 flex-col items-end">
              <div className="flex w-fit items-center justify-between gap-2">
                <Button
                  disabled
                  variant="ghost"
                  className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-transparent p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400"
                >
                  <Icon icon={faTrashAlt} size={20} />
                </Button>
                <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
                  99
                </span>
                <Button
                  variant="ghost"
                  className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
                >
                  <Icon icon={faPlus} size={14} />
                </Button>
              </div>
            </div>
          </ProductPage.Quantity>
        </div>
      </ProductPage.Header>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

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

        <RadioGroup.Root defaultValue="none">
          <label
            htmlFor="medium"
            className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="medium" id="medium" />
              <Image
                src="/assets/icons/badge-dolar.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="text-sm font-normal">médio</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1 text-right">
              <span className="text-xs font-bold text-neutral-500">
                de R$ 22,90 por
              </span>
              <span className="text-other-green-500 text-sm font-bold">
                R$ 19,90
              </span>
            </div>
          </label>

          <label
            htmlFor="large"
            className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="large" id="large" />
              <span className="text-sm font-normal">grande</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1 text-right">
              <p className="text-sm font-bold text-purple-500">R$ 28,90</p>
            </div>
          </label>
        </RadioGroup.Root>
      </ProductPage.Section>

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
              acompanhamentos
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
