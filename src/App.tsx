import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
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
import Home from "./pages/main/Home";
import Plans from "./pages/main/Plans";
import Settings from "./pages/main/Settings";
import { BsPlus } from "react-icons/bs";
import AddNewIncomeOrExpense from "./pages/main/AddNewIncomeOrExpense";
import Transactions from "./pages/main/Transactions";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Switch> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
            <Route exact path="/add-new">
              <AddNewIncomeOrExpense />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {/* </Switch> */}
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <div className="text-[22px]">
                <BiHomeAlt2 />
              </div>
              <IonLabel className="text-xs">Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="transactions" href="/transactions">
              <div className="text-[22px]">
                <RiMoneyDollarCircleLine />
              </div>
              <IonLabel className="text-xs">Transactions</IonLabel>
            </IonTabButton>

            <IonTabButton tab="add-new" href="/add-new" className="mb-1">
              <div className="text-[22px] flex items-center justify-center w-[45px] h-[45px] bg-brand-primary text-white rounded-full">
                <BsPlus />
              </div>
            </IonTabButton>

            <IonTabButton tab="plans" href="/plans">
              <div className="text-[22px]">
                <GoGoal />
              </div>
              <IonLabel className="text-xs">Plans</IonLabel>
            </IonTabButton>

            <IonTabButton tab="settings" href="/settings">
              <div className="text-[22px]">
                <FiSettings />
              </div>
              <IonLabel className="text-xs">Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
