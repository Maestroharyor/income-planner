import { IonContent } from "@ionic/react";
import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { capitalize } from "lodash";
import { DatePicker } from "antd-mobile";
import { BiChevronDown } from "react-icons/bi";
import moment from "moment";
import TransactionCard from "../../cards/TransactionCard";
import { RiArrowUpDownLine } from "react-icons/ri";

const TransactionsPageContainer: React.FC = () => {
  const [selectedTransactionOption, setsSlectedTransactionOption] =
    useState("income");
  const transactionOptions = [
    {
      name: "all",
      icon: <RiArrowUpDownLine />,
    },
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
        <div className="bg-brand-primary pt-10 pb-8 px-5  flex flex-col items-center gap-y-5 rounded-b-lg text-white">
          <div className="mb-2">
            <p className="text-lg font-bold">Track your Transactions</p>
          </div>
          <div>
            <div className="inline-flex rounded-full bg-white/10 ">
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
            <button
              className="flex items-center gap-1 px-3 py-2 text-base  text-white"
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
        <div className="bg-gray-100 py-10 flex flex-col gap-5 px-5 min-h-[calc(100vh-100px)]">
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
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

export default TransactionsPageContainer;
