import type { ItemProps } from "../type";

export const templateItem = ({ title, desc }: ItemProps) => {
  return `<div class="grid__item">
        <h2 class="grid__item-title">${title}</h2>
        <p class="grid__item-description">${desc}</p>
      </div>`;
};
