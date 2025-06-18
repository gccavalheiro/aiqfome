import { RestaurantProps, restaurants } from "@/utils/restaurant";

export async function getAllRestaurantsService(): Promise<RestaurantProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return restaurants;
}

export async function getRestaurantBySlugService(slug: string): Promise<RestaurantProps | null> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

  return restaurant || null;
}

export async function getRestaurantByIdService(restaurantId: string): Promise<RestaurantProps | null> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId)

  return restaurant || null;
}

export async function getOpenRestaurantsService(): Promise<RestaurantProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const openRestaurants = restaurants.filter((restaurant) => restaurant.status === "open");

  return openRestaurants;
}

export async function getClosedRestaurantsService(): Promise<RestaurantProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))

  const closedRestaurants = restaurants.filter((restaurant) => restaurant.status === "closed");

  return closedRestaurants;
}


export async function getRestaurantsByCuisineService(cuisineType: string): Promise<RestaurantProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurantsByCuisine = restaurants.filter(
    (restaurant) => restaurant.cuisineType?.toLowerCase() === cuisineType.toLowerCase()
  );

  return restaurantsByCuisine;
}

