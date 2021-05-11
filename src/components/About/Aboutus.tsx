import {
  IonRow,
  IonGrid,
  IonText,
  IonCol,
  IonSlides,
  IonSlide,
  IonContent,
} from "@ionic/react";
import React from "react";
import "./about.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../Footer/Footer";
import MeetSliderMob from "./meet_slider";

function Aboutus() {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <div className="About">
      <IonGrid className="about_grid">
        <IonRow className="about_top">
          <IonCol size="8" className="about_heading">
            <IonText className="head_a0">
              <h1 className="white-text heading_about" id="ab_top_img">
                {" "}
                About Us
              </h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="about_a1">
          <IonCol size="4" className="a_container image_ab" id="oo_img">
            {/* <IonText className="a_col os">
              <h1 className="our_story white-text">Our Origin</h1>
            </IonText> */}
          </IonCol>
          <IonCol size="5" className="os_text" id="oo_text">
            <IonText className="white-text ">
              <h1 className="ostext_in">
                Some aspiring IITians belonging to different fields, under the
                esteemed guidance of their professor, build this revolutionary
                forum where they design everything from “scratch” and come up
                with technologies never made in India before. ScratchNest is an
                Indian company incubated in Technology Business Incubator IIT
                Ropar. We believe in providing our users with the best possible
                service and inspiration to make the “first of its kind”.
              </h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="about_a1 a_top" id="wwd_row_a">
          <IonCol size="5" className="os_text" id="wwd_text">
            <IonSlides
              className="slides_abt_a whyslide_lef"
              pager={true}
              options={slideOpts}
            >
              <IonSlide className="silde_wwd">
                <IonText className="white-text ">
                  <h1 className="ostext_in">
                    ScratchNest pioneers in delivering customized experiences of
                    the next-gen technologies and bringing innovation to
                    everything you use. We develop RFID, NFC, NBIoT, Bluetooth
                    devices and Dataloggers crafted totally from scratch,
                    delivering you with the never-before experience.
                  </h1>
                </IonText>
              </IonSlide>
              <IonSlide className="silde_wwd2">
                <IonText className="white-text ">
                  <h1 className="ostext_in">
                    Our team engineers the best in devices to suit your needs
                    and transform physical systems into intelligent workers.
                    Come, see how fun systems can be when equipped with
                    ScratchNest.
                  </h1>
                </IonText>
              </IonSlide>
            </IonSlides>
            <IonText>
              <h2 className=" info_text">
                <span>Slide next --{">"}</span>
              </h2>
            </IonText>
          </IonCol>
          <IonCol size="4" className="a_container image_ab_wwd" id="wwd_img">
            {/* <IonText className="a_col os">
              <h1 className="our_story white-text">What we Deliver?</h1>
            </IonText> */}
          </IonCol>
        </IonRow>
        <IonRow className="about_a1 a_top">
          <IonCol size="4" className="a_container image_ab_vision" id="ov_img">
            {/* <IonText className="a_col os">
              <h1 className="our_story white-text">Our Vision</h1>
            </IonText> */}
          </IonCol>
          <IonCol size="4" className="os_text" id="ov_text">
            <IonText className="white-text ">
              <h1 className="ostext_in">
                ...to reach that pinnacle where we reside in the roots of
                service providers, where every IoT brand of the world has
                ‘ScratchNest’ printed somewhere in its depths, and where
                ScratchNest is the first trusted name in mind whenever it comes
                to IoT.
              </h1>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="about_a1 a_top">
          <IonCol size="5" className="os_text whyus_left" id="wu_content">
            <IonContent>
              <IonSlides
                pager={true}
                options={slideOpts}
                className=" whyslide_lef"
              >
                <IonSlide>
                  <IonText className="bl white-text" id="wu_inside_txt">
                    <h1 className="ostext_in " id="wu_head_text">
                      High Performance Products
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                      {" "}
                      All our components, devices, and products are developed
                      completely from scratch, assuring the best in class
                      performance.
                    </h2>
                  </IonText>
                </IonSlide>
                <IonSlide>
                  <IonText className="bl white-text" id="wu_inside_txt">
                    <h1 className="ostext_in" id="wu_head_text">
                      We build from Scratch
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                      {" "}
                      All our components, devices, and products are developed
                      completely from scratch, assuring the best in class
                      performance.
                    </h2>
                  </IonText>
                </IonSlide>
                <IonSlide>
                  <IonText className="bl white-text" id="wu_inside_txt">
                    <h1 className="ostext_in" id="wu_head_text">
                      Latest Technologies
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                      {" "}
                      We employ cutting edge technologies and provide
                      state-of-the-art solutions for everything.
                    </h2>
                  </IonText>
                </IonSlide>
                <IonSlide>
                  <IonText className="bl white-text" id="wu_inside_txt">
                    <h1 className="ostext_in" id="wu_head_text">
                      The Dedicated Team
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                      {" "}
                      We comprise the best talents across the nation who work
                      diligently to craft the best products and services.
                    </h2>
                  </IonText>
                </IonSlide>
                <IonSlide>
                  <IonText className="bl white-text" id="wu_inside_txt">
                    <h1 className="ostext_in" id="wu_head_text">
                      Extended Support
                    </h1>
                    <h2 style={{ fontSize: "20px" }}>
                      {" "}
                      We stay with our clients throughout, providing complete
                      technical support and consultancy.
                    </h2>
                  </IonText>
                </IonSlide>
              </IonSlides>
            </IonContent>
            <IonText>
              <h2 className=" info_text">
                <span>Slide next --{">"}</span>
              </h2>
            </IonText>
          </IonCol>
          <IonCol size="4" className="whyimg_con image_ab_why" id="wu_img">
            {/* <IonText className="a_col os">
              <h1 className="our_story why white-text">Why Us?</h1>
            </IonText> */}
          </IonCol>
        </IonRow>
        <IonRow className="meetus_row about_a1 a_top">
          <IonCol size="8" className="meet_us">
            <IonText>
              <h1 className="meet_h white-text">Meet The Team..</h1>
            </IonText>
            <IonRow className="bdr_row">
              <IonCol size="1" className="bdr_meet_head" />
              <IonCol size="1" className="bdr_meet_head" />
              <IonCol size="1" className="bdr_meet_head" />
            </IonRow>
          </IonCol>
          {window.innerWidth < 700 ? (
            <MeetSliderMob />
          ) : (
            <IonCol size="10" className="meet_slider">
              <IonContent className="content_meet">
                <IonSlides
                  pager={true}
                  options={slideOpts}
                  className=" whyslide_lef"
                  id="person_slider_abt"
                >
                  <IonSlide className="rohan_meet_row">
                    <IonRow className="meet_us_row">
                      <div className="container_about">
                        <div className="row team-row">
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922167/akshit_wdadcm.png"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Founder {"&"} Director</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Akshit
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Founder
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922165/amit_gqij6s.png"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Founder {"&"} Director</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Amit
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Founder
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922163/Jeevant_vuay3o.jpg"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Founder {"&"} Director</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Jeevant
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Founder
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922088/lalit_ynvmj0.png"
                                    alt="akshit"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Director {"&"} CTO</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Lalit
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Dirctor {"&"} CTO
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                        </div>
                      </div>
                    </IonRow>
                  </IonSlide>
                  <IonSlide className="rohan_meet_row">
                    <IonRow className="meet_us_row">
                      <div className="container_about">
                        <div className="row team-row">
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img ">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922080/sumansir_nnj8up.png"
                                    alt="Non Executive Director"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Non Executive Director</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Suman
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Non Executive Director
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922157/kamal_qycesr.png"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Technical Advisor</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Kamaljeet
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Technical Advisor
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922168/abhijeet_n2tfzt.jpg"
                                    alt="Business Advisor"
                                  />
                                  <div className="overlay ">
                                    <div className="team-details text-center  ">
                                      <p>Business Advisor</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro abhijeet_text">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Abhijeet
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Business Advisor
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922164/Dr_K_P_S_Pasricha_ukyf7f.jpg"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Sales Executive</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Dr. KPS Pasricha
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Sales Executive
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                        </div>
                      </div>
                    </IonRow>
                  </IonSlide>
                  <IonSlide className="rohan_meet_row">
                    <IonRow className="meet_us_row">
                      <div className="container_about">
                        <div className="row team-row">
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759402/vikas_Malav_PCB_Engineer_uhacdz.jpg"
                                    alt="Vikas Malav"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Vikas Malav</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Vikas Malav
                                    </h2>
                                    <span className="white-text name_text_about">
                                      PCB Engineer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759418/Ridhima_firmware_Engineer_cr9qma.jpg"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Firmware Engineer</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Ridhima
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Firmware Engineer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img ">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759566/_RADHIKA_RAINA_RF_Engineer_sdssyr.jpg"
                                    alt="RF Engineer"
                                  />
                                  <div className="overlay ">
                                    <div className="team-details text-center  ">
                                      <p>RF Engineer</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro abhijeet_text">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Radhika Raina
                                    </h2>
                                    <span className="white-text name_text_about">
                                      RF Engineer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759568/Mr._Jyoti_Accounts_fgp757.jpg"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Accounts</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Jyoti
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Accounts
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                        </div>
                      </div>
                    </IonRow>
                  </IonSlide>
                  <IonSlide className="rohan_meet_row">
                    <IonRow className="meet_us_row">
                      <div className="container_about">
                        <div className="row team-row">
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922084/shreya_btqvhl.png"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Content {"&"} Social Media Manager</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Shreya
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Social Media Manager
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img ">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922070/vivek_h0x1er.png"
                                    alt="Sales Manager"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Sales Manager</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Vivek
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Sales Manager
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img ">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922082/sujal_s9pd4i.png"
                                    alt="Business Advisor"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Product Associate</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Sujal
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Product Associate
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1616922085/rohan_dzrv2q.png"
                                    alt=""
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Graphic Designer</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Rohan
                                    </h2>
                                    <span className="white-text name_text_about">
                                      Graphic Designer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                        </div>
                      </div>
                    </IonRow>
                  </IonSlide>
                  <IonSlide className="rohan_meet_row">
                    <IonRow className="meet_us_row">
                      <div className="container_about">
                        <div className="row team-row">
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618759788/Nitin_Singh_3D_designer_dhsman.jpg"
                                    alt="Vikas Malav"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Nitin Singh</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Nitin Singh
                                    </h2>
                                    <span className="white-text name_text_about">
                                      3D Designer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member last text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618954540/Rohit.jpg"
                                    alt="Rohit"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>3D Artist</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Rohit
                                    </h2>
                                    <span className="white-text name_text_about">
                                      3D Artist
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618954575/Ranjit.jpg"
                                    alt="Ranjit"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>Ranjit</p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      Ranjit
                                    </h2>
                                    <span className="white-text name_text_about">
                                      3D Artist
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol className="col_teams">
                            <div className="col-md-4 col-sm-6 team-wrap">
                              <div className="team-member text-center">
                                <div className="team-img abhijeet">
                                  <img
                                    src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619892681/Mohit_Mahal_klxamz.jpg"
                                    alt="Ranjit"
                                    className="adj_mohit"
                                  />
                                  <div className="overlay">
                                    <div className="team-details text-center">
                                      <p>3D Designer </p>
                                    </div>
                                  </div>
                                </div>
                                <IonRow className="text-row-intro">
                                  <IonCol size="10" className="text-intro">
                                    <h2 className="team-title white-text name_text_about">
                                      MOHIT MAHAL
                                    </h2>
                                    <span className="white-text name_text_about">
                                      3D Designer
                                    </span>
                                  </IonCol>
                                </IonRow>
                              </div>
                            </div>
                          </IonCol>
                        </div>
                      </div>
                    </IonRow>
                  </IonSlide>
                </IonSlides>
              </IonContent>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>
      <div className="Footer_about">
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;
