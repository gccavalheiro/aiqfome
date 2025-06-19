import { ProductProps, restaurants } from "@/utils/restaurant";
interface GetProductByIdServiceProps {
  restaurantId: string;
  productId: string;
}

export async function getAllProductsService(restaurantId: string): Promise<ProductProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);

  const products = restaurant?.menus.flatMap((menu) => menu.products);

  return products || [];
}

export async  function getProductByIdService(props: GetProductByIdServiceProps): Promise<ProductProps | null> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const { restaurantId, productId } = props;

  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);

  const menu = restaurant?.menus.find((menu) => menu.products.find((item ) => item.id === productId))

  const product = menu?.products.find((item) => item.id === productId);

  return product || null;
}

