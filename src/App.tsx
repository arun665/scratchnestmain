//edited
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import HomeSector from "./components/HomeSectors/HomeSector";
import Contact from "./components/Contact/index";
import Sector from "./components/Sector/RFID";
import Beacon from "./components/Sector/Beacon/Beacon";
import DataLogger from "./components/Products/DataLogger";
import React, { Dispatch, useEffect, useState } from "react";
import Aboutus from "./components/About/Aboutus";
import Support from "./components/Support/Support";
import Topheader from "./components/top_header";
import Login from "./components/Login";
import Createuser from "./components/Login/createuser/CreateUser";
import Splashscreen from "./components/Splash Screen/Splashscreen";
import DataLoggerSec from "./components/Sector/Logger/DataLogger_sec";
import Education_sec from "./components/Sector/Education/Education_sec";
import Rfid_p from "./components/Products/Rfid/Rfid_p";
import Irrfidp2 from "./components/Products/irrfidp2/Irrfidp2";
import Frrfidp2 from "./components/Products/fixedReaderp2/Frp2";
import Frrfidp4 from "./components/Products/fixedReaderp4/Frp4";
import CircualrAnt from "./components/Products/Antenna/CircularAnt/Circulara";
import LinearAnt from "./components/Products/Antenna/LinearAnt/LinearAnt";
import Trackingb from "./components/Products/Beacon/TrackingBeacon/TrackingBeacon";
import Nopage from "./components/ComingSoon/Nopage";
import Dataloggern from "./components/Products/Dataloggern/Dataloggern";
//import { auth } from "./firebaseConfig";

import { useStateValue } from "./components/Redux/StateProvider";
import { type } from "jquery";
import Shop from "./components/Shop/Shop";



interface MyAction {
  type: string;
  user: any;
}
type MyDispatch = Dispatch<MyAction>[]

function App() {
  const [dispatch ]:MyDispatch = useStateValue();
  
  const [loading, setLoading] = useState(true);
  const reload = () => window.location.reload();
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  //useEffect(() => {
    //const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //if (authUser) {
        // the user is logged in
       // dispatch({
         // type: "SET_USER",
          //user: authUser,
     //   });
     // } else {
        //user is logged out
      //  dispatch({
       //   type: "SET_USER",
       //   user: null,
      //  });
    //  }
  //  });
    // console.log("USER IS>>", user);

   // return () => {
      //cleanup once logout
    //  unsubscribe();
   // };
  // }, []);


  return (
    <>
      <div className="App">
        {loading == true ? (
          <Splashscreen />
        ) : (
          <Router>
            <Topheader />
            <Switch>
              <Route component={HomeSector} exact path="/" />
              <Route component={Contact} path="/contact" />
              <Route component={Sector} path="/sector/rfid" />
              <Route component={Beacon} path="/sector/beacon" />
              <Route component={DataLogger} path="/products/logger" />
              <Route component={Aboutus} path="/about" />
              <Route component={Support} path="/support" />

              <Route component={Login} path="/login" />
              <Route component={Createuser} path="/createuser" />
              <Route component={DataLoggerSec} path="/sector/datalogger" />
              <Route component={Education_sec} path="/sector/education" />
              <Route component={Rfid_p} path="/products/ir" />
              <Route component={Irrfidp2} path="/products/ir-port2" />
              <Route component={Frrfidp2} path="/products/fr-port2" />
              <Route component={Frrfidp4} path="/products/fr-port4" />
              <Route
                component={CircualrAnt}
                path="/products/circular-antenna"
              />
              <Route component={LinearAnt} path="/products/linear-antenna" />
              <Route component={Trackingb} path="/products/tracking-beacon" />
              <Route component={Dataloggern} path="/products/ambitag" />
              <Route component={Shop} path="/shop" />
              <Route component={Nopage} path="/cart" />
              <Route component={Login} path="/account" />
              <Route component={Nopage} path="/iot" />
              <Route
                path="/ambitag-prebooking"
                render={() => "/ambitag-prebooking"}
              />
            </Switch>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
