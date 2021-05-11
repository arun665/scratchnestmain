import { IonCol, IonGrid, IonRow, IonSearchbar, IonText } from "@ionic/react";
import React, { Fragment } from "react";
import "./support.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Cform from "../Contact/Form/form";
import Footer from "../Footer/Footer";

function Support() {
  return (
    <div className="support">
      <IonGrid className="support-grid">
        <IonRow className="head_row_support">
          <IonCol size="3" className="text_col_sup white-text">
            <IonText>
              {" "}
              <h1 className="support-heading">Support and Help</h1>{" "}
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="help_text1">
          <IonCol size="3" className="help_text_col1 white-text">
            <IonText>
              <h2>
                Any queries? Explore our self help topics to know more about our
                products. You can also fill out the below form more information
                and we will get back to you.
              </h2>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="searchbox_help_row">
          <IonCol size="3" className="searchbar_help_col">
            <IonSearchbar />
          </IonCol>
        </IonRow>
        <IonRow className="img_support_help">
          <IonCol size="8" className="col_img">
            <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615848734/website-support_pfpqeu.jpg"
              className="img_support_help"
            />
          </IonCol>
        </IonRow>
        <IonRow className="help_topic_su">
          <IonCol size="6" className="help_topic_head">
            <IonText>
              <h1 className="help_top_head white-text">Help Topics</h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="table_help">
          <table className="table_help_resp">
            <IonCol size="10" className="table_col_help">
              <IonCol size="4" className="table_p1">
                <tbody>
                  <tr className="white-text">
                    <td className="td_flex">
                      <IonCol size="3" className="icon_helps">
                        <SupervisorAccountIcon
                          fontSize="large"
                          style={{ fontSize: "46px", color: "cyan" }}
                          className="supervisor_icon_su"
                        />
                      </IonCol>
                      <IonCol size="8" className="pd_help1">
                        RFID and NFC
                        <Fragment>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Fragment>
                      </IonCol>
                    </td>
                    <td>
                      <IonRow className="flx_d_row td_flex">
                        <IonCol size="3" className="icon_helps">
                          <SupervisorAccountIcon
                            fontSize="large"
                            style={{ fontSize: "46px", color: "cyan" }}
                            className="supervisor_icon_su"
                          />
                        </IonCol>
                        <IonCol size="8" className="pd_help1 beacon_ht">
                          Beacons
                          <Fragment>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </Fragment>
                        </IonCol>
                      </IonRow>
                    </td>
                  </tr>
                  <tr className="white-text">
                    <td className="td_flex">
                      <IonCol size="3" className="icon_helps">
                        <SupervisorAccountIcon
                          fontSize="large"
                          style={{ fontSize: "46px", color: "cyan" }}
                          className="supervisor_icon_su"
                        />
                      </IonCol>
                      <IonCol size="10" className="pd_help1 datalogger_ht">
                        Data Loggers
                        <Fragment>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Fragment>
                      </IonCol>
                    </td>
                    <td>
                      <IonRow className="flx_d_row td_flex">
                        <IonCol size="3" className="icon_helps">
                          <SupervisorAccountIcon
                            fontSize="large"
                            style={{ fontSize: "46px", color: "cyan" }}
                            className="supervisor_icon_su"
                          />
                        </IonCol>
                        <IonCol size="8" className="pd_help1">
                          <IonCol className="iot_lab">IoT Lab</IonCol>
                        </IonCol>
                      </IonRow>
                    </td>
                  </tr>
                  <tr
                    className="white-text"
                    id="trd_row_help"
                    style={{ display: "none" }}
                  >
                    <td className="td_flex">
                      <IonCol size="3" className="icon_helps">
                        <SupervisorAccountIcon
                          fontSize="large"
                          style={{ fontSize: "46px", color: "cyan" }}
                        />
                      </IonCol>
                      <IonCol size="8" className="pd_help1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit eum tempora necessitatibus autem dignissimos?
                        Possimus neque veri
                      </IonCol>
                    </td>
                    <td>
                      <IonRow className="flx_d_row td_flex">
                        <IonCol size="3" className="icon_helps">
                          <SupervisorAccountIcon
                            fontSize="large"
                            style={{ fontSize: "46px", color: "cyan" }}
                            className="supervisor_icon_su"
                          />
                        </IonCol>
                        <IonCol size="8" className="pd_help1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit eum tempora necessitatibus autem
                          dignissimos? Possimus neque veri
                        </IonCol>
                      </IonRow>
                    </td>
                  </tr>
                </tbody>
              </IonCol>
            </IonCol>
          </table>
        </IonRow>
        <IonRow className="form_support">
          <IonCol size="10" className="form_head_col">
            <IonText>
              <h2 className="form_head_txt white-text">
                Couldn't find the answer for your query? Fill the form below
                with your query and we'll reach out to you.
              </h2>
            </IonText>
          </IonCol>
          <IonCol size="10" className="form_support_comp">
            <Cform />
          </IonCol>
        </IonRow>
        <IonRow className="footer_support">
          <IonCol size="12" className="footer_s_col">
            <Footer />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default Support;
