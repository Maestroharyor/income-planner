import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import { useState } from "react";
import { BsArrowDown, BsArrowUp, BsFillBellFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import ExpensesListSummary from "./ExpensesListSummary";
import { getTimeOfDay } from "../../../utils";
import Reports from "../../../pages/Reports";
import Notifications from "../../../pages/sub-pages/Notifications";

const HomePageContainer: React.FC = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState(0);

  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div className="bg-brand-primary pt-10 px-5 pb-20 space-y-7 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-lg font-medium text-white">Hi Maestro</p>
              <p className="text-xl font-light text-blue-100">
                Good {getTimeOfDay()}
              </p>
            </div>
            <div>
              <IonNavLink
                routerDirection="forward"
                component={() => <Notifications />}
              >
                <button className="text-2xl text-white ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-full bg-opacity-20">
                  <IonRippleEffect />
                  <BsFillBellFill />
                </button>
              </IonNavLink>
            </div>
          </div>
        </div>
        <div className="mx-5 h-[200px] rounded-xl bg-blue-900 border border-white shadow-xl -translate-y-12 flex flex-col justify-between p-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              {/* <div className="w-[45px] h-[45px] text-xl rounded-full text-blue-600 flex items-center justify-center bg-white">
                <IoWalletSharp />
              </div> */}
              <div>
                <p className="text-[11px] text-blue-100">TOTAL SAVINGS</p>
                <p className="font-bold text-3xl flex items-start gap-1 ">
                  {/* <span className="text-base text-blue-100 mt-1">₦</span> */}
                  <span className="text-white">₦3,203,500.00</span>
                </p>
              </div>
            </div>
            <div>
              <IonNavLink
                routerDirection="forward"
                component={() => <Reports />}
              >
                <button className="text-2xl text-white ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-100 bg-opacity-10">
                  <IoIosStats />
                  <IonRippleEffect />
                </button>
              </IonNavLink>
            </div>
          </div>

          <div className="flex items-center justify-between text-white">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-blue-600 bg-opacity-30  text-sm">
                  <BsArrowDown />
                </div>
                <p className="font-medium text-sm">Income</p>
              </div>
              <div className="text-xl font-medium">
                <span className="text-white">₦203,500.00</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full bg-blue-600 bg-opacity-30  text-sm">
                  <BsArrowUp />
                </div>
                <p className="font-medium text-sm">Expenses</p>
              </div>
              <div className="text-xl font-medium">
                <span className="text-white">₦103,500.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-4">
          <div className="flex overflow-x-auto bg-white px-3 shadow-lg shadow-gray-100">
            {months.map((month, index) => (
              <div
                key={index}
                className={`text-gray-700 flex flex-col items-center cursor-pointer ion-activatable relative `}
                onClick={() => setSelectedMonth(index)}
              >
                <IonRippleEffect />
                <span className="px-4 py-3">{month}</span>
                {selectedMonth === index && (
                  <div className="w-full h-[3px] bg-blue-600 rounded-t-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 pt-10 -translate-y-4">
          <ExpensesListSummary />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePageContainer;
