import axios from "axios";
import { PER_PAGE } from "../shared/constants";

export const getAxios = async (url: string, page: number) => {
  return await axios.get(`http://localhost:3030/${url}?_page=${page}`, {
    params: { _per_page: PER_PAGE },
  });
};
