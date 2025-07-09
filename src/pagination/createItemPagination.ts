import { getQueryParamsPage } from "../utils/getQueryParamsPAge";

export const CreateItemPagination = (item: number): HTMLButtonElement => {
  const btn = document.createElement("button");
  btn.className = "container-pagination__btn";

  const currentPage = Number(getQueryParamsPage());

  if (item === currentPage) btn.classList.add("--active");

  const currentItem = item.toString();
  btn.textContent = currentItem;
  btn.setAttribute("data-page-num", currentItem);

  return btn;
};
