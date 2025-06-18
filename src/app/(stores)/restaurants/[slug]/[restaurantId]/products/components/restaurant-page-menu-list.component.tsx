import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { RestaurantProps } from "@/utils/restaurant";
import { RestaurantPageMenuItem } from "./restaurant-page-menu-item.component";

interface RestaurantPageMenusListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  restaurant: RestaurantProps;
}

export async function RestaurantPageMenuList(
  props: RestaurantPageMenusListProps,
) {
  const { restaurant, className, ...rest } = props;

  return (
    <div className={cn("container-fluid py-6", className)} {...rest}>
      <Accordion.Root orientation="vertical" type="single" collapsible>
        {restaurant.menus.map((menu) => (
          <RestaurantPageMenuItem
            key={menu.id}
            menu={menu}
            restaurantId={restaurant.id}
            slug={restaurant.slug}
          />
        ))}
      </Accordion.Root>
    </div>
  );
}
