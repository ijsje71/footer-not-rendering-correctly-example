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
import "./Tab2.css";
import { useRef } from "react";
import PlainText from "../components/PlainText";
import { useHistory } from "react-router";

const PlainTextPage: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement | null>(null);

  const history = useHistory();

  return (
    <IonPage>
      <IonHeader collapse="fade" translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Tab1"></IonBackButton>
          </IonButtons>
          <IonTitle>Plain Text</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} fullscreen>
        <IonHeader collapse="condense" translucent>
          <IonToolbar>
            <IonTitle size="large">Plain Text</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PlainText name="Tab 2 page" />
      </IonContent>
      <IonFooter collapse="fade">
        <IonToolbar className="footer-toolbar">
          <IonGrid>
            <IonCol>
              <IonRow id="decision-footer-top-row">
                <IonButton
                  shape="round"
                  className="button-wide button-primary decision-footer-button"
                  onClick={() => history.push("/dynamictextpage")}
                >
                  Next
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

export default PlainTextPage;
