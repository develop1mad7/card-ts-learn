import { PER_PAGE } from "../shared/constants";
import type { ItemProps, PaginationType } from "../shared/type";
import axios from "axios";

export const getData = async (
  url: string
): Promise<{ items: ItemProps[]; pagination: PaginationType }> => {
  let pagination: PaginationType = {
    first: 0,
    prev: 0,
    next: 0,
    last: 0,
  };
  try {
    const res = await axios.get(`http://localhost:3030/${url}`, {
      params: { _page: 1, _per_page: PER_PAGE },
    });
    const { first, prev, next, last } = res.data;
    pagination = { first, prev, next, last };
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
