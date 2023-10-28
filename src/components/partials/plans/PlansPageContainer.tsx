import { IonContent, IonPage } from "@ionic/react";
const PlansPageContainer: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 pb-8 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2 flex items-center justify-center w-full">
            <p className="text-lg font-bold">Income Disbursement Plans</p>
          </div>
        </div>
        <div className="bg-gray-100 py-10 flex flex-col gap-5 px-5 min-h-[calc(100vh-150px)] "></div>
      </IonContent>
    </IonPage>
  );
};

export default PlansPageContainer;
