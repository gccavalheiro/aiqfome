import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { RestaurantPage } from "@/components/restaurant/restaurant-page/restaurant-page.component";
import { Icon } from "@/components/ui/icon";
import {
  faChevronRight,
  faCircle,
  faMotorcycle,
  faShareNodes,
  faStar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { NotFound } from "@/components/not-found";
import { Button } from "@/components/ui/button";
import { getRestaurantBySlugService } from "@/services/restaurant-service";
import Image from "next/image";
import Link from "next/link";
import { RestaurantPageFavoriteButton } from "./products/components/restaurant-page-favorite.componen";
import { RestaurantPageMenuList } from "./products/components/restaurant-page-menu-list.component";

interface RestaurantProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Restaurant(props: RestaurantProps) {
  const { params } = props;

  const { slug } = await params;

  const restaurant = await getRestaurantBySlugService(slug);

  if (!restaurant) {
    return (
      <div className="container-default">
        <NotFound.Root>
          <NotFound.Icon icon={faUtensils} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Restaurante não encontrado</NotFound.Title>
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
    <RestaurantPage.Root>
      <RestaurantPage.Header>
        <RestaurantPage.Display>
          <RestaurantCard.Image className="max-w-8 min-w-8 rounded-sm md:max-w-[4.5rem]">
            <Image
              src={restaurant.logoUrl}
              alt={restaurant.name}
              width={100}
              height={100}
              className="object-cover"
            />
          </RestaurantCard.Image>
          <RestaurantPage.Title>{restaurant.name}</RestaurantPage.Title>
        </RestaurantPage.Display>

        <RestaurantPage.Actions>
          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <Icon
                icon={faShareNodes}
                className="rotate-180 text-xl text-purple-500 md:text-3xl"
              />
            </button>
            <RestaurantPageFavoriteButton isFavorite={restaurant.isFavorite} />
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
            {restaurant.deliveryFee === 0 ? (
              <RestaurantCard.Delivery>
                <Icon icon={faMotorcycle} />
                grátis
              </RestaurantCard.Delivery>
            ) : (
              <RestaurantCard.Fee>
                <Image
                  src={"/assets/icons/aiq-delivery.svg"}
                  alt="delivery fee"
                  width={24}
                  height={24}
                  className="h-auto w-auto"
                />
                R${restaurant.deliveryFee.toFixed(2)}
              </RestaurantCard.Fee>
            )}

            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status>
              {restaurant.deliveryTime}
            </RestaurantCard.Status>
            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status>
              {restaurant.distance}km
            </RestaurantCard.Status>
          </RestaurantCard.Info>

          <RestaurantCard.Delivery className="w-fit rounded-md bg-teal-50 px-4 py-2 text-xs md:text-base">
            entrega grátis acima de R${" "}
            {restaurant.freeDeliveryMinOrder?.toFixed(2)}
          </RestaurantCard.Delivery>

          <RestaurantCard.Info className="text-xs md:text-base">
            <RestaurantCard.Rating>
              <Icon icon={faStar} className="text-yellow-500" />
              {restaurant.rating}
            </RestaurantCard.Rating>
            <Icon icon={faCircle} className="text-neutral-400" fontSize={6} />
            <RestaurantCard.Status className="text-other-green-500">
              fecha às {restaurant.closingTime}
            </RestaurantCard.Status>
          </RestaurantCard.Info>

          {restaurant.minOrderValue && (
            <RestaurantCard.Status className="text-xs md:text-base">
              pedido mínimo: R$ {restaurant.minOrderValue.toFixed(2)}
            </RestaurantCard.Status>
          )}
        </RestaurantPage.Info>
      </RestaurantPage.Header>

      <RestaurantPageMenuList restaurant={restaurant} />
    </RestaurantPage.Root>
  );
}
