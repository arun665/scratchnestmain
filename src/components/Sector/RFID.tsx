import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import "./sector.css";
import "./sector.scss";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useHistory } from "react-router";

function Sector() {
  let history = useHistory();
  const myRef = useRef(null);

  const [swiper, setSwiper] = useState<any>({});
  const init = async function (this: any) {
    setSwiper(await this.getSwiper());
  };

  const handleSlidesControlNext = () => {
    swiper.slideNext(300);
  };

  const handleSlidesControlPrev = () => {
    swiper.slidePrev(300);
  };

  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };
  //   const handleScroll = () => {
  //       if (window.scrollY > 400) {
  //         return()
  //     }
  //   };
  return (
    <div id="rfid">
      <IonGrid className="sector container both-scroll both-mandatory padding-0px">
        <IonRow id="e1" className="rfidimagesec element"></IonRow>
        <IonRow className="rfidsector  element">
          <IonCol size="12" className="rcolsector ">
            <h1 className=" line-1 anim-typewriter heading">RFID</h1>
            <IonText className=" rfidText ">
              Automate your operations and bring precision at your doorstep{" "}
              <br /> with our RFID products and solutions.
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="rfidsector incolsector element">
          <IonCol size="12" className="ircolsector">
            <h1 className=" line-1 ir_head_txt white-text anim-typewriter heading">
              Integrated Reader
            </h1>
            <IonText className=" ir_Text white-text">
              Fully integrated RAIN RFID Readers that work in the <br />{" "}
              ultra-high frequency (UHF) range.
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="rfidsector incolsector ray irrow element">
          <IonCol id="e2" size="12" className="ray">
            <h3 className="irhead anim-typewriter subheading">
              Integrated Reader
            </h3>
            <IonRow id="e3" className=" element irioncol cardrow">
              <IonCol className="column ircardcol ">
                <div className="cards1 ircard white-card">
                  <h1>One Port Reader</h1>
                </div>
                <IonCol size="5" className="imgir2">
                  <img
                    className="irphoto1"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459510/Oneport_sec.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton1 frbutton1 tocursor"
                  onClick={() => history.push("/products/ir")}
                  style={{ zIndex: 999999 }}
                >
                  Know More
                </IonButton>
              </IonCol>
              <IonCol className="column ircardcol2">
                <div className="cards3 ircard  white-card">
                  <h1>Two Port Reader</h1>
                </div>

                <IonCol size="5" className="imgir">
                  <img
                    className=" irphoto2"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459509/Twoport_sec.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton2 tocursor"
                  onClick={() => history.push("/products/ir-port2")}
                >
                  Know More
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>

        <IonRow className="rfidsector frsector_row element">
          <IonCol id="e2" size="12" className="frcolsector">
            <h1 className=" line-1 white-text fr_text anim-typewriter heading">
              Fixed Reader
            </h1>
            <IonText className=" rfidText frtext_n white-text" id="pos_left">
              Fixed RAIN RFID Readers that come with variable interfaces and UHF
              operation.
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow className="rfidsector  irrow element">
          <IonCol id="e2" size="12" className="rcolsector frsector_row2">
            <h3 className="irhead anim-typewriter bg_screen subheading">
              Fixed Reader
            </h3>
            <IonRow id="e3" className=" element irioncol cardrow">
              <IonCol className="column ircardcol ">
                <div className="cards1 ircard white-card">
                  <h1>Two Port Reader</h1>
                </div>
                <IonCol size="5" className="imgir">
                  <img
                    className="frphoto1"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459511/fixedreader2.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton1 frbutton1 tocursor"
                  onClick={() => history.push("/products/fr-port2")}
                >
                  Know More
                </IonButton>
              </IonCol>
              <IonCol className="column ircardcol2">
                <div className="cards3 ircard  white-card">
                  <h1>Four Port Reader</h1>
                </div>

                <IonCol size="5" className="imgir">
                  <img
                    className=" frphoto2"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459509/fixedfour.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton2 tocursor"
                  onClick={() => history.push("/products/fr-port4")}
                >
                  Know More
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>

        <IonRow className="rfidsector bg_an0 element">
          <IonCol id="e2" size="12" className="rcolsector bg_an0">
            <h1 className=" line-1  anim-typewriter heading">Antenna</h1>
            <IonText className="  antext" id="pos_left_an">
              High performance, far-field RFID antennas that provide reception
              and
              <br /> transmission of signals in the UHF frequency band.
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow className="rfidsector bg_an irrow frrow element">
          <IonCol id="e2" size="12" className="ancolsector">
            <h3 className=" irhead anim-typewriter white-text  ahtext subheading">
              Antenna
            </h3>
            <IonRow id="e3" className=" element irioncol cardrow">
              <IonCol className="column ircardcol ">
                <div className="cards1 text-white ircard white-card">
                  <h1 style={{ color: "white" }}>Circular Polarized</h1>
                </div>
                <IonCol size="5" className="imgir_an1">
                  <img
                    className="circular_ant"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459526/circular_sector.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton1 frbutton1 tocursor"
                  onClick={() => history.push("/products/circular-antenna")}
                >
                  Know More
                </IonButton>
              </IonCol>
              <IonCol className="column ircardcol2">
                <div className="cards3 ircard  white-card">
                  <h1 style={{ color: "white" }}>Linear Polarized</h1>
                </div>

                <IonCol size="5" className="imgir">
                  <img
                    className="linear_ant"
                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619459513/Linear_sector.png"
                  />
                </IonCol>
                <IonButton
                  className="irbutton2 tocursor"
                  onClick={() => history.push("/products/linear-antenna")}
                >
                  Know More
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>

        <IonRow id="e3" className=" element elementend cardrow">
          {window.innerHeight > 700 ? (
            <IonSlides
              className="slides_abt"
              mode="ios"
              onIonSlidesDidLoad={init}
              id="application_rfid"
            >
              <IonSlide>
                {" "}
                <IonCol className="column mob_adj">
                  <div className="cards1_sec_r white-cardapp image_inside_app_school">
                    <IonCol size="8" className="" />
                  </div>
                  <IonText className="text1 tx">
                    <u>
                      {" "}
                      School Attendance <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
                <IonCol className="column mob_adj">
                  <div className="cards2_sec_r2 white-cardapp image_inside_app_liquor"></div>
                  <IonText className="text2 tx">
                    <u>
                      {" "}
                      Liquor Monitoring <br /> System
                    </u>
                  </IonText>
                </IonCol>
                <IonCol className="column mob_adj">
                  <div className="cards3_sec_r3 white-cardapp image_inside_app_jewellery"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Jewellery Management <br /> System
                    </u>
                  </IonText>
                </IonCol>
                <NavigateNextIcon
                  className="navigation_next tocursor"
                  style={{
                    color: "whitesmoke",
                    fontSize: "78px",

                    zIndex: 9999999,
                  }}
                  onClick={() => handleSlidesControlNext()}
                />
              </IonSlide>

              <IonSlide>
                <NavigateBeforeIcon
                  className="navigation_prev tocursor"
                  style={{
                    color: "whitesmoke",
                    fontSize: "78px",

                    zIndex: 9999999,
                  }}
                  onClick={() => handleSlidesControlPrev()}
                />{" "}
                <IonCol className="column mob_adj">
                  <div className="cards1_sec_r white-cardapp image_inside_app"></div>
                  <IonText className="text1 tx">
                    <u>
                      {" "}
                      Office Attendance <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
                <IonCol className="column mob_adj">
                  <div className="cards2_sec_r2 white-cardapp image_inside_app_warehouse"></div>
                  <IonText className="text2 tx">
                    <u>
                      {" "}
                      Smart Warehouse
                      <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
                <IonCol className="column mob_adj">
                  <div className="cards3_sec_r3 white-cardapp image_inside_app_weapons"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Smart Weapons <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
            </IonSlides>
          ) : (
            <IonSlides
              pager={true}
              options={slideOpts}
              className=" slides_abt"
              id="application_slider_mob"
            >
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards1_sec_r white-cardapp image_inside_app_school"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      School Attendance <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards2_sec_r2 white-cardapp image_inside_app_liquor"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Liquor Monitoring <br /> System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards3_sec_r3 white-cardapp image_inside_app_jewellery"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Jewellery Management <br /> System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards1_sec_r white-cardapp image_inside_app"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Office Attendance <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards2_sec_r2 white-cardapp image_inside_app_warehouse"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Smart Warehouse
                      <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
              <IonSlide className="mob_app_slider">
                <IonCol size="4" className="sa_mob_app">
                  <div className="cards3_sec_r3 white-cardapp image_inside_app_weapons"></div>
                  <IonText className="text3 tx">
                    <u>
                      {" "}
                      Smart Weapons <br /> Management System
                    </u>
                  </IonText>
                </IonCol>
              </IonSlide>
            </IonSlides>
          )}
        </IonRow>
        <IonRow className="footer_row_sec_r">
          <Footer />
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default Sector;
