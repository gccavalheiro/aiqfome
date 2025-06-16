import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type CheckoutItemProps = React.HTMLAttributes<HTMLDivElement>;

function CheckoutItemRoot(props: CheckoutItemProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-2 rounded-lg border p-4",
        className,
      )}
      {...rest}
    />
  );
}

type CheckoutItemEditButtonProps = React.ComponentProps<typeof Button>;

function CheckoutItemEditButton(props: CheckoutItemEditButtonProps) {
  const { className, ...rest } = props;

  return (
    <Button
      className={cn(
        "text-neutral-0 absolute -top-0.5 right-4 flex h-auto -translate-y-1/2 items-center gap-2 rounded-sm bg-teal-400 px-2 py-1 text-xs font-bold tracking-wide transition-colors duration-200 hover:bg-teal-700 md:py-1",
        className,
      )}
      {...rest}
    />
  );
}

type CheckoutItemHeaderProps = React.HTMLAttributes<HTMLDivElement>;

function CheckoutItemHeader(props: CheckoutItemHeaderProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex flex-col gap-1", className)} {...rest} />;
}

type CheckoutItemTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function CheckoutItemTitle(props: CheckoutItemTitleProps) {
  const { className, ...rest } = props;

  return (
    <h3
      className={cn(
        "truncate text-sm font-bold text-neutral-900 md:text-base",
        className,
      )}
      {...rest}
    />
  );
}

type CheckoutItemPriceProps = React.HTMLAttributes<HTMLParagraphElement>;

function CheckoutItemPrice(props: CheckoutItemPriceProps) {
  const { className, ...rest } = props;

  return (
    <p
      className={cn(
        "text-sm font-extrabold text-purple-500 md:text-base",
        className,
      )}
      {...rest}
    />
  );
}

type CheckoutItemQuantityProps = React.HtmlHTMLAttributes<HTMLDivElement>;

function CheckoutItemQuantity(props: CheckoutItemQuantityProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex w-fit items-center justify-between gap-2", className)}
      {...rest}
    />
  );
}

type CheckoutItemResumeProps = React.HTMLAttributes<HTMLDivElement>;

function CheckoutItemResume(props: CheckoutItemResumeProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex flex-col", className)} {...rest} />;
}

function CheckoutItemResumeHeader(props: CheckoutItemResumeProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("flex items-center gap-2", className)} {...rest}>
      <Icon icon={faCircle} fontSize={6} />
      <h5 className="text-sm font-bold text-neutral-500 md:text-base">
        {children}
      </h5>
    </div>
  );
}

function CheckoutItemResumeContent(props: CheckoutItemResumeProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "pl-3.5 text-xs font-semibold text-neutral-500 md:text-sm",
        className,
      )}
      {...rest}
    />
  );
}

type CheckoutItemObservationProps = React.HTMLAttributes<HTMLDivElement>;

function CheckoutItemObservation(props: CheckoutItemObservationProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("rounded-sm bg-neutral-50 p-1.5", className)}
      {...rest}
    />
  );
}

export const CheckoutItem = {
  Root: CheckoutItemRoot,
  EditButton: CheckoutItemEditButton,
  Header: CheckoutItemHeader,
  Title: CheckoutItemTitle,
  Price: CheckoutItemPrice,
  Quantity: CheckoutItemQuantity,
  Resume: CheckoutItemResume,
  ResumeHeader: CheckoutItemResumeHeader,
  ResumeContent: CheckoutItemResumeContent,
  Observation: CheckoutItemObservation,
};
