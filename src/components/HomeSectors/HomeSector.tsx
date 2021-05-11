import React from "react";
import Education from "../HomeSectors/Education/Education";
import Header from "../Header/index";
import Beacon from "../HomeSectors/Beacon/Beacon";
import DataLogger from "../HomeSectors/DataLogger/DataLogger";
import Rfid from "../HomeSectors/RFID/Rfid";
import Navbar from "../Navbar/Navbar";
import Topheader from "../top_header/index";
import "./homesector.css";
import Footer from "../Footer/Footer";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { useStateValue } from "../Redux/StateProvider";

function HomeSector() {
  const [{ user }] = useStateValue();
  return (
    <div className="home">
      <IonGrid
        style-="overflow-x: hidden;scroll-behavior: smooth;"
        className="container  ov both-scroll both-mandatory padding-0px"
      >
        <IonRow>
          <IonCol className="home_mcol">
            <Topheader />
            <Navbar />
            <Header />
            <Rfid />
            <Beacon />
            <DataLogger />
            <Education />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default HomeSector;
