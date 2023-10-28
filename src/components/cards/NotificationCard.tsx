import React from "react";
import { FcCurrencyExchange } from "react-icons/fc";

const NotificationCard = () => {
  return (
    <div className="p-5 rounded-lg bg-white flex items-center gap-3 h-fit shadow-lg shadow-gray-200/40">
      <div className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-gray-200  rounded-full">
        <FcCurrencyExchange />
      </div>
      <div className="flex-1 w-full">
        <div className="flex gap-3 justify-between items-center">
          <div>
            <p className={`font-bold text-lg `}>Transfer</p>
            <p className="text-gray-500">This is a notification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
