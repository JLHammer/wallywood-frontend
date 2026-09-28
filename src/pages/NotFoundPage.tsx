import { NotFoundSection } from "../components/sections/NotFoundSection";
import { PageTitle } from "../components/ui/PageTitle";

export const NotFoundPage = () => {
  return (
    <>
      <PageTitle title="Siden findes ikke" />
      <NotFoundSection />
    </>
  );
};
