import { PER_PAGE, RESPONSE_PAGE } from "../shared/constants";
import { loader } from "../shared/loader";
import type { listItems } from "../shared/type";
import axios from "axios";

export const getData = async (
  url: string,
  page: string
): Promise<{ items: listItems; pagination?: number }> => {
  let pagination = 0;
  if (page in RESPONSE_PAGE) {
    return RESPONSE_PAGE[page];
  }
  loader(document.querySelector(".grid"), true);
  loader(document.querySelector(".container-pagination"), true);
  // console.log(object)
  try {
    const res = await axios.get(`http://localhost:3030/${url}?_page=${page}`, {
      params: { _per_page: PER_PAGE },
    });
    if (res && res.data) {
      const { pages } = res.data;
      pagination = pages;
    }

    const dataItems = res.data.data ? res.data.data : null;

    RESPONSE_PAGE[page] = {
      items: dataItems,
    };

    return {
      items: dataItems,
      pagination,
    };
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
    return {
      items: null,
      pagination,
    };
  } finally {
    loader(document.querySelector(".grid"), false);
    loader(document.querySelector(".container-pagination"), false);
  }
};
