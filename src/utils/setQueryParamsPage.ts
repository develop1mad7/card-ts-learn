export const setQueryParamsPage = (page: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set("_page", page);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, "", newUrl);
};
