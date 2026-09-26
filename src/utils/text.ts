export const toParagraphs = (text: string) =>
  text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");

export const formatPrice = (price: string | number) =>
  Number(price).toFixed(2).replace(".", ",");

const withEllipsis = (text: string) =>
  `${text.replace(/[\s,;:.–-]+$/, "")}…`;

export const truncateText = (text: string, maxLength: number): string => {
  if (maxLength <= 0) return "";
  if (text.length <= maxLength) return text;

  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  const wordSafe = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;

  return withEllipsis(wordSafe);
};

export const truncateParagraphs = (
  text: string,
  maxLines: number,
  charsPerLine: number,
): string[] => {
  const paragraphs = toParagraphs(text);
  const result: string[] = [];
  let linesLeft = maxLines;

  for (const [index, paragraph] of paragraphs.entries()) {
    const lines = Math.ceil(paragraph.length / charsPerLine);

    if (lines > linesLeft) {
      result.push(truncateText(paragraph, linesLeft * charsPerLine - 1));
      break;
    }

    result.push(paragraph);
    linesLeft -= lines;

    if (linesLeft === 0 && index < paragraphs.length - 1) {
      result[result.length - 1] = withEllipsis(paragraph);
      break;
    }
  }

  return result;
};
