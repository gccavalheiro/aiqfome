import { Icon } from "@/components/ui/icon";
import { Restaurant } from "@/types/restaurant";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { RestaurantCard } from "../restaurant-card";
import { RestaurantSection } from "../restaurant-section";
import Image from "next/image";

interface RestaurantSectionCloseProps {
  restaurants: Restaurant[];
}

export function RestaurantSectionClose(props: RestaurantSectionCloseProps) {
  const { restaurants } = props;

  return (
    <RestaurantSection.Root className="container-default">
      <RestaurantSection.Title>fechados</RestaurantSection.Title>

      <RestaurantCard.List>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard.Root key={restaurant.id} title={restaurant.name}>
              <RestaurantCard.Image>
                <Image
                  src={restaurant.logoUrl}
                  alt={restaurant.name}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover opacity-50"
                />
              </RestaurantCard.Image>

              <RestaurantCard.Content>
                <RestaurantCard.Title className="opacity-50">
                  {restaurant.name}
                </RestaurantCard.Title>
                <RestaurantCard.Info>
                  <RestaurantCard.Rating className="opacity-50">
                    <Icon icon={faStar} className="text-yellow-500" />
                    {restaurant.rating}
                  </RestaurantCard.Rating>

                  <Icon
                    icon={faCircle}
                    className="text-neutral-400"
                    fontSize={6}
                  />

                  <RestaurantCard.Status className="text-red-500">
                    fechado
                  </RestaurantCard.Status>
                </RestaurantCard.Info>
              </RestaurantCard.Content>
            </RestaurantCard.Root>
          );
        })}
      </RestaurantCard.List>
    </RestaurantSection.Root>
  );
}
