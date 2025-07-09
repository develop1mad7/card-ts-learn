import { RESPONSE_PAGE_DATA } from "../shared/constants";
import { loader } from "../shared/loader";
import type { listItems } from "../shared/type";
import axios from "axios";
import { getAxios } from "./getAxios";

export const getData = async (
  url: string,
  page: number
): Promise<{ items: listItems; pagination?: number }> => {
  let pagination = 0;
  if (RESPONSE_PAGE_DATA.pages && page in RESPONSE_PAGE_DATA.pages) {
    return RESPONSE_PAGE_DATA.pages[page];
  }

  loader(document.querySelector(".grid"), true);
  loader(document.querySelector(".container-pagination"), true);
  try {
    const res = await getAxios(url, page);
    console.log(res);
    const dataItems = res.data ?? null;

    if (dataItems && dataItems.data && !RESPONSE_PAGE_DATA.lenPage) {
      const { pages, items } = dataItems;
      pagination = pages;
      RESPONSE_PAGE_DATA.lenPage = pages;
      RESPONSE_PAGE_DATA.countItems = items;
    }

    RESPONSE_PAGE_DATA.pages[page] = {
      items: dataItems.data,
    };

    return {
      items: dataItems.data,
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
