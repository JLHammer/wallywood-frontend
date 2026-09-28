// value:  the ?sort= value in the URL
// label:  the text shown in the sort select
// sortBy: the API field to sort by
// sort:   the API sort direction
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

// Returns the option matching ?sort=
// If no match, returns the first option (name-asc)
export const getSortOption = (value: string | null) =>
  SORT_OPTIONS.find((option) => option.value === value) ?? SORT_OPTIONS[0];
