import { IonNav } from "@ionic/react";
import React, { Suspense } from "react";
// const HomePageContainer = React.lazy(
//   () => import("../../components/partials/home/HomePageContainer")
// );
import PageLoader from "../../components/loaders/PageLoader";
import HomePageContainer from "../../components/partials/home/HomePageContainer";

const Home = () => {
  return (
    // <Suspense fallback={<PageLoader />}>
    <IonNav root={() => <HomePageContainer />}></IonNav>
    // </Suspense>
  );
};

export default Home;
