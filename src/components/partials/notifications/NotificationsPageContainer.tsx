import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import { HiChevronLeft } from "react-icons/hi";
import NotificationCard from "../../cards/NotificationCard";

const NotificationsPageContainer: React.FC = () => {
  return (
    <>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 pb-8 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2 flex items-center justify-between w-full">
            <IonNavLink routerDirection="back">
              <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-white/10">
                <IonRippleEffect />
                <HiChevronLeft />
              </button>
            </IonNavLink>
            <p className="text-lg font-bold">Notifications</p>
            <div></div>
          </div>
        </div>
        <div className="bg-gray-100 py-10 flex flex-col gap-5 px-5 min-h-[calc(100vh-180px)] ">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          {/* <NotificationCard />
          <NotificationCard /> */}
        </div>
      </IonContent>
    </>
  );
};

export default NotificationsPageContainer;
