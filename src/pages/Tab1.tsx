import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/PlainText";
import "./Tab1.css";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

const Tab1: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const routerOutlet = document.getElementById("main-router-outlet-id");

  const history = useHistory();

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage ref={page}>
      <IonHeader collapse="fade" translucent>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" translucent>
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => history.push("/testpage")}>Open</IonButton>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
