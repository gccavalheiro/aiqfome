import { NotFound } from "@/components/not-found";
import { RestaurantCard } from "@/components/restaurant/restaurant-card";
import { RestaurantSection } from "@/components/restaurant/restaurant-section";
import { Button } from "@/components/ui/button";

import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { RestaurantItem } from "./restaurant-item.component";
import {
  getAllRestaurantsService,
  getClosedRestaurantsService,
  getOpenRestaurantsService,
} from "@/services/restaurant-service";

type RestaurantsPageProps = {
  query: string;
};

export async function RestaurantsPage(props: RestaurantsPageProps) {
  const { query } = props;

  const restaurants = await getAllRestaurantsService();
  const openRestaurants = await getOpenRestaurantsService();
  const closedRestaurants = await getClosedRestaurantsService();

  const restaurantList = query
    ? restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  const notFound = query && restaurantList.length === 0;

  if (notFound) {
    return (
      <RestaurantSection.Root className="container-default">
        <RestaurantSection.Title>
          {`resultados de busca para: "${query}"`}
        </RestaurantSection.Title>
        <NotFound.Root>
          <NotFound.Icon icon={faUtensils} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Nenhum restaurante encontrado</NotFound.Title>
            <NotFound.Description>
              Tente buscar por outro nome
            </NotFound.Description>
            <Button asChild className="mt-3">
              <Link href="/">Voltar para início</Link>
            </Button>
          </NotFound.Content>
        </NotFound.Root>
      </RestaurantSection.Root>
    );
  }

  return (
    <>
      {query && restaurantList.length > 0 && (
        <RestaurantSection.Root className="container-default">
          <RestaurantSection.Title>
            {`resultados de busca para: "${query}"`}
          </RestaurantSection.Title>
          <RestaurantCard.List>
            {restaurantList.map((restaurant) => {
              return (
                <RestaurantItem key={restaurant.id} restaurant={restaurant} />
              );
            })}
          </RestaurantCard.List>
        </RestaurantSection.Root>
      )}

      {!query && openRestaurants.length > 0 && (
        <RestaurantSection.Root className="container-default">
          <RestaurantSection.Title>abertos</RestaurantSection.Title>

          <RestaurantCard.List>
            {openRestaurants.map((restaurant) => {
              return (
                <RestaurantItem key={restaurant.id} restaurant={restaurant} />
              );
            })}
          </RestaurantCard.List>
        </RestaurantSection.Root>
      )}

      {!query && closedRestaurants.length > 0 && (
        <RestaurantSection.Root className="container-default">
          <RestaurantSection.Title>fechados</RestaurantSection.Title>

          <RestaurantCard.List>
            {closedRestaurants.map((restaurant) => {
              return (
                <RestaurantItem key={restaurant.id} restaurant={restaurant} />
              );
            })}
          </RestaurantCard.List>
        </RestaurantSection.Root>
      )}
    </>
  );
}
