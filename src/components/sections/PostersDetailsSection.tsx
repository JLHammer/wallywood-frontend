import { useParams } from "react-router-dom";
import { usePoster } from "../../hooks/usePosters";
import { PostersLayout } from "../layout/PostersLayout";
import { Loader } from "../ui/Loader";
import { PageTitle } from "../ui/PageTitle";
import { PostersDetailsCard } from "../ui/poster/PostersDetailsCard";

export const PostersDetailsSection = () => {
  const { posterSlug = "" } = useParams();
  const { data, error, isLoading } = usePoster(posterSlug);

  const renderContent = () => {
    if (isLoading) return <Loader />;
    if (error || !data) return <p>Plakaten blev ikke fundet</p>;

    return <PostersDetailsCard poster={data} />;
  };

  return (
    <PostersLayout hideFiltersBelowDesktop>
      <PageTitle title={data?.name ?? "Plakater"} />
      {renderContent()}
    </PostersLayout>
  );
};
