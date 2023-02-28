import React from "react";
import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";

function Footer() {
  return (
    <>
      <div className="ion-text-center">
        <IonFooter>
          <IonToolbar>
            <IonTitle>
              <p>CopyRight@2023 HYF </p>
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </div>
    </>
  );
}
export default Footer;
