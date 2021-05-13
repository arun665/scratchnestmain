import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./beacon.css";


function Beacon() {
  const myRef = useRef(null);

  //   const handleScroll = () => {
  //       if (window.scrollY > 400) {
  //         return()
  //     }
  //   };
  return (
    <IonGrid className="beaconsec container both-scroll both-mandatory padding-0px">
      <IonRow id="e1" className="beaconimage element"></IonRow>
      <IonRow className="rfidsector beaconcolsector element">
        <IonCol id="e2" size="12" className="bcolsector">
          <h1 className=" line-1 anim-typewriter heading">Beacon</h1>
          <IonText className=" bcnText">
            Based on a highly efficient, short range communication technology
            consuming the
            <br /> least power, experience the power of BLE with ScratchNest's
            Beacons.
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow className="beacon_sec_img2  element">
        <IonCol id="e2" size="12" className="incolsector_b txt_cen_l ">
          <h1 className=" line-1 white-text line_dl_tb anim-typewriter heading">
            Tracking Beacon
          </h1>
          <IonButton className="white-text btn_beacon_txt">
            <Link to="/products/tracking-beacon">Know More</Link>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow className="footer_dl_row " id="footer_beacon_sec">
        <Footer />
      </IonRow>
    </IonGrid>
  );
}

export default Beacon;
