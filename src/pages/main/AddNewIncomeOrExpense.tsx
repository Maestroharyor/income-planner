import { IonNav } from "@ionic/react";
import AddNewContainer from "../../components/partials/add-new/AddNewContainer";
import { Suspense } from "react";
import PageLoader from "../../components/loaders/PageLoader";

const Home = () => {
  return (
    // <Suspense fallback={<PageLoader />}>
    <IonNav root={() => <AddNewContainer />}></IonNav>
    // </Suspense>
  );
};

export default Home;
