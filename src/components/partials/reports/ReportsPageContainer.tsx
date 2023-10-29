import {
  IonContent,
  IonItem,
  IonNavLink,
  IonPage,
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
import { Progress } from "antd";
import { useState } from "react";
import { capitalize } from "lodash";
import moment from "moment";
import { BiChevronDown } from "react-icons/bi";
import { DatePicker } from "antd-mobile";

const ReportsPageContainer: React.FC = () => {
  const [selectedTransactionOption, setsSlectedTransactionOption] =
    useState("income");
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

  const transactionOptions = [
    {
      name: "income",
      icon: <BsArrowDown />,
    },
    {
      name: "expenses",
      icon: <BsArrowUp />,
    },
  ];

  const [visible, setVisible] = useState(false);

  const now = new Date();

  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <IonContent fullscreen className="">
        <div className="pt-5 pb-16 space-y-4 relative ">
          <div className="flex justify-between items-center px-5">
            <div className="flex flex-col ">
              <IonNavLink routerDirection="back">
                <button className="text-2xl ion-activatable relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
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
          <div className="flex items-center justify-center relative z-10 mt-5 ">
            <div className="inline-flex rounded-full bg-brand-primary text-white p-1">
              {transactionOptions.map((option) => (
                <button
                  key={option.name}
                  className={`inline-flex items-center gap-1 rounded-full px-6  py-2 text-sm   focus:relative transition-all duration-300 ease-in-out ${
                    selectedTransactionOption === option.name
                      ? "text-brand-primary bg-white"
                      : ""
                  }`}
                  onClick={() => setsSlectedTransactionOption(option.name)}
                >
                  {option.icon}
                  <p>{capitalize(option.name)}</p>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-5 relative z-10">
              <p className="font-bold text-lg">Reports Graph</p>
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm rounded bg-brand-primary text-white"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <span>{moment(currentDate).format("MMM, YYYY")}</span>{" "}
                <BiChevronDown
                  size={25}
                  className={`transition-all duration-300 ease-in-out ${
                    visible ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="h-[300px] -translate-y-20 mb-4">
            <ReportsCharts />
          </div>
        </div>

        <div className="bg-brand-primary -translate-y-12 rounded-t-lg pt-5 space-y-10 -mb-24 ">
          <div className="space-y-4 px-5 -translate-y-20 ">
            <div className="flex justify-between items-center bg-gray-50 p-5 gap-3 rounded shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-red-600 text-white">
                  <BsArrowUp />
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

            <div className="flex justify-between items-center bg-gray-50 p-5 gap-3 rounded shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-green-600 text-white">
                  <BsArrowDown />
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
                  className={`${category.colorClass}  w-1/4 h-full py-1`}
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

          <div className="px-5 -translate-y-24">
            <div className="bg-white rounded-lg p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-bold">
                  You have spent{" "}
                  <span className="text-brand-primary">₦3,500</span> this month
                </p>
                <p className="text-gray-400 text-[10px] whitespace-nowrap">
                  {moment(currentDate).format("MMM, YYYY")}
                </p>
              </div>
              <div>
                <Progress percent={50} />
              </div>
            </div>
          </div>
        </div>

        <DatePicker
          precision="month"
          title="Select Date"
          cancelText="Cancel"
          confirmText="Select Month"
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          max={now}
          onConfirm={(val) => {
            // Toast.show(val.toDateString());
            setCurrentDate(val);
          }}
        />
      </IonContent>
    </>
  );
};

export default ReportsPageContainer;
