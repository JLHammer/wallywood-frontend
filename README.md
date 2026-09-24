# Wallywood — frontend

A React webshop for film posters, built as an individual TechCollege school project. Users can browse posters by genre, open a poster to see its details, add posters to a shopping cart and view what is in the cart. Poster and genre data comes from our own API, [wallywood-api](https://github.com/JLHammer/wallywood-api).

Payment and completing an order are out of scope: the checkout page only shows a placeholder message.

## Features

- **Front page** with a hero image and four random posters (the user can fetch four new ones).
- **Poster list** filtered by genre from a side nav, with sorting and pagination.
- **Poster details** with description, size, SKU, price, an "add to cart" button and a like button.
- **Cart** as a slide-in panel opened from the header. The user can change quantities and remove posters, and the cart is saved in `localStorage` so it survives a page reload.
- **Login and signup**. Logged-in users can like posters and see their liked posters on a favourites page.
- **About** and **contact** pages (the contact form is validated but not sent anywhere).
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
    layout/       page shells (MainLayout, PostersLayout)
    partials/     Header, Footer, NavBar
    sections/     page-level blocks (HeroSection, PostersListSection, ...)
    ui/           small reusable pieces (buttons, cards, forms, cart, ...)
  context/        Auth, Cart and Likes providers
  hooks/          useFetch plus data and context hooks (usePosters, useCart, ...)
  router/         AppRouter
  data/           static config: routes, nav links, sort options, socials
  schemas/        Zod schemas for the forms
  styles/         theme, global styles and theme typing
  types/          API and cart types
  utils/          API URL and text helpers
```

- **Data fetching** goes through a generic `useFetch<T>` hook, wrapped in domain hooks such as `usePosters` and `useGenres`.
- **The cart** lives in `CartProvider` (React context) and is read through the `useCart` hook. The provider keeps the cart items, calculates the count and total, and saves the items to `localStorage` on every change.
- **Styling** uses styled-components only. All colours, sizes, spacing and breakpoints come from `src/styles/theme.ts`, and layouts are built mobile-first.
