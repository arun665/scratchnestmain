import React from "react";

function Maps() {
  return <div></div>;
}

export default Maps;

// import React from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// import "./map.css";

// export class Maps extends React.Component {
//   render() {
//     const mapStyles = {
//       width: "100%",
//       height: "100%",
//     };
//     return (
//       <Map
//         google={this.props.google}
//         zoom={15}
//         style={mapStyles}
//         initialCenter={{ lat: 9.761927, lng: 79.95244 }}
//       >
//         <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "TOKEN HERE",
// })(Maps);
