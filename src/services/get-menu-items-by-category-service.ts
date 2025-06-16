import { data } from "@/utils/restaurant";
import { ItemProps } from "@/utils/restaurant";

export async function getMenuItemsByCategoryService(
  restaurantId: string,
  categoryId: string
): Promise<ItemProps[] | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  const restaurant = [...data.openRestaurants, ...data.closedRestaurants].find(
    (restaurant) => restaurant.id === restaurantId
  );

  const category = restaurant?.menu?.find((category) => category.id === categoryId);
  
  return category?.items;
} 