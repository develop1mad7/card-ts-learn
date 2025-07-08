import { PER_PAGE, RESPONSE_PAGE } from "../shared/constants";
import type { ItemProps } from "../shared/type";
import axios from "axios";

export const getData = async (
  url: string,
  page: string
): Promise<{ items: ItemProps[]; pagination?: number }> => {
  let pagination = 0;
  if (page in RESPONSE_PAGE) {
    return RESPONSE_PAGE[page];
  }
  try {
    const res = await axios.get(`http://localhost:3030/${url}`, {
      params: { _page: page, _per_page: PER_PAGE },
    });

    const { pages } = res.data;
    pagination = pages;

    RESPONSE_PAGE[page] = {
      items: res.data.data,
    };

    return {
      items: res.data.data,
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
      items: [],
      pagination,
    };
  }
};
