import React, { Suspense } from "react";
const ReportsPageContainer = React.lazy(
  () => import("../components/partials/reports/ReportsPageContainer")
);
import PageLoader from "../components/loaders/PageLoader";

const MyPage: React.FC = (props) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ReportsPageContainer />
    </Suspense>
  );
};

export default MyPage;
