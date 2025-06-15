import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export type IconProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof iconVariants> & {
    icon: IconDefinition;
    fontSize?: number | string;
  };

const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      12: "text-xs",
      14: "text-sm",
      16: "text-base",
      20: "text-xl",
      24: "text-2xl",
    },
  },
  defaultVariants: {
    size: 16,
  },
});

function Icon(props: IconProps) {
  const { icon, size = 16, className, fontSize, ...rest } = props;

  return (
    <span className={cn(iconVariants({ size, className }))} {...rest}>
      <FontAwesomeIcon icon={icon} fontSize={fontSize} />
    </span>
  );
}

export { Icon };
