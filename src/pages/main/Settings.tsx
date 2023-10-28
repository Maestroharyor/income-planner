import React, { Suspense } from "react";
import PageLoader from "../../components/loaders/PageLoader";
import { IonNav } from "@ionic/react";
const SettingsPageContainer = React.lazy(
  () => import("../../components/partials/settings/SettingsPageContainer")
);

const Settings: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <IonNav root={() => <SettingsPageContainer />}></IonNav>
    </Suspense>
  );
};

export default Settings;
