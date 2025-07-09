import { initGrid } from "./grid/";
import { CreatePagination } from "./pagination/createPagination";
import { handlePagination } from "./pagination/handlePagination";
import type { GridProps } from "./shared/type";
import { getData } from "./utils";
import { getQueryParamsPage } from "./utils/getQueryParamsPAge";

import "./style.scss";

const dataBooks = await getData("dataBook", getQueryParamsPage());
// const dataLearn: GridProps = {
//   gridContainer: $gridContainer,
//   listItems: dataLearnYoutube,
//   title: "TS - типизация JS",
// };
const dataBook: GridProps = {
  listItems: dataBooks.items,
  pagination: dataBooks.pagination,
  title: "TS - Борис Черный",
  url: "dataBook",
};

// Видео
//   initGrid(dataLearn);

// Книга
initGrid(dataBook);

if (dataBook.pagination) {
  CreatePagination(dataBook.pagination);
  handlePagination(dataBook.url);
}
