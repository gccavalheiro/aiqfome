import { cn } from "@/lib/utils";
import React from "react";

type HeroRootProps = React.HTMLAttributes<HTMLElement>;

function HeroRoot(props: HeroRootProps) {
  const { className, ...rest } = props;

  return (
    <section className={cn("mx-auto max-w-[1200px]", className)} {...rest} />
  );
}

export const Hero = {
  Root: HeroRoot,
};
