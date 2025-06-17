import { cn } from "@/lib/utils";
import React from "react";

type RestaurantCardListProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantCardList(props: RestaurantCardListProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
      {...rest}
    />
  );
}

type RestaurantCardProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantCardRoot(props: RestaurantCardProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "group flex w-full cursor-pointer overflow-hidden rounded-md bg-neutral-50 transition-colors duration-200 hover:bg-neutral-100",
        className,
      )}
      {...rest}
    />
  );
}

type RestaurantCardImageProps = React.HTMLAttributes<HTMLElement>;

function RestaurantCardImage(props: RestaurantCardImageProps) {
  const { className, ...rest } = props;

  return (
    <figure
      className={cn(
        "w-[4.5rem] min-w-[4.5rem] overflow-hidden rounded-md border border-neutral-100",
        className,
      )}
      {...rest}
    />
  );
}

type RestaurantCardContentProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantCardContent(props: RestaurantCardContentProps) {
  const { className, ...rest } = props;

  return (
    <div className={cn("w-full overflow-hidden p-3", className)} {...rest} />
  );
}

type RestaurantCardTitleProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantCardTitle(props: RestaurantCardTitleProps) {
  const { className, ...rest } = props;

  return (
    <h2
      className={cn("truncate font-bold text-neutral-700", className)}
      {...rest}
    />
  );
}

type RestaurantCardInfoProps = React.HTMLAttributes<HTMLDivElement>;

function RestaurantCardInfo(props: RestaurantCardInfoProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex items-center gap-2", className)} {...rest} />;
}

function RestaurantCardDelivery(props: RestaurantCardInfoProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-bold text-teal-600",
        className,
      )}
      {...rest}
    />
  );
}

function RestaurantCardFee(props: RestaurantCardInfoProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-bold text-purple-500",
        className,
      )}
      {...rest}
    />
  );
}

function RestaurantCardRating(props: RestaurantCardInfoProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-bold text-neutral-500",
        className,
      )}
      {...rest}
    />
  );
}

function RestaurantCardStatus(props: RestaurantCardInfoProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex items-center font-bold text-neutral-500", className)}
      {...rest}
    />
  );
}

export const RestaurantCard = {
  List: RestaurantCardList,
  Root: RestaurantCardRoot,
  Image: RestaurantCardImage,
  Content: RestaurantCardContent,
  Title: RestaurantCardTitle,
  Info: RestaurantCardInfo,
  Delivery: RestaurantCardDelivery,
  Fee: RestaurantCardFee,
  Rating: RestaurantCardRating,
  Status: RestaurantCardStatus,
};
