# Wallywood — frontend

A React webshop for film posters, built as an individual TechCollege school project. Users can browse posters by genre, open a poster to see its details, add posters to a shopping cart and view what is in the cart. Poster and genre data comes from our own API, [wallywood-api](https://github.com/JLHammer/wallywood-api).

Payment and completing an order are out of scope: the checkout page only shows a placeholder message.

## Features

- **Front page** with a hero image and four random posters (the user can fetch four new ones).
- **Poster list** filtered by genre from a side nav, with sorting and pagination.
- **Poster details** with description, size, SKU, price, an "add to cart" button and a like button.
- **Cart** as a slide-in panel opened from the header. The user can change quantities, remove posters or empty the cart, and the cart is saved in `localStorage` so it survives a page reload. "Til checkout" sends guests to login first.
- **Login and signup**. When logged in, the login page shows a profile with logout and a link to change the password.
- **Favourites**: logged-in users can like posters and see them on a favourites page. A guest who clicks like is sent to login, and the like is saved right after.
- **Protected pages**: the favourites and change password pages redirect guests to login and back again afterwards.
- **About** and **contact** pages (the contact form is validated but not sent anywhere).
- **Checkout placeholder**: checkout is out of scope, so the page only says so.
- **404 page** for unknown URLs, with a link back to the front page.
- **Form validation** with React Hook Form and Zod on all forms (login, signup, contact, change password).
- **Responsive** layout for mobile, tablet (≥768px) and desktop (≥1024px), following the [Figma design](https://www.figma.com/design/6ckAiiYFbcNct4BvaACSfD/Wallywood).

## Tech stack

- [React 19](https://react.dev/) with the React Compiler
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for routing
- [styled-components](https://styled-components.com/) for styling
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form validation
- [Motion](https://motion.dev/) for animations
- [React Icons](https://react-icons.github.io/react-icons/) and [React Spinners](https://www.davidhu.io/react-spinners/)
- [Oxlint](https://oxc.rs/) for linting and [Prettier](https://prettier.io/) for formatting

## Getting started

### Prerequisites

- Node.js 20+ and npm
- The [Wallywood API](https://github.com/JLHammer/wallywood-api) running locally. Follow its README to set it up, and make sure its `CORS_ORIGIN` includes `http://localhost:5173` so the frontend is allowed to call it.

### Install and run

```sh
npm install
cp .env.example .env
npm run dev
```

The app runs at http://localhost:5173.

### Environment variables

| Variable       | Default                 | Description                 |
| -------------- | ----------------------- | --------------------------- |
| `VITE_API_URL` | `http://localhost:3000` | Base URL of the Wallywood API |

### Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                    |
| `npm run build`   | Type-check and build for production          |
| `npm run preview` | Preview the production build                 |
| `npm run lint`    | Lint the code with Oxlint                    |

## Project structure

```
src/
  pages/          one component per route, composed of sections
  components/
    layout/       layout routes that render <Outlet /> (MainLayout, PostersLayout)
    partials/     Header, Footer, NavBar
    sections/     page-level blocks (HeroSection, PostersListSection, ...)
    ui/           small reusable pieces (buttons, cards, forms, cart, ...)
  context/        Auth, Cart and Likes providers
  hooks/          useFetch plus data, action and context hooks (usePosters, useSignup, useCart, ...)
  router/         AppRouter, ProtectedRoute and routes.ts (all route paths and nav links)
  data/           static config: sort options, socials, about text
  schemas/        Zod schemas and form value types
  styles/         theme and global styles
  types/          API and cart types
  utils/          API URL and text helpers
```

- **Routing**: all route paths live in `src/router/routes.ts`. Layouts are nested layout routes, so every page gets the header and footer from `MainLayout`, and the poster pages also get the genre nav and sort select from `PostersLayout`.
- **Data fetching** goes through a generic `useFetch<T>` hook, wrapped in domain hooks such as `usePosters`, `usePoster` and `useGenres`. Genre, sort and page are read from the URL.
- **The cart** lives in `CartProvider` (React context) and is read through the `useCart` hook. The provider keeps the cart items, calculates the count and total, and saves the items to `localStorage` on every change.
- **Styling** uses styled-components only. All colours, sizes, spacing and breakpoints come from `src/styles/theme.ts`, and layouts are built mobile-first.
- **Login** is handled by `AuthProvider`. The user and access token are kept in memory only; on start the app restores the login from the API's HTTP-only refresh cookie, and it refreshes the token every 15 minutes while logged in.
