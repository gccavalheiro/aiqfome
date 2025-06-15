import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../ui/icon";

export function DeliveryLocation() {
  return (
    <button className="flex flex-1 items-center gap-2.5" type="button">
      <Icon icon={faLocationDot} className="xs:text-xl text-base" />

      <span className="flex flex-col items-start">
        <span className="text-sm font-bold text-purple-200">entregando em</span>
        <span className="inline-flex items-center gap-2 text-base font-bold whitespace-nowrap">
          <span className="xs:max-w-40 max-w-32 truncate">
            Rua Mandaguari Almeida
          </span>
          <span>, 198</span>
          <Icon icon={faChevronRight} className="xs:text-sm text-xs" />
        </span>
      </span>
    </button>
  );
}
