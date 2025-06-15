"use client";
import { Icon } from "@/components/ui/icon";
import { Restaurant } from "@/types/restaurant";
import {
  faCircle,
  faMotorcycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { RestaurantCard } from "../restaurant-card";
import { RestaurantSection } from "../restaurant-section";
import { cn } from "@/lib/utils";

interface RestaurantSectionOpenProps {
  restaurants: Restaurant[];
  pageTitle: string;
}

export function RestaurantSectionSearch(props: RestaurantSectionOpenProps) {
  const { restaurants, pageTitle } = props;

  return (
    <RestaurantSection.Root className="container-default">
      <RestaurantSection.Title>{pageTitle}</RestaurantSection.Title>

      <RestaurantCard.List>
        {restaurants.map((restaurant) => {
          const isOpen = restaurant.status === "open";

          return (
            <Link
              href={`/restaurants/${restaurant.id}`}
              key={restaurant.id}
              title={restaurant.name}
            >
              <RestaurantCard.Root>
                <RestaurantCard.Image className={cn(!isOpen && "opacity-50")}>
                  <Image
                    src={restaurant.logoUrl}
                    alt={restaurant.name}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </RestaurantCard.Image>

                <RestaurantCard.Content>
                  <RestaurantCard.Title className={cn(!isOpen && "opacity-50")}>
                    {restaurant.name}
                  </RestaurantCard.Title>
                  <RestaurantCard.Info>
                    {!isOpen ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        {restaurant.deliveryFee > 0 ? (
                          <RestaurantCard.Fee>
                            <Image
                              src={"/assets/icons/aiq-delivery.svg"}
                              alt="delivery fee"
                              width={24}
                              height={24}
                            />
                            R${restaurant.deliveryFee.toFixed(2)}
                          </RestaurantCard.Fee>
                        ) : (
                          <RestaurantCard.Delivery>
                            <Icon icon={faMotorcycle} />
                            grátis
                          </RestaurantCard.Delivery>
                        )}

                        <Icon
                          icon={faCircle}
                          className="text-neutral-400"
                          fontSize={6}
                        />

                        <RestaurantCard.Rating>
                          <Icon icon={faStar} className="text-yellow-500" />
                          {restaurant.rating}
                        </RestaurantCard.Rating>
                      </>
                    )}
                  </RestaurantCard.Info>
                </RestaurantCard.Content>
              </RestaurantCard.Root>
            </Link>
          );
        })}
      </RestaurantCard.List>
    </RestaurantSection.Root>
  );
}
