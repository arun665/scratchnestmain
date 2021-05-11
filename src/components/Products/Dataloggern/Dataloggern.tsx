import React, { useEffect, useRef } from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./DL.css";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import AOS from "aos";
import Featurecaurosel from "./Caurosel/Featurecaurosel_dl.js";
import GradeIcon from "@material-ui/icons/Grade";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import StorefrontIcon from "@material-ui/icons/Storefront";
import FaceIcon from "@material-ui/icons/Face";
import BluetoothSearchingIcon from "@material-ui/icons/BluetoothSearching";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import DirectionsRailwayIcon from "@material-ui/icons/DirectionsRailway";
import Collapsable from "./Collapsable/Collapsable_dl.js";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ReactPlayer from "react-player";
import InboxIcon from "@material-ui/icons/Inbox";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import UsbIcon from "@material-ui/icons/Usb";
import AlarmIcon from "@material-ui/icons/Alarm";
import AirplayIcon from "@material-ui/icons/Airplay";
import { useHistory } from "react-router";

interface JQuery {
  switchClass(): void;
}

function Dataloggern(props: any) {
  const history = useHistory();
  const menuRef: any = useRef(null);
  const handleClick = React.useCallback((e: any) => {
    console.log("CLICK");
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setShowModal(false);
      console.log("outside click");
      return;
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  console.log(showModal, " Modall");

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
    if (showModal) {
      //attach event listner to close menu on outside click.
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [handleClick, showModal]);

  return (
    <div className="pirrfid dataloggerPr">
      <IonGrid className="pgridrfid">
        <IonRow className="rowirp_player dlbck">
          <IonCol size="12" className="hdl imgdl">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1619821959/ambiTag_1.60_pdl0eb.mp4"
              width="100vw"
              height="95vh"
              playing={true}
              muted={true}
              loop={true}
            />
          </IonCol>
        </IonRow>
        <IonGrid className="irpgriddl">
          <IonRow className="irrfid_caurosel">
            <Featurecaurosel />
          </IonRow>
          <IonRow className="Product_heading_1_dl" data-aos="zoom-in-right">
            <IonCol size="7" className="col_p_head ">
              <IonText className="irproducthead bd_600">ScratchNest</IonText>
            </IonCol>
            <IonCol size="7" className="col_p_text">
              <IonText className="irproduct_text_head bd">Data Logger</IonText>
            </IonCol>

            <IonCol size="7" className="col_p_text3">
              <IonText className="irproduct_text2 head bd_600">
                SN - DL 101
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="qote_row_irp" id="qote_row_dl">
            <IonCol size="6" className="qote_col_irp">
              <button
                className="button_exp tocursor qote_btn_irp"
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "10%",
                }}
                onClick={() => history.push("/contact")}
              >
                Get Quote
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="irpgrid_2_dl">
          <IonRow className="pd_rowir" data-aos="zoom-in-right">
            <IonCol size="5" className="pd_colir">
              <IonText className="pd_irtext_head bd_600">
                Product Description
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="pd_rowir_des_dl" data-aos="zoom-in-left">
            <IonCol size="11" className="pd_txt_colir">
              <IonText className="pd_irtext bd_500">
                The AmbiTag temperature data logger is a compact USB device that
                records the temperature of its immediate surroundings
                continuously and generates alert when the temperature goes
                beyond pre-set limits. The recorded data can be retrieved by
                inserting the USB into any computer.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="features_irp_row" data-aos="zoom-in-left">
            <IonCol size="5" className="col_irp_features">
              <IonRow className="pd_rowir_feature">
                <IonCol size="5" className="pd_colir">
                  <IonText className="pd_irtext_head bd_600">Features</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="5" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <PictureAsPdfIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Auto Generated PDF Report
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="5" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <SettingsInputAntennaIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Long logging period of 90 days
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl ">
                <IonCol
                  size="7"
                  className="colfeature_irp wd_dl"
                  id="colfeature_dl"
                >
                  <IonText className="feature_icon">
                    <AirplayIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count " id="dl_mob_pnp">
                    Plug {"&"} Play device, No extra software is needed.
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <UsbIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Inbuilt USB</IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <IndeterminateCheckBoxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Slim and Compact Design
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp" id="colfeature_dl">
                  <IonText className="feature_icon">
                    <AlarmIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Alarm for Low and High Temperatures.
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <GradeIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    IP65 rating (optional)
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <FindReplaceIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    On-field battery replacement
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <BatteryChargingFullIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">Long Battery life</IonText>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="5" className="col_irp_features">
              <IonRow className="pd_rowir_feature">
                <IonCol size="5" className="pd_colir">
                  <IonText className="pd_irtext_head bd_600">
                    Applications
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="5" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <StorefrontIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count ga_2560">
                    Storage {"&"} Freezer Monitoringt
                  </IonText>
                </IonCol>
              </IonRow>

              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <AccessibleIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Storage {"&"} Freezer Monitoring
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <InboxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Distribution {"&"}; Last Mile Delivery
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <PersonAddIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Smart Attendance Systems
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <InboxIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Sea Freight {"&"} Air Freight
                  </IonText>
                </IonCol>
              </IonRow>

              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <FaceIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Blood banks Temperature logging
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow className="feature_irp_dl">
                <IonCol size="7" className="colfeature_irp">
                  <IonText className="feature_icon">
                    <LocalHospitalIcon style={{ fontSize: "2.5rem" }} />
                  </IonText>
                  <IonText className="feature_count">
                    Vaccine Temperature logging
                  </IonText>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow className="dl_img1_product" data-aos="zoom-in-right">
          <IonCol size="12" className="imgcol_ipr_p"></IonCol>
        </IonRow>
        <IonRow className="ipr_img1_product" data-aos="zoom-in-left">
          <IonCol size="12" className="imgcol_dl_p2"></IonCol>
        </IonRow>
        <IonGrid className="irpgrid_3_dl">
          <IonRow className="dropdown_irp_row">
            <IonCol size="10" className="collapsable_irp">
              <Collapsable />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow className="bigqote_row_irp">
          <IonCol size="6" className="bigqote_col_irp">
            <button
              className="button_exp tocursor bigqote_btn_irp"
              style={{
                background: "white",
                color: "black",
                borderRadius: "10%",
              }}
              onClick={() => history.push("/contact")}
            >
              Get Quote
            </button>
          </IonCol>
        </IonRow>
        <IonRow
          className="rowirp_player_dl1 vdo2bck_dl"
          data-aos="zoom-in-left"
        >
          <IonCol size="12" className="hdl imgdl">
            <ReactPlayer
              url="https://res.cloudinary.com/dpysmqax5/video/upload/v1617693634/VID-20210406-WA0000_p7cf2h.mp4"
              width="100vw"
              height="95vh"
              playing={true}
              muted={true}
              loop={true}
            />
          </IonCol>
        </IonRow>

        <div className="contact_footer_dlp irpfooter" data-aos="zoom-in-left">
          <Footer />
        </div>
      </IonGrid>
    </div>
  );
}

export default Dataloggern;
