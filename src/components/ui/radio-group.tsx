import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroupRoot(props: RadioGroupProps) {
  const { className, ...rest } = props;

  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...rest}
    />
  );
}

type RadioGroupItemProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>;

function RadioGroupItem(props: RadioGroupItemProps) {
  const { className, ...rest } = props;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "focus-visible:border-ring aria-invalid:ring-destructive/20 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border border-neutral-400 text-neutral-500 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-purple-400/50 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center text-purple-500"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-purple-500" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
