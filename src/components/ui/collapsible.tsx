import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;

function CollapsibleRoot(props: CollapsibleProps) {
  const { ...rest } = props;

  return <CollapsiblePrimitive.Root data-slot="collapsible" {...rest} />;
}

type CollapsibleTriggerProps = React.ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  const { ...rest } = props;

  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...rest}
    />
  );
}

type CollapsibleContentProps = React.ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

function CollapsibleContent(props: CollapsibleContentProps) {
  const { ...rest } = props;

  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...rest}
    />
  );
}

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
};
