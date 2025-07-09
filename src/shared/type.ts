export type ItemProps = {
  title: string;
  desc: string;
};
export type PaginationProps = {
  pages: number;
};
export type listItems = ItemProps[] | null;

export type ResponsePageMap = {
  [page: string]: { items: listItems };
};

export interface GridProps {
  gridContainer?: HTMLDivElement;
  listItems: listItems;
  pagination?: number;
  title?: string;
  url?: string;
}
