import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./header.css";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <>
      <IonGrid className="lg element">
        <div className="header "></div>
      </IonGrid>
    </>
  );
}

export default Header;
