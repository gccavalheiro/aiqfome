import { data } from "@/utils/restaurant";

export async function getRestaurantsService() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return data;
}

export async function getRestaurantByIdService(restaurantId: string) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurant = [...data.openRestaurants, ...data.closedRestaurants].find(
    (restaurant) => restaurant.id === restaurantId
  );

  return restaurant;
}