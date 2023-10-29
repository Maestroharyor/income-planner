import { IonContent, IonNavLink, IonPage, IonRippleEffect } from "@ionic/react";
import { DatePicker, Input } from "antd-mobile";
import moment from "moment";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { HiChevronLeft } from "react-icons/hi";

const AddNewExpense: React.FC = () => {
  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // };

  const [visible, setVisible] = useState(false);

  const now = new Date();

  const [currentDate, setCurrentDate] = useState(now);
  return (
    <IonPage>
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
        <div className="bg-gray-100 py-10 flex flex-col gap-5  min-h-[calc(100vh-180px)] px-5  ">
          <form
            className="-translate-y-28 rounded-lg shadow-lg bg-white px-5 py-10 flex flex-col gap-8"
            // onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="">Name of Expense</label>
              <Input className="border border-gray-200 py-3 px-5 rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Category</label>
              <Input className="border border-gray-200 py-3 px-5 rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Date</label>
              <div className="px-5 py-3 rounded border border-gray-200 flex gap-3 items-center justify-between">
                <p>23, Aug 2022</p>
                {/* <p>{moment(currentDate).format("DD,MMM YYYY")}</p>{" "} */}
                <BsFillCalendarFill className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className="bg-brand-primary px-5 py-3 flex justify-center items-center w-full rounded-lg text-white ion-activatable relative overflow-hidden"
                type="submit"
              >
                <p className="">Add Expense</p>
                <IonRippleEffect />
              </button>
            </div>
          </form>
        </div>
        <DatePicker
          precision="month"
          title="Select Date"
          cancelText="Cancel"
          confirmText="Select Month"
          visible={false}
          // onClose={() => {
          //   setVisible(false);
          // }}
          max={now}
          // onConfirm={(val) => {
          //   // Toast.show(val.toDateString());
          //   setCurrentDate(val);
          // }}
        />
      </IonContent>
    </IonPage>
  );
};

export default AddNewExpense;
