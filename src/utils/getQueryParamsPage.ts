import { RESPONSE_PAGE_DATA } from "../shared/constants";

export const getQueryParamsPage = (): number => {
  const params = new URLSearchParams(window.location.search);
  const page = Number(params.get("_page"));
  if (page < 1) {
    return 1;
  } else if (RESPONSE_PAGE_DATA.lenPage && page > RESPONSE_PAGE_DATA.lenPage) {
    return RESPONSE_PAGE_DATA.lenPage;
  }
  return page;
};
