import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonModal,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { GoGoal } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./index.scss";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import { BsPlus } from "react-icons/bs";
import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import AddNewIncomeOrExpense from "./pages/AddNewIncomeOrExpense";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/expenses">
              <Expenses />
            </Route>
            <Route exact path="/add-new">
              <AddNewIncomeOrExpense />
            </Route>
            <Route path="/goals">
              <Goals />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <div className="text-[22px]">
                <BiHomeAlt2 />
              </div>
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="expenses" href="/expenses">
              <div className="text-[22px]">
                <RiMoneyDollarCircleLine />
              </div>
              <IonLabel>Expenses</IonLabel>
            </IonTabButton>

            <IonTabButton tab="add" href="/add-new">
              <div className="text-[22px] flex items-center justify-center w-[50px] h-[50px] bg-brand-primary text-white rounded-full">
                <BsPlus />
              </div>
              {/* <IonLabel>Goals</IonLabel> */}
            </IonTabButton>

            <IonTabButton tab="goals" href="/goals">
              <div className="text-[22px]">
                <GoGoal />
              </div>
              <IonLabel>Plans</IonLabel>
            </IonTabButton>

            <IonTabButton tab="settings" href="/settings">
              <div className="text-[22px]">
                <FiSettings />
              </div>
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
