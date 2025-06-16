import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ProductPageDrinkItemProps {
  id: string;
  label: string;
  value: number;
}

export function ProductPageDrinkItem(props: ProductPageDrinkItemProps) {
  const { id, label, value } = props;

  return (
    <div
      className="flex flex-1 gap-3 rounded-sm p-2 hover:bg-neutral-50"
      key={id}
    >
      <div className="flex w-fit items-center justify-between gap-2">
        <Button
          variant="ghost"
          disabled
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:border-teal-400 hover:bg-teal-400 disabled:border-neutral-100"
        >
          <Icon icon={faMinus} size={14} />
        </Button>
        <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
          99
        </span>
        <Button
          variant="ghost"
          className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
        >
          <Icon icon={faPlus} size={14} />
        </Button>
      </div>

      <span className="flex-1 text-sm leading-tight">{label}</span>

      <p className="ml-auto text-sm font-bold whitespace-nowrap text-purple-500">
        +R$ {value.toFixed(2)}
      </p>
    </div>
  );
}
