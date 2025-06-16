import { data } from "@/utils/restaurant";
import { Restaurant } from "@/utils/restaurant";

export async function getRestaurantByIdService(id: string): Promise<Restaurant | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  const restaurant = [...data.openRestaurants, ...data.closedRestaurants].find(
    (restaurant) => restaurant.id === id
  );

  return restaurant;
} 