export const loader = (node: HTMLElement | null, state: boolean) => {
  if (!node) return false;
  console.log(node.className);
  console.log(node);
  console.log(state);
  if (state) {
    node.classList.add("--loader");
  } else {
    node.classList.remove("--loader");
  }
};
