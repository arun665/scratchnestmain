import React from "react";
import "./Collapsable.scss";

import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import { IonRow, IonCol, IonText } from "@ionic/react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import GetAppIcon from "@material-ui/icons/GetApp";
class Collapsable extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false,
    spy3: {},
  };

  render() {
    return (
      <div className="collapsable_irp">
        <IonRow
          className="btn_row_c irpc_rows"
          id="hght"
          onClick={() => this.toggle(1)}
        >
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen,
            })}
          >
            Parameters Re-programmable using our Software
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen1 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen1}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen1 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen1 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Log Interval</b> - 10 min to 19 hour
                        <br /> <b>Start Delay</b> - 0 min to 5 Hour
                        <br /> <b>Time Zone</b> - UTC - 14.00 to UTC + 14.00
                        <br />
                        <b> Low Alarm </b>- Upto -40 °C
                        <br />
                        <b> High Alarm </b>- Upto 85 °C
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>

        <IonRow className="btn_row_c irpc_rows" onClick={() => this.toggle(2)}>
          <IonCol
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen,
            })}
          >
            Technical Specifications
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen1 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen2}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen2 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen2 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="pc_irpc_text">
                  <IonCol size="10" className="col_pctxt">
                    <IonText className="pc_desc bld_600">
                      <IonCol size="7" className="inner_text_irp">
                        {" "}
                        <b> Type</b> - Single use
                        <br /> <b>Measurement Range</b> <b>-</b>–40 °C to +85 °C
                        <br /> <b>Accuracy</b> - ±0.5 °C
                        <br />
                        <b> Resolution </b>- 0.25 °C
                        <br />
                        <b> Memory Capacity </b>- 13000
                        <br />
                        <b> Batteryy </b>- 3V Lithium
                        <br />
                        <b> Recording Interval </b>- 10 minutes(Customisable)
                        <br />
                        <b> Recording Duration </b>- 90 days
                        <br />
                        <b> Initial Delay </b>- 30 Mins
                        <br />
                        <b> Protection Class </b>- IP67
                        <br />
                        <b> Report Secured </b>- PDF
                        <br />
                        <b> Report Type </b>- Graphical and Tabular manner in
                        PDF
                        <br />
                        <b> Connectivity </b>- USB 2.0
                        <br />
                        <b> Alarm Type </b>- High {"&"} Low Alarm
                        <br />
                        <b> High Alarm </b>- 8 °C(Customisable)
                        <br />
                        <b> Low Alarm </b>- 2 °C(Customisable)
                        <br />
                        <b> Re-programmable </b>- Yes
                        <br />
                        <b> Shelf Life </b>- 12 months
                        <br />
                        <br />
                      </IonCol>
                    </IonText>
                  </IonCol>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>

        <IonRow className="btn_row_c irpc_rows">
          <IonCol
            size="10"
            className="togglecol_clk "
            className={cx("app__toggle", " btn_collap", {
              "app__toggle--active": this.state.isOpen6,
            })}
            onClick={() => this.toggle(6)}
          >
            Downloads
          </IonCol>
          <IonCol size="2" className="drp_icn_cirp">
            {this.state.isOpen6 ? (
              <ArrowDropUpIcon style={{ fontSize: "4rem" }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: "4rem" }} />
            )}
          </IonCol>

          <Collapse
            isOpen={this.state.isOpen6}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen6 ? "app__collapse--active" : "")
            }
            transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
            aria-hidden={this.state.isOpen6 ? "false" : "true"}
            elementType="article"
            render={(collapseState) => (
              <React.Fragment>
                <div className="app__content">
                  <IonRow className="btn-down">
                    <IonCol size="3" className="filename_btn">
                      <IonText className="textfile bdn_600">Ambitag </IonText>
                    </IonCol>
                    <IonCol size="3" className="file_btn">
                      <a
                        href="/Downloadfile/ambitag.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <i className="fas fa-download" />
                        <GetAppIcon style={{ fontSize: "29px" }} />
                      </a>
                    </IonCol>
                  </IonRow>
                  <IonRow
                    className="filename_btn ziprow"
                    style={{ textAlign: "center" }}
                  >
                    <IonText
                      className="ziplink tocursor"
                      style={{ fontSize: "23px", textAlign: "center" }}
                    >
                      <a href="https://bit.ly/3363nfL">
                        <u>Reprogramming Software and drive link </u>{" "}
                      </a>
                    </IonText>
                  </IonRow>
                </div>
              </React.Fragment>
            )}
          />
        </IonRow>
      </div>
    );
  }

  toggle = (index) => {
    let collapse = "isOpen" + index;

    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Collapsable;
