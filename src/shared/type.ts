export type ItemProps = {
  title: string;
  desc: string;
};
export type PaginationProps = {
  pages: number;
};
export interface GridProps {
  gridContainer?: HTMLDivElement;
  listItems?: ItemProps[];
  pagination?: number;
  title?: string;
  url?: string;
}
