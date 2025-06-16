import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { RestaurantPage } from "@/components/restaurant/restaurant-page/restaurant-page.component";
import { Icon } from "@/components/ui/icon";
import {
  faChevronRight,
  faCircle,
  faHeart,
  faMotorcycle,
  faShareNodes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import Image from "next/image";
import { RestaurantPageMenu } from "./products/components/restaurant-page-menu.component";
import Link from "next/link";

const mockCategories = [
  {
    id: "category-1",
    name: "Niguiris",
    description: "Peixe fresco fatiado sobre arroz temperado com vinagre",
    items: [
      {
        id: "item-1-1",
        name: "Niguiri Salmão",
        description: "Salmão fresco sobre arroz temperado",
        price: "R$ 24,90",
        originalPrice: "R$ 29,90",
        isVegetarian: false,
        isPromotion: true,
      },
      {
        id: "item-1-2",
        name: "Niguiri Atum",
        description: "Atum fresco sobre arroz temperado",
        price: "R$ 22,90",
        isVegetarian: false,
        isPromotion: false,
      },
      {
        id: "item-1-3",
        name: "Niguiri Vegetariano",
        description: "Abacate, pepino e cenoura sobre arroz temperado",
        price: "R$ 19,90",
        isVegetarian: true,
        isPromotion: false,
      },
    ],
  },
  {
    id: "category-2",
    name: "Temakis",
    description:
      "Cones de alga nori recheados com arroz e ingredientes frescos",
    items: [
      {
        id: "item-2-1",
        name: "Temaki Salmão",
        description: "Salmão, cream cheese, cebolinha e molho tarê",
        price: "R$ 28,90",
        isVegetarian: false,
        isPromotion: false,
      },
      {
        id: "item-2-2",
        name: "Temaki Vegetariano",
        description: "Cenoura, pepino, abacate e cream cheese",
        price: "R$ 24,90",
        isVegetarian: true,
        isPromotion: false,
      },
    ],
  },
  {
    id: "category-3",
    name: "Hot Rolls",
    description: "Sushis empanados e fritos com molhos especiais",
    items: [
      {
        id: "item-3-1",
        name: "Hot Philadelphia",
        description: "Salmão, cream cheese e cebolinha empanados",
        price: "R$ 32,90",
        isVegetarian: false,
      },
      {
        id: "item-3-2",
        name: "Hot California",
        description: "Kani, cream cheese e cebolinha empanados",
        price: "R$ 29,90",
        originalPrice: "R$ 34,90",
        isVegetarian: false,
        isPromotion: true,
      },
    ],
  },
];

const mockRestaurantInfo = {
  deliveryFee: "R$ 5,00",
  deliveryTime: "30-45 min",
  distance: "2,5 km",
  freeDeliveryOver: "Frete grátis acima de R$ 50,00",
  rating: "4.8",
  closingTime: "Fecha às 23:00",
  minimumOrder: "Pedido mínimo R$ 20,00",
};

export default function Restaurant() {
  return (
    <RestaurantPage.Root>
      <RestaurantPage.Header>
        <RestaurantPage.Display>
          <RestaurantCard.Image className="max-w-8 min-w-8 rounded-sm md:max-w-[4.5rem]">
            <Image
              src="/assets/images/logo-loja-01.png"
              alt="Matsuri Concept Logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </RestaurantCard.Image>
          <RestaurantPage.Title>Matsuri Concept</RestaurantPage.Title>
        </RestaurantPage.Display>

        <RestaurantPage.Actions>
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
              <Icon
                icon={faHeartRegular}
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
        </RestaurantPage.Actions>

        <RestaurantPage.Info>
          <RestaurantCard.Info className="text-xs md:text-base">
            <RestaurantCard.Fee className="text-sm md:text-lg">
              <Icon icon={faMotorcycle} />
              {mockRestaurantInfo.deliveryFee}
            </RestaurantCard.Fee>
            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status>
              {mockRestaurantInfo.deliveryTime}
            </RestaurantCard.Status>
            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status>
              {mockRestaurantInfo.distance}
            </RestaurantCard.Status>
          </RestaurantCard.Info>

          <RestaurantCard.Delivery className="w-fit rounded-md bg-teal-50 px-4 py-2 text-xs md:text-base">
            {mockRestaurantInfo.freeDeliveryOver}
          </RestaurantCard.Delivery>

          <RestaurantCard.Info className="text-xs md:text-base">
            <RestaurantCard.Rating>
              <Icon icon={faStar} className="text-yellow-500" />
              {mockRestaurantInfo.rating}
            </RestaurantCard.Rating>
            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status className="text-other-green-500">
              {mockRestaurantInfo.closingTime}
            </RestaurantCard.Status>
          </RestaurantCard.Info>

          <RestaurantCard.Status className="text-xs md:text-base">
            {mockRestaurantInfo.minimumOrder}
          </RestaurantCard.Status>
        </RestaurantPage.Info>
      </RestaurantPage.Header>

      <RestaurantPageMenu categories={mockCategories} />
    </RestaurantPage.Root>
  );
}
