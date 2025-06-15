"use client";

import { Hero } from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import React from "react";

const accompaniments = [
  { id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d986d98b", label: "shoyu" },
  { id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d986d92b", label: "gengibre" },
  { id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d986d91b", label: "wasabi" },
  { id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d986498b", label: "sem acompanhamentos" },
];

const drinks = [
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d981d98b",
    label: "coca-cola",
    value: 5.0,
    quantity: 1,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d286d98b",
    label: "fanta laranja",
    value: 5.0,
    quantity: 1,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d936d98b",
    label: "guaraná antarctica",
    value: 5.0,
    quantity: 1,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d986d98b",
    label: "suco prats laranja",
    value: 5.0,
    quantity: 1,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec44986d98b",
    label: "água sem gás",
    value: 3.0,
    quantity: 1,
  },
];

const utensils = [
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d586d98b",
    label: "hashi",
    value: 0,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-3ec4d9666d98",
    label: "garfo e faca descartável",
    value: 1.0,
  },
];

const extras = [
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-2ec4d9666d98",
    label: "biscoito da sorte",
    value: 2.0,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-1ec4d9666d98",
    label: "rolinho primavera",
    value: 8.0,
  },
  {
    id: "4d29fb5c-5a61-4b9c-b6ed-4ec4d9666d98",
    label: "guioza",
    value: 6.0,
  },
];

export default function ProductPage() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id],
    );
  };

  const isOptionDisabled = (id: string) => {
    return selectedOptions.length >= 2 && !selectedOptions.includes(id);
  };

  return (
    <div className="pb-11">
      <Hero.Root>
        <Image
          src="/assets/images/loja/item/main-image.jpg"
          alt="Hero"
          width={1200}
          height={400}
          className="max-h-[400px] w-full object-cover"
        />
      </Hero.Root>

      <div className="container-default flex flex-col gap-4 py-4">
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

          <div className="flex items-center justify-between gap-4">
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
                <span className="text-base font-bold text-neutral-700">1</span>
                <Button
                  variant="ghost"
                  className="hover:text-neutral-0 h-8 min-h-8 w-8 max-w-8 min-w-8 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
                >
                  <Icon icon={faPlus} size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Size Selection */}
      <div className="container-default flex flex-col gap-4 py-4">
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

        <RadioGroup defaultValue="none">
          <label
            htmlFor="medium"
            className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="medium" id="medium" />
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
              <RadioGroupItem value="large" id="large" />
              <span className="text-sm font-normal">grande</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1 text-right">
              <p className="text-sm font-bold text-purple-500">R$ 28,90</p>
            </div>
          </label>
        </RadioGroup>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Accompaniments */}
      <div className="container-default flex flex-col gap-4 py-4">
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
            <div className="flex-1" key={option.id}>
              <label
                className="flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50"
                htmlFor={option.id}
              >
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={() => toggleOption(option.id)}
                  disabled={isOptionDisabled(option.id)}
                />
                <span className="text-sm text-neutral-500">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Drinks */}
      <div className="container-default flex flex-col gap-4 py-4">
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
            <div
              className="flex flex-1 gap-3 rounded-sm p-2 hover:bg-neutral-50"
              key={option.id}
            >
              <div className="flex w-fit items-center justify-between gap-2">
                <Button
                  variant="ghost"
                  disabled
                  className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400 disabled:border-neutral-100"
                >
                  <Icon icon={faMinus} size={14} />
                </Button>
                <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
                  99
                </span>
                <Button
                  variant="ghost"
                  className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
                >
                  <Icon icon={faPlus} size={14} />
                </Button>
              </div>

              <span className="flex-1 leading-tight">{option.label}</span>

              <p className="ml-auto text-sm font-bold whitespace-nowrap text-purple-500">
                +R$ {option.value.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Utensils */}
      <div className="container-default flex flex-col gap-4 py-4">
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

        <RadioGroup defaultValue="none">
          {utensils.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <span className="text-sm font-normal">{option.label}</span>
              </div>

              {option.value > 0 && (
                <div className="flex flex-wrap items-baseline gap-1 text-right">
                  <span className="text-right text-sm font-bold text-purple-500">
                    +R$ {option.value.toFixed(2)}
                  </span>
                </div>
              )}
            </label>
          ))}
        </RadioGroup>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Extras */}
      <div className="container-default flex flex-col gap-4 py-4">
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
            <div className="flex-1" key={option.id}>
              <label
                className="flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50"
                htmlFor={option.id}
              >
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={() => toggleOption(option.id)}
                  disabled={isOptionDisabled(option.id)}
                />
                <span className="text-sm text-neutral-500">{option.label}</span>
                <span className="ml-auto text-right text-sm font-bold text-purple-500">
                  +R$ {option.value.toFixed(2)}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <Separator className="bg-neutral-100 data-[orientation=horizontal]:h-1" />
      </div>

      {/* Notes */}
      <div className="container-default flex flex-col py-4">
        <textarea
          placeholder="alguma observação do item? • opcionalex: tirar algum ingrediente, ponto do prato"
          className="border-decorative-divider w-full resize-none rounded-sm border px-3 py-2 text-sm placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-500"
        />
      </div>
    </div>
  );
}
