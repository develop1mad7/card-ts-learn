import { templateItem } from "../shared";
import type { ItemProps } from "../shared/type";

export const SetItem = (item: ItemProps, gridContainer: HTMLDivElement) => {
  console.log("asdasd");
  const itemLearm = templateItem(item);
  gridContainer.insertAdjacentHTML("beforeend", itemLearm);
};
