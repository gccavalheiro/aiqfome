import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@/components/ui/icon";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faCircle,
  faMotorcycle,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import { randomUUID } from "node:crypto";

export default function RestaurantPage() {
  return (
    <section className="py-6">
      <header className="container-default flex flex-col gap-2 md:gap-4">
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

          <h1 className="text-xl font-extrabold text-neutral-900 md:text-3xl">
            Matsuri Concept
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <Icon
                icon={faShareNodes}
                className="rotate-180 text-xl text-purple-500 md:text-3xl"
              />
            </button>

            <button className="cursor-pointer">
              <Icon
                icon={faHeart}
                className="text-xl text-purple-500 md:text-3xl"
              />
            </button>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-bold tracking-wide text-teal-400 hover:underline hover:underline-offset-2 md:text-base"
          >
            mais infos <Icon icon={faChevronRight} size={12} />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <RestaurantCard.Info className="text-xs md:text-base">
            <RestaurantCard.Fee className="text-sm md:text-lg">
              <Icon icon={faMotorcycle} />
              R$ 4,99
            </RestaurantCard.Fee>

            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />

            <RestaurantCard.Status>hoje, 30-40 min</RestaurantCard.Status>

            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />

            <RestaurantCard.Status>5.2km</RestaurantCard.Status>
          </RestaurantCard.Info>

          <RestaurantCard.Delivery className="w-fit rounded-md bg-teal-50 px-4 py-2 text-xs md:text-base">
            entrega grátis acima de R$ 35,00
          </RestaurantCard.Delivery>

          <RestaurantCard.Info className="text-xs md:text-base">
            <RestaurantCard.Rating>
              <Icon icon={faStar} className="text-yellow-500" />
              4.5 de 5
            </RestaurantCard.Rating>

            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />

            <RestaurantCard.Status className="text-other-green-500">
              fecha às 20:00
            </RestaurantCard.Status>
          </RestaurantCard.Info>

          <RestaurantCard.Status className="text-xs md:text-base">
            pedido mínimo: R$ 15,00
          </RestaurantCard.Status>
        </div>
      </header>

      <div className="container-fluid py-6">
        <Accordion orientation="vertical" type="single" collapsible>
          {Array.from({ length: 10 }).map((_, index) => (
            <AccordionItem value={randomUUID()} key={index}>
              <AccordionHeader>
                <AccordionTrigger>
                  <span className="flex flex-col">
                    <p className="flex gap-1 truncate text-base font-bold text-neutral-900">
                      Niguiris
                      <Image
                        src="/assets/icons/badge-dolar.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                    </p>
                    <p className="text-left text-xs text-neutral-500 md:text-sm">
                      um prato super refrescante de peixe fatiado e marinado com
                      limão
                    </p>
                  </span>
                </AccordionTrigger>
              </AccordionHeader>

              <AccordionContent className="flex flex-col gap-6 py-4">
                <Link
                  href={`/restaurants/${randomUUID()}/products/${randomUUID()}`}
                  className="xs:gap-4 focus-visible:border-ring flex justify-between gap-2 px-6 outline-0 focus-visible:ring-[2px] focus-visible:ring-purple-400/50 md:px-6"
                >
                  <span className="flex flex-1 flex-col items-start">
                    <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
                      Califórnia
                      <span className="max-w-4 text-base md:max-w-6 md:text-xl">
                        <Image
                          src="/assets/icons/vegetarian.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                    </p>
                    <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                    </p>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="text-xs font-bold text-neutral-500 line-through">
                      R$ 17,00
                    </span>
                    <span className="text-other-green-500 inline-flex gap-[2px] text-sm font-bold">
                      <Image
                        src="/assets/icons/badge-dolar.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      R$ 13,99
                    </span>
                  </span>
                </Link>

                <Link
                  href={`/restaurants/${randomUUID()}/products/${randomUUID()}`}
                  className="xs:gap-4 flex justify-between gap-2 px-6 outline-purple-400/50 md:px-6"
                >
                  <span className="flex flex-1 flex-col items-start">
                    <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
                      Califórnia
                      <span className="max-w-4 text-base md:max-w-6 md:text-xl">
                        <Image
                          src="/assets/icons/vegetarian.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                    </p>
                    <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                    </p>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="inline-flex gap-[2px] text-sm font-bold text-purple-500">
                      R$ 13,99
                    </span>
                  </span>
                </Link>

                <Link
                  href={`/restaurants/${randomUUID()}/products/${randomUUID()}`}
                  className="xs:gap-4 flex justify-between gap-2 px-6 outline-purple-400/50 md:px-6"
                >
                  <span className="flex flex-1 flex-col items-start">
                    <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
                      Filadélfia
                      <span className="max-w-4 text-base md:max-w-6 md:text-xl">
                        <Image
                          src="/assets/icons/vegetarian.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                    </p>
                    <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                    </p>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="inline-flex gap-[2px] text-sm font-bold text-purple-500">
                      R$ 13,99
                    </span>
                  </span>
                </Link>

                <Link
                  href={`/restaurants/${randomUUID()}/products/${randomUUID()}`}
                  className="xs:gap-4 flex justify-between gap-2 px-6 outline-purple-400/50 md:px-6"
                >
                  <span className="flex flex-1 flex-col items-start">
                    <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
                      Filadélfia
                      <span className="max-w-4 text-base md:max-w-6 md:text-xl">
                        <Image
                          src="/assets/icons/vegetarian.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                    </p>
                    <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                    </p>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="inline-flex gap-[2px] text-sm font-bold text-purple-500">
                      R$ 13,99
                    </span>
                  </span>
                </Link>

                <Link
                  href={`/restaurants/${randomUUID()}/products/${randomUUID()}`}
                  className="xs:gap-4 flex justify-between gap-2 px-6 outline-purple-400/50 md:px-6"
                >
                  <span className="flex flex-1 flex-col items-start">
                    <p className="flex items-center gap-1 truncate text-sm font-semibold text-neutral-900">
                      Filadélfia
                      <span className="max-w-4 text-base md:max-w-6 md:text-xl">
                        <Image
                          src="/assets/icons/vegetarian.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </span>
                    </p>
                    <p className="line-clamp-2 text-left text-xs text-neutral-600 md:text-sm">
                      Kani, pepino e maçã ou manga Kani, pepino e maçã ou manga
                    </p>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="inline-flex gap-[2px] text-xs font-bold text-neutral-500">
                      a partir de
                    </span>
                    <span className="inline-flex gap-[2px] text-sm font-bold text-purple-500">
                      R$ 13,99
                    </span>
                  </span>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
