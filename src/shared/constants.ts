import type { ResponsePageMap } from "./type";

export const PER_PAGE: number = 3;
export const RESPONSE_PAGE_DATA: {
  pages: ResponsePageMap;
  lenPage: number | null;
  countItems: number | null;
} = { pages: {}, lenPage: null, countItems: null };
