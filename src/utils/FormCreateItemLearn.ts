import axios from "axios";
import { SetItem } from "../grid/SetItems";
import type { listItems } from "../shared/type";
import { PER_PAGE, RESPONSE_PAGE_DATA } from "../shared/constants";
import { updateLenPagePagination } from "./updateLenPagePagination";

export const FormCreateItemLearn = ({
  url,
  gridContainer,
}: {
  url?: string;
  gridContainer: HTMLDivElement;
}) => {
  const $form = document.querySelector(".grid-form") as HTMLFormElement;
  const $titleInput = $form.querySelector(
    ".grid-form__input"
  ) as HTMLInputElement;
  const $descInput = $form.querySelector(
    ".grid-form__textarea"
  ) as HTMLTextAreaElement;

  let checkCurrentItems = RESPONSE_PAGE_DATA.countItems;
  const listItems: listItems = [];

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = $titleInput.value.trim();
    const desc = $descInput.value.trim();

    if (title && desc && url) {
      try {
        const res = await axios.post(`http://localhost:3030/${url}`, {
          title,
          desc,
        });

        const data = await res.data;

        $titleInput.value = "";
        $descInput.value = "";
        if (listItems && listItems.length < PER_PAGE && gridContainer) {
          listItems.push(data);
          SetItem(data, gridContainer);
        } else {
          listItems.length = 0;
        }
        if (checkCurrentItems) {
          checkCurrentItems++;
          if (checkCurrentItems % PER_PAGE === 1) {
            listItems.length = 0;
            updateLenPagePagination(url);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.error("Ошибка:", error.response.status);
          } else if (error.request) {
            console.error("Сервер не ответил");
          } else {
            console.error("Ошибка запроса:", error.message);
          }
        } else {
          console.error("Неизвестная ошибка", error);
        }
      }
    }
  });
};
