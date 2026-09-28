import { useEffect, useState } from "react";

// Returns whether a CSS media query matches, and updates when it changes.
// For cases where styled-components media queries are not enough, like
// rendering a different component on mobile.
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Sync right away in case the query itself changed.
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
