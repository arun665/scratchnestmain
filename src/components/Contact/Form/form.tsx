import { IonButton, IonCol, IonRow } from "@ionic/react";
import React, { useState } from "react";
import "./form.css";
import axios from "../../../axios";

function Cform() {
  const [email, setEmail] = useState("");
  const [messager, setMessage] = useState("");
  const [name, setName] = useState("");

  const headers = {
    "Content-Type": "application/json",
  };
  const submitRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ email, messager });
    const args = { email, messager };
    try {
      const res = axios
        .post("/", args, {
          headers: headers,
        })
        .then((response) => {
          alert("message sucesssFully sent");
        });
      resetForm();
    } catch (error) {
      alert("error sending message");
    }
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="contactform">
      <form onSubmit={submitRequest}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="name basicp"
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <br />
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="email basicp"
          placeholder="Enter A Valid Email Address"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input
          value={messager}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          className="message basicp"
          placeholder="Enter Your Message"
        />
      </form>
      <br />
      <IonRow className="button_explore_row_cform tocursor">
        <IonCol size="5" className="btn_explore_col btnCol_2560">
          <button
            className="button_exp tocursor"
            type="submit"
            style={{
              background: "white",
              color: "black",
              borderRadius: "10%",
            }}
            onClick={submitRequest}
          >
            Submit
          </button>
        </IonCol>
      </IonRow>
    </div>
  );
}

export default Cform;
