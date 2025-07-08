import type { GridProps } from "../shared/type";
import { generatedItems } from "./GeneratedItems";

export const createGridLearn = async ({
  gridContainer,
  listItems,
  title,
}: GridProps): Promise<void> => {
  if (!gridContainer) return;

  document.body.append(gridContainer);
  const $title = document.querySelector<HTMLTitleElement>("h1");

  if ($title) {
    $title.textContent = title || "";
  }
  if (gridContainer) {
    gridContainer.innerHTML = "";

    if (Array.isArray(listItems)) {
      generatedItems({ listItems, gridContainer });
    }
  }
};
