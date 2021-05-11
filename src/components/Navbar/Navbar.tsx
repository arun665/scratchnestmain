import { IonButtons, IonHeader, IonIcon, IonTitle } from "@ionic/react";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_menu">
      <div className="navigation">
        <a href="#rfid" className="link">
          <li>RFID</li>
        </a>
        <a href="#beacon">
          {" "}
          <li>Beacon</li>
        </a>
        <a href="#dataLogger">
          <li>Data Logger</li>
        </a>

        <a href="#education">
          <li>Education</li>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
