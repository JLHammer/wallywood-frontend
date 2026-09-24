import { theme } from "../../styles/theme";
import styled from "styled-components";
import { useRandomPosters } from "../../hooks/usePosters";
import { RandomPostersCard } from "../ui/poster/RandomPostersCard";
import { Loader } from "../ui/Loader";
import { Divider } from "../ui/Divider";
import { LargeButton } from "../ui/button/LargeButton";

const RandomPostersSectionStyled = styled.section`
  ${theme.media.desktop} {
    width: ${theme.desktop.layout.contentWidth};
    align-items: stretch;
    gap: ${theme.desktop.spacing.l};
    padding-inline: 0;
  }
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.m};

  ${theme.media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, ${theme.desktop.sizes.frontpageCardWidth});
    justify-content: space-between;
    justify-items: start;
  }
`;

const RandomPostersList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.frontpageCardWidth};
    align-items: stretch;
    gap: ${theme.tablet.spacing.xl};
  }

  ${theme.media.desktop} {
    width: 100%;
    gap: 0;
    display: grid;
    grid-template-columns: repeat(2, ${theme.desktop.sizes.frontpageCardWidth});
    justify-content: space-between;
    row-gap: ${theme.desktop.sizes.frontpageCardRowGap};
  }
`;

export const RandomPostersSection = () => {
  const { posters, error, isLoading, getNewPosters } = useRandomPosters(4);

  const renderContent = () => {
    if (error) return <p>Kunne ikke hente plakater</p>;
    if (isLoading || !posters) return <Loader />;

    return (
      <RandomPostersList>
        {posters.map((p, index) => (
          <li key={p.id}>
            <RandomPostersCard poster={p} />
            {index < posters.length - 1 && (
              <Divider
                width="calc(100% / 2)"
                marginBlock={theme.mobile.spacing.l}
              />
            )}
          </li>
        ))}
      </RandomPostersList>
    );
  };

  return (
    <RandomPostersSectionStyled>
      <SectionHeader>
        <h1>Fire tilfældige ...</h1>
        <LargeButton type="button" onClick={getNewPosters} disabled={isLoading}>
          Fire nye ...
        </LargeButton>
      </SectionHeader>
      {renderContent()}
    </RandomPostersSectionStyled>
  );
};
