import { useParams } from "react-router-dom";
import { usePoster } from "../../hooks/usePoster";
import { Loader } from "../ui/Loader";
import { PageTitle } from "../ui/PageTitle";
import { PostersDetailsCard } from "../ui/poster/PostersDetailsCard";

export const PostersDetailsSection = () => {
  const { posterSlug = "" } = useParams();
  const { poster, error, isLoading } = usePoster(posterSlug);

  const renderContent = () => {
    if (isLoading) return <Loader />;
    if (error || !poster) return <p>Plakaten blev ikke fundet</p>;

    return <PostersDetailsCard poster={poster} />;
  };

  return (
    <>
      <PageTitle title={poster?.name ?? "Plakater"} />
      {renderContent()}
    </>
  );
};
