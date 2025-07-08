import { initGrid } from "./grid/";
import { CreatePagination } from "./pagination/createPagination";
import type { GridProps } from "./shared/type";
import "./style.scss";
import { getData } from "./utils";

// const dataLearnYoutube = await getData("dataLearn");
const dataBooks = await getData("dataBook");
console.log(dataBooks);
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
}
