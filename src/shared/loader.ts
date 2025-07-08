export const loader = (node: HTMLElement | null, state: boolean): void => {
  if (node) {
    if (state) {
      node.classList.add("--loader");
    } else {
      node.classList.remove("--loader");
    }
  }
};
