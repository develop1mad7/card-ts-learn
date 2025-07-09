export const getQueryParamsPage = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get("_page") ?? "1";
};
