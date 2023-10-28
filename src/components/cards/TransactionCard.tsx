import { Progress } from "antd";
import { FcAutomotive } from "react-icons/fc";
import { getRandomDateBetweenYears } from "../../utils";
import moment from "moment";

const TransactionCard = () => {
  function getRandomNumber(): number {
    // Generate a random number between 1 and 2
    return Math.floor(Math.random() * 2) + 1;
  }
  return (
    <div className="p-5 rounded-lg bg-white flex items-center gap-3">
      <div className="w-[40px] h-[40px] flex items-center justify-center text-4xl">
        <FcAutomotive />
      </div>
      <div className="flex-1 w-full">
        <div className="flex gap-3 justify-between items-center">
          <div>
            <p className={`font-bold text-lg `}>Transfer</p>
            <p className="text-gray-500">
              {moment(getRandomDateBetweenYears(2022, 2023)).format(
                "DD, MMM YYYY"
              )}
            </p>
          </div>
          <div className="text-lg text-right">
            <p
              className={`font-bold ${
                getRandomNumber() === 1 ? "text-green-600" : "text-red-600"
              }`}
            >
              ₦3,400
            </p>
            <p className="text-gray-400 text-xs">50% of budget plan</p>
          </div>
        </div>
        <div className="w-full">
          <Progress percent={50} showInfo={false} />
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
