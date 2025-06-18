import { CheckoutItem } from "@/components/checkout/checkout-item";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CheckoutItemProps } from "@/utils/restaurant";
import {
  faPencilAlt,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface CheckoutPageItemProps {
  item: CheckoutItemProps;
}

export function CheckoutPageItem(props: CheckoutPageItemProps) {
  const { item } = props;
  const { id, name, price, quantity, restaurantId, productId } = item;

  return (
    <CheckoutItem.Root key={id}>
      <CheckoutItem.EditButton asChild>
        <Link href={`/restaurants/${restaurantId}/products/${productId}`}>
          <Icon icon={faPencilAlt} size={12} />
          editar
        </Link>
      </CheckoutItem.EditButton>

      <CheckoutItem.Header>
        <CheckoutItem.Title>{name}</CheckoutItem.Title>
        <div className="flex justify-between">
          <CheckoutItem.Price>R$ {price.toFixed(2)}</CheckoutItem.Price>
          <CheckoutItem.Quantity>
            <Button
              variant="ghost"
              className="h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-transparent p-0 text-teal-400 hover:text-teal-700"
            >
              <Icon icon={faTrashAlt} size={20} />
            </Button>
            <span className="xs:min-w-8 min-w-5 flex-1 text-center text-sm font-bold text-neutral-700">
              {quantity}
            </span>
            <Button
              variant="ghost"
              className="hover:text-neutral-0 h-6 min-h-6 w-6 max-w-6 min-w-6 rounded-full border border-teal-400 p-0 text-teal-400 hover:bg-teal-400"
            >
              <Icon icon={faPlus} size={14} />
            </Button>
          </CheckoutItem.Quantity>
        </div>
      </CheckoutItem.Header>

      <CheckoutItem.Resume>
        <CheckoutItem.ResumeHeader>tamanho</CheckoutItem.ResumeHeader>
        <CheckoutItem.ResumeContent>
          <p>médio</p>
        </CheckoutItem.ResumeContent>
      </CheckoutItem.Resume>

      <CheckoutItem.Resume>
        <CheckoutItem.ResumeHeader>
          vai querer bebida?
        </CheckoutItem.ResumeHeader>
        <CheckoutItem.ResumeContent>
          <p className="flex items-center gap-2">
            médio
            <span className="font-bold text-teal-400">+R$ 5,00</span>
          </p>
          <p className="flex items-center gap-2">salsinha</p>
          <p className="flex items-center gap-2">shemeji</p>
        </CheckoutItem.ResumeContent>
      </CheckoutItem.Resume>

      <CheckoutItem.Observation>
        <p className="text-xs font-semibold text-neutral-700">
          <span className="font-bold">observação:</span> tirar a cebolinha
        </p>
      </CheckoutItem.Observation>
    </CheckoutItem.Root>
  );
}
