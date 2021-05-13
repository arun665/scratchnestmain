import React from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./beacon.css";
import "./beacon.scss";

import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
function Beacon() {
  return (
    <>
      <div className="beacon  page-section element" id="beacon">
        <IonGrid className="beacon_home_grid ">
          <IonRow className="ion-row_b ">
            <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1614101775/W4_o3hmkt.jpg"
              alt="RFID_image"
              className="beacon_img"
            />
            <IonCol size="6" className="beacon_col">
              <IonText className="beacon_text">Beacon</IonText>
            </IonCol>
            <IonRow className="ts_16_b lef2 pdt_23">
              <IonText className="beacon_text2">
                <span>Communication</span>
                <br />
                Device
                <br />
                Refined
              </IonText>
              <IonRow className="button_explore_row tocursor btn_e_b">
                <IonCol size="5" className="btn_explore_col">
                  <Link to="/sector/Beacon">
                    <button
                      className="button_exp tocursor"
                      style={{
                        background: "black",
                        color: "White",
                        borderRadius: "10%",
                      }}
                    >
                      Explore Now
                    </button>
                  </Link>
                </IonCol>
              </IonRow>
            </IonRow>
          </IonRow>
        </IonGrid>
      </div>
    </>
  );
}

export default Beacon;
