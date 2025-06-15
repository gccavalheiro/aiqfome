"use client";
import { NotFound } from "@/components/not-found";
import { RestaurantSectionClose } from "@/components/restaurant/restaurant-section-close";
import { RestaurantSectionOpen } from "@/components/restaurant/restaurant-section-open";
import { RestaurantSectionSearch } from "@/components/restaurant/restaurant-section-search";
import { RestaurantData } from "@/types/restaurant";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import React from "react";

interface RestaurantsPageProps {
  data: RestaurantData;
}

export function RestaurantsPage(props: RestaurantsPageProps) {
  const { data } = props;
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const pageTitle = query ? `resultados de busca para: "${query}"` : "";
  const restaurantList = React.useMemo(() => {
    return query
      ? [...data.openRestaurants, ...data.closedRestaurants].filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(query.toLowerCase()),
        )
      : [];
  }, [query, data.openRestaurants, data.closedRestaurants]);

  const noResult = query && restaurantList.length === 0;

  return (
    <>
      {query ? (
        <RestaurantSectionSearch
          pageTitle={pageTitle}
          restaurants={restaurantList}
        />
      ) : (
        <>
          <RestaurantSectionOpen restaurants={data.openRestaurants} />
          <RestaurantSectionClose restaurants={data.closedRestaurants} />
        </>
      )}

      {noResult && (
        <NotFound.Root>
          <NotFound.Icon icon={faUtensils} className="text-4xl" />
          <NotFound.Content>
            <NotFound.Title>Nenhum restaurante encontrado</NotFound.Title>
            <NotFound.Description>
              Tente buscar por outro nome
            </NotFound.Description>
          </NotFound.Content>
        </NotFound.Root>
      )}
    </>
  );
}
