import {
  IonContent,
  IonHeader,
  IonNavLink,
  IonPage,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { useState } from "react";
import { BsArrowDown, BsArrowUp, BsFillBellFill } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { getTimeOfDay } from "../../../utils";
import Expenses from "../../../pages/Expenses";
import Reports from "../../../pages/Reports";
import AddNewExpense from "../../AddNewExpense";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

const AddNewContainer: React.FC = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [present, dismiss] = useIonModal(AddNewExpense, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState(
    "This modal example uses the modalController to present and dismiss modals."
  );

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          setMessage(`Hello, ${ev.detail.data}!`);
        }
      },
    });
  }
  return (
    <IonPage>
      <IonContent fullscreen className="">
        <div>Yeah</div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewContainer;
