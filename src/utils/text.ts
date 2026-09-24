export const toParagraphs = (text: string) =>
  text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");

export const formatPrice = (price: string | number) =>
  Number(price).toFixed(2).replace(".", ",");
