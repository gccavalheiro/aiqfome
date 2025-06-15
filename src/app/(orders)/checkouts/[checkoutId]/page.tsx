import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  faCircle,
  faPencil,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const checkoutItems = [
  {
    id: "1",
    name: "Califórnia",
    price: 13.99,
  },
  {
    id: "2",
    name: "Temaki Filadélfia",
    price: 14.0,
  },
  {
    id: "3",
    name: "Temaki Mix",
    price: 22.0,
  },
  {
    id: "4",
    name: "Coca-cola lata",
    price: 10.0,
  },
];

export default function CheckoutPage() {
  return (
    <div className="container-default flex flex-col gap-6 py-4">
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

      {/* Ceviche de salmão */}
      {checkoutItems.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col gap-2 rounded-lg border p-4"
        >
          <Link
            href="/"
            className="text-neutral-0 absolute -top-0.5 right-4 flex -translate-y-1/2 items-center gap-2 rounded-sm bg-teal-400 px-2 py-0.5 text-xs font-bold tracking-wide transition-colors duration-200 hover:bg-teal-700 md:py-1"
          >
            <Icon icon={faPencil} size={12} />
            editar
          </Link>

          <div className="flex flex-col gap-1">
            <h3 className="truncate text-sm font-bold text-neutral-900 md:text-base">
              {item.name}
            </h3>

            <div className="flex justify-between">
              <p className="text-sm font-extrabold text-purple-500 md:text-base">
                R$ {item.price.toFixed(2)}
              </p>
              <div className="flex w-fit items-center justify-between gap-2">
                <Button
                  disabled
                  variant="ghost"
                  className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-transparent p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400"
                >
                  <Icon icon={faTrashAlt} size={20} />
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
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Icon icon={faCircle} fontSize={6} />
              <h5 className="text-sm font-bold text-neutral-500 md:text-base">
                tamanho
              </h5>
            </div>
            <div className="pl-3.5 text-xs font-semibold text-neutral-500 md:text-sm">
              <p>médio</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Icon icon={faCircle} fontSize={6} />
              <h5 className="text-sm font-bold text-neutral-500 md:text-base">
                vai querer bebida?
              </h5>
            </div>
            <div className="pl-3.5 text-xs font-semibold text-neutral-500 md:text-sm">
              <p className="flex items-center gap-2">
                médio
                <span className="font-bold text-teal-400">+R$ 5,00</span>
              </p>
              <p className="flex items-center gap-2">salsinha</p>
              <p className="flex items-center gap-2">shemeji</p>
            </div>
          </div>

          <div className="rounded-sm bg-neutral-50 p-1.5">
            <p className="text-xs: font-semibold text-neutral-700 md:text-sm">
              <span className="font-bold">observação:</span> tirar a cebolinha
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
