import { data } from "@/utils/restaurant";
import { Restaurant } from "@/utils/restaurant";

export async function getRestaurantsByStatusService(status: 'open' | 'closed'): Promise<Restaurant[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return status === 'open' ? data.openRestaurants : data.closedRestaurants;
} 