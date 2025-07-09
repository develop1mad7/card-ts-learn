export const setQueryParamsPage = (page: number) => {
  if (page > 0) {
    const params = new URLSearchParams(window.location.search);
    params.set("_page", page.toString());

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.pushState(null, "", newUrl);
  }
};
