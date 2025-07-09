import { generatedItems } from "../grid/GeneratedItems";
import { getData } from "../utils";
import { setQueryParamsPage } from "../utils/setQueryParamsPage";

export const handlePaginationClick = async (e: MouseEvent, url: string) => {
  if (e.currentTarget instanceof HTMLButtonElement) {
    const target = e.currentTarget;
    const parentTarget = target.parentElement;
    const $gridContainer = document.querySelector<HTMLDivElement>(".grid");

    const attrPageNum = Number(target.dataset.pageNum);
    const pageNum = Number.isNaN(attrPageNum) ? 1 : attrPageNum;

    setQueryParamsPage(pageNum);

    const data = await getData(url, pageNum);
    parentTarget?.querySelector(".--active")?.classList.remove("--active");

    if (Array.isArray(data.items) && data.items.length > 0 && $gridContainer) {
      $gridContainer.innerHTML = "";
      target.classList.add("--active");
      generatedItems({
        listItems: data.items,
        gridContainer: $gridContainer,
      });
    }
  }
};

export const handlePagination = (url: string | undefined) => {
  if (url) {
    const $btnsPagination = document.querySelectorAll<HTMLButtonElement>(
      ".container-pagination__btn"
    );

    $btnsPagination.forEach((btn) => {
      btn.addEventListener("click", (e) => handlePaginationClick(e, url));
    });
  }
};
