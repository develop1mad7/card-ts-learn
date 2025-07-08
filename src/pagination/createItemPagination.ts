export const CreateItemPagination = (item: number): HTMLButtonElement => {
  const btn = document.createElement("button");
  btn.className = "container-pagination__btn";

  const currentItem = item.toString();
  btn.textContent = currentItem;
  btn.setAttribute("data-page-num", currentItem);

  return btn;
};
