import { cn } from "@/lib/utils";

type FooterRootProps = React.HTMLAttributes<HTMLElement>;

function FooterRoot(props: FooterRootProps) {
  const { className, ...rest } = props;

  return <footer className={cn("bg-neutral-100 py-6", className)} {...rest} />;
}

type FooterContainerProps = React.HTMLAttributes<HTMLDivElement>;

function FooterContainer(props: FooterContainerProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "container-default flex flex-col items-center justify-center gap-2 text-center text-purple-500",
        className,
      )}
      {...rest}
    />
  );
}

type FooterLocationProps = React.HTMLAttributes<HTMLDivElement>;

function FooterLocation(props: FooterLocationProps) {
  const { className, ...rest } = props;

  return <h6 className={cn("text-sm font-bold", className)} {...rest} />;
}

type FooterCopyrightProps = React.HTMLAttributes<HTMLDivElement>;

function FooterCopyright(props: FooterCopyrightProps) {
  const { className, ...rest } = props;

  return <h5 className={cn("text-base font-bold", className)} {...rest} />;
}

export const Footer = {
  Root: FooterRoot,
  Container: FooterContainer,
  Location: FooterLocation,
  Copyright: FooterCopyright,
};
