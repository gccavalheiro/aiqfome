import { getRestaurantByIdService } from "./get-restaurants-service";

interface GetProductByIdServiceProps {
  restaurantId: string;
  productId: string;
}

export async function getProductByIdService(props: GetProductByIdServiceProps) {
  const { restaurantId, productId } = props;
  
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurant = await getRestaurantByIdService(restaurantId);

  const category = restaurant?.menu.find((category) =>
    category.items.find((item) => item.id === productId)
  );

  const product = category?.items.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return product;

}