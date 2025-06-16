import { RadioGroup } from "@/components/ui/radio-group";

interface ProductPageUtensilItemProps {
  id: string;
  label: string;
  value: number;
}

export function ProductPageUtensilItem(props: ProductPageUtensilItemProps) {
  const { id, label, value } = props;

  return (
    <label
      key={id}
      htmlFor={id}
      className="flex items-center justify-between rounded-sm p-2 hover:bg-neutral-50"
    >
      <div className="flex items-center gap-2">
        <RadioGroup.Item value={id} id={id} />
        <span className="text-sm font-normal">{label}</span>
      </div>

      {value > 0 && (
        <div className="flex flex-wrap items-baseline gap-1 text-right">
          <span className="text-right text-sm font-bold text-purple-500">
            +R$ {value.toFixed(2)}
          </span>
        </div>
      )}
    </label>
  );
}
