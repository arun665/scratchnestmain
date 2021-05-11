import React from "react";
import "./education_sec.css";
import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Footer from "../../Footer/Footer";
import "./education_img.gif";
import { useHistory } from "react-router";

function Education_sec() {
  const history = useHistory();
  return (
    <IonGrid className="beaconsec container both-scroll both-mandatory padding-0px">
      <IonRow id="e1" className="educationimg  element"></IonRow>
      <IonRow className="rfidsector eduimg_sector  element">
        <IonCol id="e2" size="12" className="bcolsector ">
          <h1
            className=" line-1 anim-typewriter heading"
            id="education_sec_heading"
          >
            Education
          </h1>
          <IonText className=" loggerText">
            Technology education brought to your doorstep through the most
            interactive and dynamic platforms
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow className="eduimg2  element">
        <IonCol id="e2" size="12" className="incolsector_b txt_cen_l ">
          <h1
            style={{ fontSize: "78px" }}
            className=" line-1 white-text line_dl anim-typewriter heading"
            id="iot_edu_sec"
          >
            IoT Lab
          </h1>
          <IonButton
            className="white-text btn_dl_txt"
            id="iot_ed_btn"
            onClick={() => history.push("/iot")}
          >
            Know More
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow className="footer_dl_row" id="footer_ed_sec">
        <Footer />
      </IonRow>
    </IonGrid>
  );
}

export default Education_sec;
