import React, { Suspense } from "react";
const NotificationsPageContainer = React.lazy(
  () =>
    import("../../components/partials/notifications/NotificationsPageContainer")
);
import PageLoader from "../../components/loaders/PageLoader";

const MyPage: React.FC = (props) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <NotificationsPageContainer />
    </Suspense>
  );
};

export default MyPage;
