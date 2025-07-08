import type { PaginationType } from "../shared/type";
export const CreatePagination = ({
  first,
  prev,
  last,
  next,
}: PaginationType) => {
  const listPagination: number[] = [first, prev, last, next].sort();
  const containerPagination = document.createElement("div");
  containerPagination.className = "container-pagination";
  const itemsPagination = listPagination
    .map((item, idx, arr) => {
      const btn = document.createElement("button");
      btn.textContent = item ? item.toString() : "";
      if (idx === Math.floor((arr.length - 1) / 2) && arr.length) {
        const span = document.createElement("span");
        span.textContent = "...";
        return [btn, span];
      }
      return btn;
    })
    .flat();
  containerPagination.append(...itemsPagination);
  document.body.append(containerPagination);
};
