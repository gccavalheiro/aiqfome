import { cn } from "@/lib/utils";

type RestaurantPageRootProps = React.HTMLAttributes<HTMLElement>;

function RestaurantPageRoot(props: RestaurantPageRootProps) {
  const { className, ...rest } = props;

  return <section className={cn("py-6", className)} {...rest} />;
}

type RestaurantPageHeaderProps = React.HTMLAttributes<HTMLElement>;

function RestaurantPageHeader(props: RestaurantPageHeaderProps) {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        "container-default flex flex-col gap-2 md:gap-4",
        className,
      )}
      {...rest}
    />
  );
}

type RestaurantPageTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function RestaurantPageTitle(props: RestaurantPageTitleProps) {
  const { className, ...rest } = props;
  return (
    <h1
      className={cn(
        "text-xl font-extrabold text-neutral-900 md:text-3xl",
        className,
      )}
      {...rest}
    />
  );
}

type RestaurantPageDisplayProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantPageDisplay(props: RestaurantPageDisplayProps) {
  const { className, ...rest } = props;

  return (
    <div className={cn("flex items-center gap-2", className)} {...rest}></div>
  );
}

type RestaurantPageActionsProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantPageActions(props: RestaurantPageActionsProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...rest}
    />
  );
}

type RestaurantPageInfoProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantPageInfo(props: RestaurantPageInfoProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex flex-col gap-2", className)} {...rest} />;
}

export const RestaurantPage = {
  Root: RestaurantPageRoot,
  Header: RestaurantPageHeader,
  Title: RestaurantPageTitle,
  Display: RestaurantPageDisplay,
  Actions: RestaurantPageActions,
  Info: RestaurantPageInfo,
};
