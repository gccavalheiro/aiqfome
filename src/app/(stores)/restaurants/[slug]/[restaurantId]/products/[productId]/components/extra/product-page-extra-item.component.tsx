"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ExtraProps } from "@/utils/restaurant";
import React from "react";

interface ProductPageExtraItemProps {
  option: ExtraProps;
}

export function ProductPageExtraItem(props: ProductPageExtraItemProps) {
  const { option } = props;
  const { id, name, price } = option;
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id],
    );
  };

  const isOptionDisabled = (id: string) => {
    return selectedOptions.length >= 2 && !selectedOptions.includes(id);
  };

  return (
    <div className="flex-1" key={id}>
      <label
        className={cn(
          "flex items-center gap-2 rounded-sm p-2 hover:bg-neutral-50",
          isOptionDisabled(id) && "opacity-50",
        )}
        htmlFor={id}
      >
        <Checkbox
          id={id}
          checked={selectedOptions.includes(id)}
          onCheckedChange={() => toggleOption(id)}
          disabled={isOptionDisabled(id)}
        />
        <span className="text-sm text-neutral-500">{name}</span>
        <span
          className={cn("ml-auto text-right text-sm font-bold text-purple-500")}
        >
          +R$ {price.toFixed(2)}
        </span>
      </label>
    </div>
  );
}
