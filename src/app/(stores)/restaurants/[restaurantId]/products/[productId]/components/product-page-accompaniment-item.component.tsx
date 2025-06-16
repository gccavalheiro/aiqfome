"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface ProductPageAccompanimentItemProps {
  id: string;
  label: string;
}

export function ProductPageAccompanimentItem(
  props: ProductPageAccompanimentItemProps,
) {
  const { id, label } = props;
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const toggleOption = React.useCallback((id: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id],
    );
  }, []);

  const isOptionDisabled = (id: string) => {
    return selectedOptions.length >= 2 && !selectedOptions.includes(id);
  };

  console.log(selectedOptions);

  return (
    <div className="flex-1" key={id}>
      <label
        className="flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50"
        htmlFor={id}
      >
        <Checkbox
          id={id}
          checked={selectedOptions.includes(id)}
          onCheckedChange={() => toggleOption(id)}
          disabled={isOptionDisabled(id)}
        />
        <span className="text-sm text-neutral-500">{label}</span>
      </label>
    </div>
  );
}
