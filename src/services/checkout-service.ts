import { checkoutData } from "@/utils/restaurant";

 
export async function getCheckoutByIdService(checkoutId: string) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const checkout = checkoutData.find(checkout => checkout.id === checkoutId)

  return checkout
}