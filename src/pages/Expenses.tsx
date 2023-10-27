import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Expenses: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Expenses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Expenses page" />
      </IonContent>
    </IonPage>
  );
};

export default Expenses;
