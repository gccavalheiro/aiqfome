import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm tracking-wider border px-2 font-bold text-xs py-1.5 text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-purple-400/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-700 text-neutral-0 [a&]:hover:bg-neutral-700/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge(props: BadgeProps) {
  const { className, variant, asChild = false, ...rest } = props;
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...rest}
    />
  );
}

export { Badge };
