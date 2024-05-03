import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/PlainText";
import "./Tab2.css";
import { useRef } from "react";
import DynamicContent from "../components/DynamicContent";

const DynamicTextPage: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  return (
    <IonPage>
      <IonHeader collapse="fade" translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Tab1"></IonBackButton>
          </IonButtons>
          <IonTitle>Dynamic Text</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} fullscreen>
        <IonHeader collapse="condense" translucent>
          <IonToolbar>
            <IonTitle size="large">Dynamic Text</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DynamicContent />
      </IonContent>
      <IonFooter collapse="fade">
        <IonToolbar className="footer-toolbar">
          <IonGrid>
            <IonCol>
              <IonRow id="decision-footer-top-row">
                <IonButton
                  shape="round"
                  className="button-wide button-primary decision-footer-button"
                >
                  Test
                </IonButton>
              </IonRow>
              <IonRow>
                <IonButton
                  shape="round"
                  className="button-wide button-primary decision-footer-button"
                >
                  Test2
                </IonButton>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default DynamicTextPage;
