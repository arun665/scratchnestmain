import React from "react";
import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import "./mheader.css";

function MainHeader() {
  return (
    <IonGrid className="Mheader">
      <div className="header">
        <img
          className="logo2"
          src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
          alt="logo0"
        />
        <IonRow className="sideNav">
          <IonCol size="11" className="shoppingbag">
            <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1614896227/shopping-bag_r1roq2.png"
              alt="shopping bag"
              className="shopimg"
            />
          </IonCol>
        </IonRow>
      </div>
    </IonGrid>
  );
}

export default MainHeader;
