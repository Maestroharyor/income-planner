import { Timeline } from "antd";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";

const ExpensesListSummary = () => {
  return (
    <div className="px-5 py-4 flex">
      <Timeline
        className="w-full"
        items={[
          {
            children: (
              <div className="flex gap-5 items-start">
                <div className="flex flex-col items-center justify-center">
                  {" "}
                  <p className="text-gray-500">Tue</p>{" "}
                  <p className="text-xl font-bold">4</p>
                </div>
                <div className="bg-white rounded divide-y divide-gray-100 flex flex-col flex-1 px-5 shadow-sm w-full">
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-orange-600 flex items-center justify-center text-white">
                      <MdOutlineFastfood />
                    </div>
                    <div>
                      <p className="font-bold">Food & Drink</p>
                      <p className="text-gray-600 text-xs">
                        Seafood in europe restaurant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <BsCart4 />
                    </div>
                    <div>
                      <p className="font-bold">Shopping</p>
                      <p className="text-gray-600 text-xs">Home groceries</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            children: (
              <div className="flex gap-5 items-start">
                <div className="flex flex-col items-center justify-center">
                  {" "}
                  <p className="text-gray-500">Wed</p>{" "}
                  <p className="text-xl font-bold">5</p>
                </div>
                <div className="bg-white rounded divide-y divide-gray-100 flex flex-col flex-1 px-5 shadow-sm w-full">
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-orange-600 flex items-center justify-center text-white">
                      <MdOutlineFastfood />
                    </div>
                    <div>
                      <p className="font-bold">Food & Drink</p>
                      <p className="text-gray-600 text-xs">
                        Seafood in europe restaurant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <BsCart4 />
                    </div>
                    <div>
                      <p className="font-bold">Shopping</p>
                      <p className="text-gray-600 text-xs">Home groceries</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            children: (
              <div className="flex gap-5 items-start">
                <div className="flex flex-col items-center justify-center">
                  {" "}
                  <p className="text-gray-500">Wed</p>{" "}
                  <p className="text-xl font-bold">5</p>
                </div>
                <div className="bg-white rounded divide-y divide-gray-100 flex flex-col flex-1 px-5 shadow-sm w-full">
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-orange-600 flex items-center justify-center text-white">
                      <MdOutlineFastfood />
                    </div>
                    <div>
                      <p className="font-bold">Food & Drink</p>
                      <p className="text-gray-600 text-xs">
                        Seafood in europe restaurant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-5">
                    <div className="w-[40px] h-[40px] text-lg rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <BsCart4 />
                    </div>
                    <div>
                      <p className="font-bold">Shopping</p>
                      <p className="text-gray-600 text-xs">Home groceries</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ExpensesListSummary;
