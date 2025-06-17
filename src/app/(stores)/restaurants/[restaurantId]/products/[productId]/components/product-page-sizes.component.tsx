"use client";
import { RadioGroup } from "@/components/ui/radio-group";
import { useCheckout } from "@/contexts/checkout.context";
import { ItemProps, SizeProps } from "@/utils/restaurant";
import { ProductPageSizeItem } from "./product-page-size-item.component";

interface ProductPageSizesProps {
  product: ItemProps;
}

export function ProductPageSizes(props: ProductPageSizesProps) {
  const { product } = props;
  const { handleSelectSize } = useCheckout();

  function handleSizeChange(size: SizeProps) {
    console.log(size);
    handleSelectSize(product, size);
  }
  return (
    <RadioGroup.Root
      defaultValue={product.sizes[0].size}
      onValueChange={(value) => handleSizeChange(value as SizeProps)}
    >
      {product.sizes.map((sizeItem) => (
        <ProductPageSizeItem key={sizeItem.size} size={sizeItem} />
      ))}
    </RadioGroup.Root>
  );
}
