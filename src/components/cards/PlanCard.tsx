import React from "react";

const PlanCard = () => {
  return (
    <div className="relative rounded-xl border-2 border-gray-100 bg-white">
      <div className="mb-8 flex w-full items-start gap-4 p-4">
        <div className="w-full space-y-5">
          <div className="flex items-center justify-between py-2 text-xl font-medium">
            <p className="">Income Disbursement Plan</p>
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Fixed Costs </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-gray-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Investments </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-lime-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Savings </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-blue-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Debts </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-purple-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Tithe </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-blue-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Spending </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-red-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
            <p className="flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2">
              <span>Miscellaneous </span>{" "}
              <span className="flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-gray-600 p-2 text-xs text-white">
                30%
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex justify-end">
        <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="text-[10px] font-medium sm:text-xs">
            Primary Plan
          </span>
        </strong>
      </div>
    </div>
  );
};

export default PlanCard;
