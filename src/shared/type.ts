export type ItemProps = {
  title: string;
  desc: string;
};
export type PaginationType = {
  first: number;
  prev: number;
  next: number;
  last: number;
};
export interface GridProps {
  gridContainer?: HTMLDivElement;
  listItems?: ItemProps[];
  pagination?: PaginationType;
  title?: string;
  url?: string;
}
