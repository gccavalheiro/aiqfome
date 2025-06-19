import { Accordion } from "@/components/ui/accordion";

import Image from "next/image";

import { MenuProps } from "@/utils/restaurant";
import { RestaurantPageMenuProduct } from "./restaurant-page-menu-product.component";
import { ProductUtils } from "@/utils/product";

interface RestaurantPageMenuProps {
  menu: MenuProps;
  restaurantId: string;
  slug: string;
}

export function RestaurantPageMenuItem(props: RestaurantPageMenuProps) {
  const { menu, restaurantId, slug } = props;
  const { products } = menu;

  const isPromotion = products.some((product) => {
    const additionalOption = ProductUtils.getAdditionalMainFirstOption(product.additionals);

    const hasAdditionalOptionDiscount =
      additionalOption?.discount && additionalOption.discount > 0;

    return hasAdditionalOptionDiscount || product.discount > 0;
  });

  return (
    <Accordion.Item value={menu.id}>
      <Accordion.Header>
        <Accordion.Trigger>
          <span className="flex flex-col">
            <p className="flex gap-1 truncate text-base font-bold text-neutral-900">
              {menu.name}

              {isPromotion && (
                <Image
                  src="/assets/icons/badge-dolar.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-auto w-auto"
                />
              )}
            </p>
            <p className="text-left text-xs text-neutral-500 md:text-sm">
              {menu.description}
            </p>
          </span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="flex flex-col py-4">
        {products.map((product) => (
          <RestaurantPageMenuProduct
            key={product.id}
            product={product}
            restaurantId={restaurantId}
            slug={slug}
            isPromotion={isPromotion}
          />
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
}
