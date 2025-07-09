import { generatedItems } from "../grid/GeneratedItems";
import { getData } from "../utils";
import { setQueryParamsPage } from "../utils/setQueryParamsPage";

export const handlePagination = (url: string | undefined) => {
  if (url) {
    const $gridContainer = document.querySelector<HTMLDivElement>(".grid");
    const $btnsPagination = document.querySelectorAll<HTMLButtonElement>(
      ".container-pagination__btn"
    );

    const handleClick = async (e: MouseEvent) => {
      if (e.currentTarget instanceof HTMLButtonElement) {
        const target = e.currentTarget;
        const page: string = target.dataset.pageNum
          ? target.dataset.pageNum
          : "";

        setQueryParamsPage(page);

        const data = await getData(url, page);
        target.parentElement
          ?.querySelector(".--active")
          ?.classList.remove("--active");

        if (
          Array.isArray(data.items) &&
          data.items.length > 0 &&
          $gridContainer
        ) {
          $gridContainer.innerHTML = "";
          target.classList.add("--active");
          generatedItems({
            listItems: data.items,
            gridContainer: $gridContainer,
          });
        }
      }
    };

    $btnsPagination.forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });
  }
};
