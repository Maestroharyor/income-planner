import React, { Suspense } from "react";
const TransactionsPageContainer = React.lazy(
  () =>
    import("../../components/partials/transactions/TransactionsPageContainer")
);
import PageLoader from "../../components/loaders/PageLoader";
import { IonNav } from "@ionic/react";

const Transactions = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <IonNav root={() => <TransactionsPageContainer />}></IonNav>
    </Suspense>
  );
};

export default Transactions;
