import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./datalogger.css";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { Link } from "react-router-dom";

function DataLogger() {
  return (
    <div className="dataLogger  page-section element">
      <IonGrid className="logger_row">
        <IonRow className="ion-row_d" id="dataLogger">
          <img
            src="https://res.cloudinary.com/dpysmqax5/image/upload/v1614107447/ambiTag_1_nfq3cz.png"
            alt="Logger_image"
            className="logger_img"
          />
          <IonCol size="12" className="logger_col">
            <IonText className="logger_text">
              <span>Data Logger</span>
            </IonText>
          </IonCol>
          <IonRow className="ts_16_d lef3 pdt_23">
            <IonText className="logger_text2">
              <span>Making</span>
              <br />
              Monitoring
              <br />
              Easy
            </IonText>
          </IonRow>

          <br />
          <IonRow className=" tocursor btn_r_dl">
            <IonCol size="5" className="btn_explore_col btn_explore_col_mb">
              <Link to="/sector/datalogger">
                <button
                  className="button_exp tocursor"
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: "10%",
                    zIndex: 999999,
                  }}
                >
                  Explore Now
                </button>
              </Link>
            </IonCol>
          </IonRow>
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default DataLogger;
