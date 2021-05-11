import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useState } from "react";
import MainHeader from "../mainHeader";
import "./contact.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import DraftsIcon from "@material-ui/icons/Drafts";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Cform from "./Form/form";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div className="contactPa">
      <MainHeader />
      <IonRow className="contactbodyrow">
        <IonCol size="5" className="colcontact">
          <IonText className="textc">Contact US</IonText>
        </IonCol>
        <IonCol size="3.5" className="lorem">
          <IonText className="textl white-text">
            {" "}
            Any queries? Please fill the form and we will get back to you
            shortly.
          </IonText>
          <br />
          <IonCol size="5" className="formcol">
            <Cform />
          </IonCol>
        </IonCol>
        <IonCol size="3" className="white-square">
          <section className="cntn_contact">
            <IonCol size="2" className="contactdetails">
              <IonText>
                <PhoneIphoneIcon className="phoneicon" />
              </IonText>
            </IonCol>
            <IonCol size="2" className="phnnumber">
              <IonText className="phn1">+91 8447 422 760</IonText>
              <br />
              <IonText className="phn2">
                <span>+91 9717 370 804</span>
              </IonText>
            </IonCol>
            <IonCol size="2" className="email">
              <DraftsIcon className="emailicon" />
              <br />
              <IonText className="emailText">info@scratchnest.com</IonText>
            </IonCol>
            <IonCol size="2" className="location">
              <LocationOnIcon className="locationicon" />
              <br />
              <IonText className="locationText">
                Room No 6, 3rd floor, East Wing <br />
                M. Visvesvaraya Block, <br />
                IIT Ropar, Rupnagar,
                <br />
                Punjab, India - 140001
              </IonText>
            </IonCol>
          </section>
        </IonCol>
        <div className="contact_footer_cn">
          <Footer />
        </div>
      </IonRow>
    </div>
  );
}

export default Contact;
