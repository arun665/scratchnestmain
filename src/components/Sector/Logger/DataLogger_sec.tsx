import React from "react";
import "./logger.css";
import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

function DataLoggerSec() {
  return (
    <IonGrid className="beaconsec container both-scroll both-mandatory padding-0px">
      <IonRow id="e1" className="beaconimage loggerimg element"></IonRow>
      <IonRow className="rfidsector loggerimg_sector  element">
        <IonCol id="e2" size="12" className="bcolsector ">
          <h1 className=" line-1 anim-typewriter heading" id="dl_head_sec">
            Data Logger
          </h1>
          <IonText className=" loggerText" id="dl_textdes_sec">
            Monitoring is now easier, efficient, and economic with our range of
            ambient data loggers.
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow className="loggerimg2  element">
        <IonCol id="e2" size="12" className="incolsector_b txt_cen_l ">
          <h1
            className=" line-1 white-text line_dl anim-typewriter heading"
            id="dl_sut_sec"
          >
            Single Use Temprature
            <br /> Data Logger
          </h1>
          <IonButton className="white-text btn_dl_txt">
            <Link to="/products/ambitag">Know More </Link>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow className="footer_dl_row " id="footer_dl_sec">
        <Footer />
      </IonRow>
    </IonGrid>
  );
}

export default DataLoggerSec;
