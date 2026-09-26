import { theme } from "../../styles/theme";
import styled from "styled-components";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { usePosters } from "../../hooks/usePosters";
import { useGenres } from "../../hooks/useGenres";
import { getSortOption } from "../../data/sortOptions";
import { PostersLayout } from "../layout/PostersLayout";
import { Loader } from "../ui/Loader";
import { PageTitle } from "../ui/PageTitle";
import { SortSelect } from "../ui/SortSelect";
import { PostersListCard } from "../ui/poster/PostersListCard";
import { Divider } from "../ui/Divider";
import { Pagination } from "../ui/Pagination";

const ListTitle = styled.h2`
  font-family: ${theme.fonts.body};
  font-size: ${theme.mobile.fontSizes.h3};
  color: ${theme.colors.black};

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.contentTitle};
  }
`;

const ListViewPostersList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, ${theme.tablet.sizes.listCardImageWidth});
    justify-content: space-evenly;
    row-gap: ${theme.tablet.spacing.xl};
  }

  ${theme.media.desktop} {
    grid-template-columns: repeat(3, ${theme.desktop.sizes.listCardWidth});
    justify-content: start;
    column-gap: ${theme.desktop.spacing.xxl};
  }
`;

export const PostersListSection = () => {
  const { genreSlug } = useParams();
  const [searchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page"));
  const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;
  const { sortBy, sort } = getSortOption(searchParams.get("sort"));

  const { data, error, isLoading } = usePosters({
    page,
    limit: 24,
    sortBy,
    sort,
    genreSlug,
  });
  const { data: genresData } = useGenres();
  const genre = genresData?.genres.find((g) => g.slug === genreSlug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPosters = () => {
    if (isLoading) return <Loader />;
    if (error || !data) return <p>Kunne ikke hente plakater</p>;
    if (data.posters.length === 0) return <p>Ingen plakater i denne genre</p>;

    return (
      <>
        <ListTitle>
          {genre?.title ?? "Alle plakater"} - {data.total}{" "}
          {data.total === 1 ? "plakat" : "plakater"}
        </ListTitle>
        <ListViewPostersList>
          {data.posters.map((p, index) => (
            <li key={p.id}>
              <PostersListCard poster={p} />
              {index < data.posters.length - 1 && (
                <Divider
                  width="calc(100% / 2)"
                  marginBlock={theme.mobile.spacing.l}
                />
              )}
            </li>
          ))}
        </ListViewPostersList>
        <Pagination page={data.page} totalPages={data.totalPages} />
      </>
    );
  };

  return (
    <PostersLayout headerAction={<SortSelect />}>
      <PageTitle title={genre?.title ?? "Plakater"} />
      {renderPosters()}
    </PostersLayout>
  );
};
