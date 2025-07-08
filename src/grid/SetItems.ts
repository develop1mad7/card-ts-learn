import { templateItem } from "../shared";
import type { ItemProps } from "../shared/type";

export const SetItem = (item: ItemProps, gridContainer: HTMLDivElement) => {
  const itemLearm = templateItem(item);
  gridContainer.insertAdjacentHTML("beforeend", itemLearm);
};
