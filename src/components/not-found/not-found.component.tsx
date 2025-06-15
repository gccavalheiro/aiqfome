import { Icon, IconProps } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type NotFoundProps = React.HTMLAttributes<HTMLDivElement>;

function NotFoundRoot(props: NotFoundProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-8 text-neutral-500",
        className,
      )}
      {...rest}
    />
  );
}

type NotFoundIconProps = IconProps;

function NotFoundIcon(props: NotFoundIconProps) {
  const { ...rest } = props;

  return <Icon {...rest} />;
}

type NotFoundContentProps = React.HTMLAttributes<HTMLDivElement>;

function NotFoundContent(props: NotFoundContentProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex flex-col", className)} {...rest} />;
}

type NotFoundTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function NotFoundTitle(props: NotFoundTitleProps) {
  const { className, ...rest } = props;

  return <h2 className={cn("text-lg font-extrabold", className)} {...rest} />;
}

type NotFoundDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

function NotFoundDescription(props: NotFoundDescriptionProps) {
  const { className, ...rest } = props;

  return <p className={cn("text-sm", className)} {...rest} />;
}

export const NotFound = {
  Root: NotFoundRoot,
  Icon: NotFoundIcon,
  Content: NotFoundContent,
  Title: NotFoundTitle,
  Description: NotFoundDescription,
};
