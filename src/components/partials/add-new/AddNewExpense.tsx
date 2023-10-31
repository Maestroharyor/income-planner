import { IonContent, IonNavLink, IonRippleEffect } from "@ionic/react";
import { HiChevronLeft } from "react-icons/hi";
import AddNewExpenseForm from "../../forms/AddNewExpenseForm";

const AddNewExpense: React.FC = () => {
  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 pb-32 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2 flex items-center justify-between w-full">
            <IonNavLink routerDirection="back">
              <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-white/20 text-white">
                <IonRippleEffect />
                <HiChevronLeft />
              </button>
            </IonNavLink>
            <p className="text-lg font-bold">Add New Expense</p>
            <div></div>
          </div>
        </div>
        <AddNewExpenseForm />
      </IonContent>
    </>
  );
};

export default AddNewExpense;
