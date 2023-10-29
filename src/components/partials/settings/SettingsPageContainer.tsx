import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import { BsFillBellFill } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useIonRouter } from "@ionic/react";
import { BiSolidUser } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";

const SettingsPageContainer: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 pb-20 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2 flex items-center justify-between w-full">
            <button
              className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary"
              onClick={() => router.goBack()}
            >
              <IonRippleEffect />
              <HiChevronLeft />
            </button>

            <p className="text-lg font-bold">Settings</p>
            <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <IonRippleEffect />
              <BsFillBellFill />
            </button>
          </div>
        </div>
        <div className="bg-gray-100 py-10 flex flex-col gap-5 px-5 min-h-[calc(100vh-180px)] ">
          <div className="flex flex-col gap-5 -translate-y-[100px] justify-center items-center">
            <figure className="w-[140px] h-[140px] rounded-full overflow-hidden border-[4px] bg-gray-800">
              <img
                src={"https://i.pravatar.cc/300"}
                alt=""
                className="w-full h-full"
              />
            </figure>
            <p className="font-medium text-brand-primary text-sm">
              maestro@thelifetechfacts.com
            </p>
          </div>
          <div className="flex flex-col gap-5 -translate-y-20">
            <IonNavLink routerDirection="forward">
              <div className="flex items-center justify-between gap-3 bg-gray-200 px-5 py-2 rounded-lg ion-activatable relative overflow-hidden">
                <IonRippleEffect />
                <div className="flex items-center gap-3 text-gray-600">
                  <BiSolidUser size={24} />
                  <p className="font-medium  ">Account Info</p>
                </div>
                <div>
                  <button className="text-2xl  w-[50px] h-[50px] flex items-center justify-center rounded-lg  text-brand-primary">
                    <HiChevronRight />
                  </button>
                </div>
              </div>
            </IonNavLink>

            <IonNavLink routerDirection="forward">
              <div className="flex items-center justify-between gap-3 bg-gray-200 px-5 py-2 rounded-lg ion-activatable relative overflow-hidden">
                <IonRippleEffect />
                <div className="flex items-center gap-3 text-gray-600">
                  <AiFillSetting size={24} />
                  <p className="font-medium  "> Settings</p>
                </div>
                <div>
                  <button className="text-2xl  w-[50px] h-[50px] flex items-center justify-center rounded-lg  text-brand-primary">
                    <HiChevronRight />
                  </button>
                </div>
              </div>
            </IonNavLink>

            <IonNavLink routerDirection="forward">
              <div className="flex items-center justify-between gap-3 bg-gray-200 px-5 py-2 rounded-lg ion-activatable relative overflow-hidden">
                <IonRippleEffect />
                <div className="flex items-center gap-3 text-gray-600">
                  <IoMdLock size={24} />
                  <p className="font-medium  ">Login and Security</p>
                </div>
                <div>
                  <button className="text-2xl  w-[50px] h-[50px] flex items-center justify-center rounded-lg  text-brand-primary">
                    <HiChevronRight />
                  </button>
                </div>
              </div>
            </IonNavLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPageContainer;
