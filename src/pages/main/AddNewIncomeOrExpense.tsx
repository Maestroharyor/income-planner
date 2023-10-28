import { IonNav } from "@ionic/react";
import AddNewContainer from "../../components/partials/add-new/AddNewContainer";

const Home = () => {
  return <IonNav root={() => <AddNewContainer />}></IonNav>;
};

export default Home;
