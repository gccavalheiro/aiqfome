import { cn } from "@/lib/utils";
import React from "react";

type HeaderRootProps = React.HTMLAttributes<HTMLElement>;

function HeaderRoot(props: HeaderRootProps) {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        "text-neutral-0 fixed top-0 z-50 w-full bg-purple-500 py-4",
        className,
      )}
      {...rest}
    />
  );
}

type HeaderContainerProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContainer(props: HeaderContainerProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("container-default flex flex-col gap-4", className)}
      {...rest}
    />
  );
}

type HeaderContentProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContent(props: HeaderContentProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 md:gap-4 lg:gap-8",
        className,
      )}
      {...rest}
    />
  );
}

type HeaderLogoProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderLogo(props: HeaderLogoProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("xs:min-w-8 xs:w-8 h-auto w-6 min-w-6", className)}
      {...rest}
    />
  );
}

type HeaderLocationProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderLocation(props: HeaderLocationProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex items-center gap-2", className)} {...rest} />;
}

type HeaderSearchProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderSearch(props: HeaderSearchProps) {
  const { className, ...rest } = props;

  return <div className={cn("w-full", className)} {...rest} />;
}

type HeaderUserProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderUser(props: HeaderUserProps) {
  const { className, ...rest } = props;

  return <div className={cn("flex items-center gap-2", className)} {...rest} />;
}

export const Header = {
  Root: HeaderRoot,
  Container: HeaderContainer,
  Content: HeaderContent,
  Logo: HeaderLogo,
  Location: HeaderLocation,
  Search: HeaderSearch,
  User: HeaderUser,
};
