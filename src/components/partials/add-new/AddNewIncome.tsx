import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import AddNewIncomeForm from "../../forms/AddNewIncomeForm";

const AddNewIncome = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 pb-8 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2 flex items-center justify-between w-full">
            <IonNavLink routerDirection="back">
              <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-white/20 text-white">
                <IonRippleEffect />
                <HiChevronLeft />
              </button>
            </IonNavLink>
            <p className="text-lg font-bold">Add New Income</p>
            <div></div>
          </div>
        </div>
        <AddNewIncomeForm />
      </IonContent>
    </IonPage>
  );
};

export default AddNewIncome;
