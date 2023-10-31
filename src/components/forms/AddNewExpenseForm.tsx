import { IonRippleEffect } from "@ionic/react";
import { DatePicker } from "antd-mobile";
import { Input } from "antd-mobile";
import moment from "moment";
import React, { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

const AddNewExpenseForm = () => {
  const [visible, setVisible] = useState(false);

  const now = new Date();

  const [currentDate, setCurrentDate] = useState(now);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-gray-100 py-10 flex flex-col gap-5  min-h-[calc(100vh-180px)] px-5  ">
        <form
          className="-translate-y-28 rounded-lg shadow-lg bg-white px-5 py-10 flex flex-col gap-8"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="">Name of Expense</label>
            <Input className="border border-gray-200 py-3 px-5 rounded-lg" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Expense Type</label>
            <Input className="border border-gray-200 py-3 px-5 rounded-lg" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Date</label>
            <div
              className="px-5 py-3 rounded border border-gray-200 flex gap-3 items-center justify-between"
              onClick={() => setVisible(true)}
            >
              {/* <p>23, Aug 2022</p> */}
              <p>{moment(currentDate).format("DD,MMM YYYY")}</p>{" "}
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
          onConfirm={(val: any) => {
            // Toast.show(val.toDateString());
            setCurrentDate(val);
          }}
        />
      </div>
    </>
  );
};

export default AddNewExpenseForm;
