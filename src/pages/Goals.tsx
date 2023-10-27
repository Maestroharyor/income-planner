import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Goals: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Goals page" />
      </IonContent>
    </IonPage>
  );
};

export default Goals;
