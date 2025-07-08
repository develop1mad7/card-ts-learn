import axios from "axios";
import { SetItem } from "../grid/SetItems";
import type { GridProps } from "../shared/type";
import { PER_PAGE } from "../shared/constants";

export const FormCreateItemLearn = ({
  url,
  listItems,
  gridContainer,
}: GridProps) => {
  const $form = document.querySelector(".grid-form") as HTMLFormElement;
  const $titleInput = $form.querySelector(
    ".grid-form__input"
  ) as HTMLInputElement;
  const $descInput = $form.querySelector(
    ".grid-form__textarea"
  ) as HTMLTextAreaElement;

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = $titleInput.value.trim();
    const description = $descInput.value.trim();

    if (title && description) {
      try {
        const res = await axios.post(`http://localhost:3030/${url}`, {
          title,
          desc: description,
        });
        const data = await res.data;
        $titleInput.value = "";
        $descInput.value = "";

        if (listItems?.length && listItems.length < PER_PAGE && gridContainer) {
          listItems?.push(data);
          SetItem(data, gridContainer);
        }
        return data;
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
