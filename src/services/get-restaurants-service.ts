import { data } from "@/utils/restaurant";

export async function getRestaurantsService() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return data
}
