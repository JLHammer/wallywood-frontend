import type { ChangeEvent } from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useGenres } from "../../hooks/useGenres";
import { ROUTES, genrePath } from "../../router/routes";
import { theme } from "../../styles/theme";
import { Select } from "./form/Select";
import { SelectField } from "./form/SelectField";

const GenreNavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.xxs};

  ${theme.media.desktop} {
    display: block;
    font-size: ${theme.desktop.fontSizes.content};
  }
`;

const FiltersHeading = styled.h2`
  text-align: center;
  color: ${theme.colors.black};

  ${theme.media.desktop} {
    text-align: left;
    font-family: ${theme.fonts.body};
    font-size: ${theme.desktop.fontSizes.contentTitle};
  }
`;

const GenreHeading = styled.h3`
  ${theme.media.desktop} {
    margin-top: ${theme.desktop.spacing.xs};
    font-size: ${theme.desktop.fontSizes.content};
  }
`;

const GenreSelectField = styled(SelectField)`
  ${theme.media.desktop} {
    display: none;
  }
`;

const GenreList = styled.div`
  display: none;

  ${theme.media.desktop} {
    display: block;
  }
`;

const GenreLink = styled(NavLink)`
  &.active {
    color: ${theme.colors.orange};
  }
`;

const FavoritesLink = styled(Link)`
  display: block;
  margin-top: ${theme.desktop.spacing.xxl};
  font-weight: ${theme.fontWeights.bold};
`;

export const GenreNav = () => {
  const { genres, error, isLoading } = useGenres();
  const { genreSlug = "" } = useParams();
  const navigate = useNavigate();

  if (isLoading) return null;
  if (error) return <p>Kunne ikke hente genrer</p>;

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const slug = event.target.value;
    navigate(slug ? genrePath(slug) : ROUTES.posters);
  };

  return (
    <GenreNavStyled>
      <FiltersHeading>Filtre</FiltersHeading>

      <GenreSelectField>
        <Select value={genreSlug} onChange={handleGenreChange}>
          <option value="">Alle genrer</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.slug}>
              {genre.title}
            </option>
          ))}
        </Select>
      </GenreSelectField>

      <GenreList>
        <GenreHeading>Genre</GenreHeading>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              <GenreLink to={genrePath(genre.slug)}>{genre.title}</GenreLink>
            </li>
          ))}
        </ul>
        <FavoritesLink to={ROUTES.likedPosters}>Favoritter</FavoritesLink>
      </GenreList>
    </GenreNavStyled>
  );
};
