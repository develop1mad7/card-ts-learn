import { CreateItemPagination } from "./createItemPagination";

export const CreatePagination = (pages: number) => {
  const containerPagination = document.createElement("div");
  containerPagination.className = "container-pagination";
  for (let i = 0; i < pages; i++) {
    containerPagination.insertAdjacentElement(
      "beforeend",
      CreateItemPagination(i + 1)
    );
  }
  document.body.append(containerPagination);
};
