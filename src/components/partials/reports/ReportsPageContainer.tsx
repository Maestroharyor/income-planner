import {
  IonContent,
  IonItem,
  IonNavLink,
  IonRippleEffect,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { HiChevronLeft } from "react-icons/hi";
import { getTimeOfDay } from "../../../utils";
import ReportsCharts from "./ReportCharts";
import HomeCharts from "../home/HomeCharts";
import {
  MdOutlineFastfood,
  MdOutlineFlight,
  MdOutlineShoppingCart,
  MdOutlineDirectionsBus,
} from "react-icons/md";
import { Select } from "antd";

const ReportsPageContainer: React.FC = () => {
  const categoriesData = [
    {
      category: "Food and Drink",
      colorClass: "bg-orange-500",
      icon: <MdOutlineFastfood />,
      amount: "₦2340",
    },
    {
      category: "Holiday",
      colorClass: "bg-blue-500",
      icon: <MdOutlineFlight />,
      amount: "₦1500",
    },
    {
      category: "Transportation",
      colorClass: "bg-green-500",
      icon: <MdOutlineDirectionsBus />,
      amount: "₦800",
    },
    {
      category: "Shopping",
      colorClass: "bg-red-500",
      icon: <MdOutlineShoppingCart />,
      amount: "₦3000",
    },
  ];

  return (
    <>
      <IonContent fullscreen className="">
        <div className="pt-5 pb-16 space-y-4 relative ">
          <div className="flex justify-between items-center px-5">
            <div className="flex flex-col ">
              <IonNavLink routerDirection="back">
                <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-full">
                  <IonRippleEffect />
                  <HiChevronLeft />
                </button>
              </IonNavLink>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg font-medium  -translate-x-5">Reports</p>
            </div>
            <div></div>
          </div>
          <div className="flex justify-between items-center px-5">
            <div className="flex gap-3 items-center">
              <div className="w-[45px] h-[45px] text-xl rounded-full bg-blue-600 text-white flex items-center justify-center ">
                <IoWalletSharp />
              </div>
              <div>
                <p className="text-xs text-blue-500">TOTAL SAVINGS</p>
                <p className="font-medium text-2xl flex items-start gap-1 ">
                  <span className="text-base  mt-1">₦</span>
                  <span className="">3,500</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3 px-5">
            <IonItem className="w-full">
              <IonSelect label="Report Type" labelPlacement="floating">
                <IonSelectOption value="expense">Expense</IonSelectOption>
                <IonSelectOption value="income">Income</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
          <div className="h-[300px] -translate-y-20 mb-4">
            <ReportsCharts />
          </div>
        </div>

        <div className="bg-brand-primary -translate-y-12 rounded-t-lg pt-5 space-y-10 -mb-24 ">
          <div className="space-y-4 px-5 -translate-y-20 ">
            <div className="flex justify-between items-center bg-white p-5 gap-3 rounded shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-gray-100 text-green-600">
                  <BsArrowUp />
                </div>
                <p className="font-medium text-sm">Income</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-medium text-xl flex items-start gap-1 ">
                  <span className="text-sm  mt-1">₦</span>
                  <span className="">3,500</span>
                </p>
                <div>
                  <p className="text-right text-xs">
                    10% increase from the previous month
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 gap-3 rounded shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-gray-100 text-red-600">
                  <BsArrowDown />
                </div>
                <p className="font-medium text-sm">Expenses</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-medium text-xl flex items-start gap-1 ">
                  <span className="text-sm  mt-1">₦</span>
                  <span className="">3,500</span>
                </p>
                <div>
                  <p className="text-right text-xs">
                    20% decrease from the previous month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" px-5  text-white -translate-y-20">
            <div>
              <p className="font-bold">Outflow Details</p>
              <p className="">See where your money comes and goes here</p>
            </div>
            <div className="flex mt-4 border-2 border-white">
              {categoriesData.map((category, index) => (
                <div
                  key={index}
                  className={`${category.colorClass} w-1/4 h-full py-1`}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {categoriesData.map((category, index) => (
                <div key={index} className="flex items-center gap-3 py-5">
                  <div
                    className={`w-[40px] h-[40px] text-lg rounded-full ${category.colorClass} flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-100 text-sm">
                      {category.category}
                    </p>
                    <p className="text-gray-white text-xl font-bold">
                      {category.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default ReportsPageContainer;
