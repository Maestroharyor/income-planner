import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import { HiChevronRight } from "react-icons/hi";
import AddNewExpense from "./AddNewExpense";
import AddNewIncome from "./AddNewIncome";

const AddNewContainer: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div className="pt-10 pb-8 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-brand-primary">
          <div className="flex items-center justify-center w-full">
            <p className="text-lg font-bold">Add New Expense/Income</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-5 ">
          <IonNavLink routerDirection="forward" component={AddNewExpense}>
            <div className="flex items-center justify-between gap-3 bg-gray-100 p-5 rounded-lg ion-activatable relative overflow-hidden">
              <IonRippleEffect />
              <div>
                <p className="font-bold text-lg text-red-600">Expense</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
              <div>
                <button className="text-2xl  w-[50px] h-[50px] flex items-center justify-center rounded-lg  text-brand-primary">
                  <HiChevronRight />
                </button>
              </div>
            </div>
          </IonNavLink>
          <IonNavLink routerDirection="forward" component={AddNewIncome}>
            <div className="flex items-center justify-between gap-3 bg-gray-100 p-5 rounded-lg ion-activatable relative overflow-hidden">
              <IonRippleEffect />
              <div>
                <p className="font-bold text-lg text-brand-primary">Income</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
              <div>
                <button className="text-2xl  w-[50px] h-[50px] flex items-center justify-center rounded-lg  text-brand-primary">
                  <HiChevronRight />
                </button>
              </div>
            </div>
          </IonNavLink>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewContainer;
