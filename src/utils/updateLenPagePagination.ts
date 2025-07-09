import { CreateItemPagination } from "../pagination/createItemPagination";
import { handlePaginationClick } from "../pagination/handlePagination";
import { RESPONSE_PAGE_DATA } from "../shared/constants";
import { getQueryParamsPage } from "./getQueryParamsPage";
import { setQueryParamsPage } from "./setQueryParamsPage";

export const updateLenPagePagination = (url: string) => {
  const currentPage = (RESPONSE_PAGE_DATA.lenPage = getQueryParamsPage() + 1);
  setQueryParamsPage(currentPage);

  const $containerPagination = document.querySelector(".container-pagination");
  const btnPagination = CreateItemPagination(currentPage);
  btnPagination.addEventListener("click", (e) => handlePaginationClick(e, url));
  $containerPagination?.insertAdjacentElement("beforeend", btnPagination);
  btnPagination.click();
};
