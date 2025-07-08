import type { GridProps } from "../shared/type";
import { SetItem } from "./SetItems";

export const generatedItems = ({ listItems, gridContainer }: GridProps) => {
  if (listItems?.length && gridContainer) {
    for (const item of listItems) {
      SetItem(item, gridContainer);
    }
  }
};
