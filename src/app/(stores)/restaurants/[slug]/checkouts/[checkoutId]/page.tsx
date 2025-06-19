import { getRestaurantBySlugService } from "@/services/restaurant-service";
import { CheckoutPageContent } from "./components/checkout-page-content.component";
import { redirect } from "next/navigation";

interface CheckoutPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CheckoutPage(props: CheckoutPageProps) {
  const { params } = props;

  const { slug } = await params;

  const restaurant = await getRestaurantBySlugService(slug);

  console.log("restaurant", restaurant);
  if (!restaurant) {
    redirect("/");
  }

  return <CheckoutPageContent restaurant={restaurant} />;
}
