import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { CategoryProps } from "@/utils/restaurant";
import Image from "next/image";
import { RestaurantPageMenuItem } from "./restaurant-page-menu-item.component";

interface RestaurantPageMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: CategoryProps[];
}

export function RestaurantPageMenu(props: RestaurantPageMenuProps) {
  const { categories, className, ...rest } = props;

  return (
    <div className={cn("container-fluid py-6", className)} {...rest}>
      <Accordion.Root orientation="vertical" type="single" collapsible>
        {categories.map((category) => (
          <Accordion.Item value={category.id} key={category.id}>
            <Accordion.Header>
              <Accordion.Trigger>
                <span className="flex flex-col">
                  <p className="flex gap-1 truncate text-base font-bold text-neutral-900">
                    {category.name}
                    {category.items.some((item) => item.isPromotion) && (
                      <Image
                        src="/assets/icons/badge-dolar.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                    )}
                  </p>
                  <p className="text-left text-xs text-neutral-500 md:text-sm">
                    {category.description}
                  </p>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="flex flex-col py-4">
              {category.items.map((item) => (
                <RestaurantPageMenuItem key={item.id} item={item} />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
