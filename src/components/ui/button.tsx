import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap cursor-pointer rounded-md text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-purple-400/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-purple-500 text-neutral-0 hover:bg-purple-700",
        ghost: "disabled:bg-neutral-100 disabled:text-neutral-400",
        outline:
          "border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-neutral-0",
        link: "text-teal-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button(props: ButtonProps) {
  const { className, variant, size, asChild = false, ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      aria-disabled={rest.disabled}
      {...rest}
    />
  );
}

export { Button };
