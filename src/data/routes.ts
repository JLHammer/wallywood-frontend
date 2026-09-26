import { generatePath } from "react-router-dom";

export const ROUTES = {
  home: "/",
  posters: "/posters",
  postersByGenre: "/posters/genre/:genreSlug",
  postersDetails: "/posters/:posterSlug",
  about: "/about",
  contact: "/contact",
  login: "/login",
  signup: "/signup",
  changePassword: "/change-password",
  likedPosters: "/favorites",
  checkout: "/checkout",
} as const;

const { home, posters, about, contact } = ROUTES;

export const NAV_LINKS = [
  { path: home, label: "Forside" },
  { path: posters, label: "Plakater" },
  { path: about, label: "Om os" },
  { path: contact, label: "Kontakt os" },
] as const;

export const genrePath = (genreSlug: string) =>
  generatePath(ROUTES.postersByGenre, { genreSlug });

export const posterPath = (posterSlug: string) =>
  generatePath(ROUTES.postersDetails, { posterSlug });
