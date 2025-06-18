"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductAdditionalProps } from "@/utils/restaurant";

interface ProductPageMultipleOptionsProps {
  additional: ProductAdditionalProps;
}

export function ProductPageMultipleOptions(
  props: ProductPageMultipleOptionsProps,
) {
  const { additional } = props;

  // const selectedOptions = React.useMemo(() => {
  //   return (
  //     checkout?.items
  //       .find((item) => item.id === product.id)
  //       ?.accompaniments?.map((accompaniments) => accompaniments.id) || []
  //   );
  // }, [checkout?.items, product.id]);

  // const toggleOption = (accompanimentId: string) => {
  //   if (selectedOptions.includes(accompanimentId)) {
  //     handleRemoveAccompaniment(product.id, accompanimentId);
  //   } else {
  //     handleAddAccompaniment(product, {
  //       id: accompanimentId,
  //       name,
  //     });
  //   }
  // };

  // const isOptionDisabled = (id: string) => {
  //   return selectedOptions.length >= 2 && !selectedOptions.includes(id);
  // };

  return additional.options.map((option) => (
    <div className="flex-1" key={option.id}>
      <label
        className="flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50"
        htmlFor={option.id}
      >
        <Checkbox
          id={option.id}
          value={option.id}
          onCheckedChange={(value) => console.log(value)}
        />
        <span className="text-sm text-neutral-500">{option.title}</span>
      </label>
    </div>
  ));
}
