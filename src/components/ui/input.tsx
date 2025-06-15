import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type = "text", ...rest } = props;

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(className)}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
