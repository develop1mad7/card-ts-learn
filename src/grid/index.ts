import type { GridProps } from "../shared/type";
import { FormCreateItemLearn } from "../utils";
import { createGridLearn } from "./createGridLearn";

export const initGrid = ({ listItems, title, url }: GridProps): void => {
  const gridContainer = document.createElement("div");
  gridContainer.className = `grid --${url}`;

  createGridLearn({ gridContainer, listItems, title });
  if (gridContainer && listItems && title) {
    FormCreateItemLearn({ url, listItems, gridContainer });
  }
};
