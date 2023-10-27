import { IonNav } from "@ionic/react";
import HomePageContainer from "../components/partials/home/HomePageContainer";
import AddNewContainer from "../components/partials/add-new/AddNewContainer";

const Home = () => {
  return <IonNav root={() => <AddNewContainer />}></IonNav>;
};

export default Home;
