import { generatedItems } from "../grid/GeneratedItems";
import { getData } from "../utils";

export const handlePagination = (url: string | undefined) => {
  if (!url) return;

  const $gridContainer = document.querySelector<HTMLDivElement>(".grid");
  const $btnsPagination = document.querySelectorAll<HTMLButtonElement>(
    ".container-pagination__btn"
  );
  const handleClick = async (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    const page: string = target.dataset.pageNum ? target.dataset.pageNum : "";
    const data = await getData(url, page);
    if (data && $gridContainer) {
      $gridContainer.innerHTML = "";
      generatedItems({ listItems: data.items, gridContainer: $gridContainer });
    }
  };

  $btnsPagination.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });
};
