//edited
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { ReactNode, useState } from "react";
import "./topHeader.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import Sidemenu from "../SideMenu/Sidemenu";
import { Link, useHistory } from "react-router-dom";
//import { auth } from "../../firebaseConfig";
import { useStateValue } from "../Redux/StateProvider";

// interface UserType {
//  user:Array<number|string>
// }

function Topheader(props:any) {
  const [{ user }] = useStateValue();
  const [open, setOpen] = useState(false);
  const history = useHistory();
/*
  const Signin = () => {
    if (user) {
      auth.signOut();
    }
  };
*/
  console.log(user)
  return (
    <div className="topheader">
      <IonGrid className="tohHeader_grid">
        <IonRow className="row_logo_t">
          <IonCol size="5" className="logo_top_col">
            <Link to="/">
              <img
                className="logo1"
                src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
                alt="logo1"
              />
            </Link>
          </IonCol>
        </IonRow>
        <IonRow className="sidebar_top_row ">
          <IonCol size="4" className="sidebar_top_col">
            <ShoppingCartIcon
              fontSize="large"
              style={{ color: "whitesmoke" }}
              className="tocursor shoping_icon"
              onClick={() => history.push("/cart")}
            />
            <PersonIcon
              className="tocursor person_icon"
              fontSize="large"
              style={{ color: "whitesmoke" }}
              onClick={() =>{
                if(!user){
                history.push("/account")
                }
                else{
                  alert("user already logged in")
                }
              } }
            />
            <div onClick={() => setOpen(!open)}>
              <MenuIcon
                className="tocursor menu_icon"
                fontSize="large"
                style={{ color: "whitesmoke" }}
              />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      {open && <Sidemenu open={open} setOpen={setOpen} />}
    </div>
  );
}

export default Topheader;
