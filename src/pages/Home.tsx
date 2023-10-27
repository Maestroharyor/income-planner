import { IonNav } from "@ionic/react";
import React from "react";
import HomePageContainer from "../components/partials/home/HomePageContainer";

const Home = () => {
  return <IonNav root={() => <HomePageContainer />}></IonNav>;
};

export default Home;
