export const SORT_OPTIONS = [
  { value: "name-asc", label: "Navn (A-Å)", sortBy: "name", sort: "asc" },
  { value: "name-desc", label: "Navn (Å-A)", sortBy: "name", sort: "desc" },
  { value: "price-asc", label: "Pris (lav-høj)", sortBy: "price", sort: "asc" },
  {
    value: "price-desc",
    label: "Pris (høj-lav)",
    sortBy: "price",
    sort: "desc",
  },
  { value: "newest", label: "Nyeste", sortBy: "createdAt", sort: "desc" },
] as const;

export const getSortOption = (value: string | null) =>
  SORT_OPTIONS.find((option) => option.value === value) ?? SORT_OPTIONS[0];
