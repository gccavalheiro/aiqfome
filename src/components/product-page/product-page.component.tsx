import { cn } from "@/lib/utils";

type ProductPageRootProps = React.HTMLAttributes<HTMLDivElement>;

function ProductPageRoot(props: ProductPageRootProps) {
  const { className, ...rest } = props;

  return <div className={cn("relative pb-11", className)} {...rest} />;
}

type ProductPageHeaderProps = React.HTMLAttributes<HTMLDivElement>;

function ProductPageHeader(props: ProductPageHeaderProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("container-default flex flex-col gap-4 py-4", className)}
      {...rest}
    />
  );
}

type ProductPageSectionProps = React.HTMLAttributes<HTMLElement>;

function ProductPageSection(props: ProductPageSectionProps) {
  const { className, ...rest } = props;

  return (
    <section
      className={cn("container-default flex flex-col gap-4 py-4", className)}
      {...rest}
    />
  );
}

type ProductPageQuantityProps = React.HTMLAttributes<HTMLDivElement>;

function ProductPageQuantity(props: ProductPageQuantityProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex items-center justify-between gap-4", className)}
      {...rest}
    />
  );
}

type ProductPageNotesTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };

function ProductPageNotesTextArea(props: ProductPageNotesTextAreaProps) {
  const {
    className,
    placeholder = "alguma observação do item? ex: tirar algum ingrediente, ponto do prato",
    value,
    onChange,
    ...rest
  } = props;

  return (
    <textarea
      rows={2}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "border-decorative-divider w-full font-bold resize-none rounded-sm border px-3 py-2 text-sm text-neutral-700 placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-500",
        className,
      )}
      {...rest}
    />
  );
}

type ProductPageActionProps = React.HTMLAttributes<HTMLDivElement>;

function ProductPageAction(props: ProductPageActionProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "bg-neutral-0 sticky bottom-0 mt-auto border-t py-6",
        className,
      )}
      {...rest}
    />
  );
}

export const ProductPage = {
  Root: ProductPageRoot,
  Header: ProductPageHeader,
  Section: ProductPageSection,
  Quantity: ProductPageQuantity,
  NotesTextArea: ProductPageNotesTextArea,
  Action: ProductPageAction,
};
