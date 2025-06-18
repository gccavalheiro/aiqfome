"use client";
import { RadioGroup } from "@/components/ui/radio-group";
import { ProductAdditionalProps } from "@/utils/restaurant";
import { ProductPageUniqueOptionItem } from "./product-page-unique-option-item.component";

interface ProductPageUniqueOptionsProps {
  additional: ProductAdditionalProps;
}

export function ProductPageUniqueOptions(props: ProductPageUniqueOptionsProps) {
  const { additional } = props;

  return (
    <RadioGroup.Root onValueChange={(value) => console.log(value)}>
      {additional.options.map((option) => (
        <ProductPageUniqueOptionItem key={option.id} option={option} />
      ))}
    </RadioGroup.Root>
  );
}
