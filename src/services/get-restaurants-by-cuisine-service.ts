import { data } from "@/utils/restaurant";
import { Restaurant } from "@/utils/restaurant";

export async function getRestaurantsByCuisineService(cuisineType: string): Promise<Restaurant[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  const restaurants = [...data.openRestaurants, ...data.closedRestaurants].filter(
    (restaurant) => restaurant.cuisineType?.toLowerCase() === cuisineType.toLowerCase()
  );

  return restaurants;
} 