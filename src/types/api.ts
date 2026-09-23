export interface Genre {
  id: number;
  title: string;
  slug: string;
}

export interface Poster {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  width: number;
  height: number;
  price: string;
  stock: number;
  genres: Genre[];
}

export interface PostersResponse {
  posters: Poster[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface UserRating {
  id: number;
  userId: number;
  posterId: number;
  numStars: number;
}

export interface UserRatingsResponse {
  userRatings: UserRating[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface Like {
  posterId: number;
  createdAt: string;
  poster: Poster;
}

export interface LikesResponse {
  likes: Like[];
}
