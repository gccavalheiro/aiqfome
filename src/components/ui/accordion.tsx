import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

const AccordionRoot = (props: AccordionProps) => {
  const { ...rest } = props;

  return <AccordionPrimitive.Root data-slot="accordion" {...rest} />;
};

type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

const AccordionItem = (props: AccordionItemProps) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("group border-b-4 last:border-b-0", className)}
      {...rest}
    />
  );
};

type AccordionHeaderProps = React.ComponentProps<
  typeof AccordionPrimitive.Header
>;

const AccordionHeader = (props: AccordionHeaderProps) => {
  const { className, ...rest } = props;

  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={cn("flex", className)}
      {...rest}
    />
  );
};

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;

const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { className, children, ...rest } = props;

  return (
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        "focus-visible:border-ring flex flex-1 items-start justify-between gap-4 px-4 py-3 transition-all outline-none group-focus-within:bg-neutral-50 hover:bg-neutral-100 focus-visible:ring-[3px] focus-visible:ring-purple-400/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...rest}
    >
      {children}
      <FontAwesomeIcon
        icon={faChevronDown}
        className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-xl transition-transform duration-200"
      />
    </AccordionPrimitive.Trigger>
  );
};

type AccordionContentProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>;

const AccordionContent = (props: AccordionContentProps) => {
  const { className, ...rest } = props;

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden",
        className,
      )}
      {...rest}
    />
  );
};

export const Accordion = {
  Root: AccordionRoot,
  Content: AccordionContent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
};
