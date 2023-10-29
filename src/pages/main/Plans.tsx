import React, { Suspense } from "react";
import PageLoader from "../../components/loaders/PageLoader";
import { IonNav } from "@ionic/react";
import PlansPageContainer from "../../components/partials/plans/PlansPageContainer";
// const PlansPageContainer = React.lazy(
//   () => import("../../components/partials/plans/PlansPageContainer")
// );

const MyPage: React.FC = (props) => {
  return (
    // <Suspense fallback={<PageLoader />}>
    <IonNav root={() => <PlansPageContainer />}></IonNav>
    // </Suspense>
  );
};

export default MyPage;
