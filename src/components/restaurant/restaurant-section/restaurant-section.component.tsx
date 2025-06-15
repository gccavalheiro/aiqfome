import { cn } from "@/lib/utils";
import React from "react";

type RestaurantSectionProps = React.HTMLAttributes<HTMLElement>;

function RestaurantRoot(props: RestaurantSectionProps) {
  const { className, ...rest } = props;

  return (
    <section className={cn("py-6 [&+&]:pt-0", className)} {...rest} />
  );
}

type RestaurantTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function RestaurantTitle(props: RestaurantTitleProps) {
  const { className, ...rest } = props;

  return (
    <h2
      className={cn("mb-4 text-xl font-extrabold text-purple-500", className)}
      {...rest}
    />
  );
}

export const RestaurantSection = {
  Root: RestaurantRoot,
  Title: RestaurantTitle,
};
