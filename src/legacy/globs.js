// import React from "react";
// import ReactGlobe from "react-globe";
// import { useEffect, useState } from "react";
// import config from "../data/config";

// export default function Globe3() {

//   // const [currentCoords, setCurrentCoords] = useState([]);


//   // useEffect(() => {
//   //   if ("geolocation" in navigator) {
//   //     console.log("Available");
//   //     navigator.geolocation.getCurrentPosition(function (position) {
//   //       console.log("Latitude is :", position.coords.latitude);
//   //       console.log("Longitude is :", position.coords.longitude);
//   //       const coords = [position.coords.latitude, position.coords.longitude];
//   //       setCurrentCoords(coords);
//   //     });
//   //   } else {
//   //     console.log("Not Available");
//   //   }
//   // }, []);

//   const markers = [
//     {
//       id: "marker1",
//       city: "Singapore",
//       color: "red",
//       coordinates: [1.3521, 103.8198],
//       value: 50,
//     },
//     {
//       id: "marker2",
//       city: "New York",
//       color: "blue",
//       coordinates: [40.73061, -73.935242],
//       value: 25,
//     },
//     {
//       id: "marker3",
//       city: "San Francisco",
//       color: "orange",
//       coordinates: [37.773972, -122.431297],
//       value: 35,
//     },
//     {
//       id: "marker4",
//       city: "Beijing",
//       color: "gold",
//       coordinates: [39.9042, 116.4074],
//       value: 135,
//     },
//     {
//       id: "marker5",
//       city: "London",
//       color: "green",
//       coordinates: [51.5074, 0.1278],
//       value: 80,
//     },
//     {
//       id: "marker6",
//       city: "Los Angeles",
//       color: "gold",
//       coordinates: [29.7604, -95.3698],
//       value: 54,
//     },
//   ];

//   const options = {
//     ambientLightColor: '#b34444',
//     ambientLightIntensity: 1,
//     cameraAutoRotateSpeed: 0.01,
//     cameraRotateSpeed: 0.2,
//     enableCameraZoom: false,
//     enableDefocus: false,
//     focusAnimationDuration: 1000,
//     globeCloudsOpacity: 0.1,
//     globeGlowCoefficient: 0.1,
//     globeGlowColor: 'red',
//     globeGlowPower: 5,
//     globeGlowRadiusScale: 0.2,
//     pointLightIntensity: 3,
//     pointLightPositionRadiusScales: [-1, 6, -2.5],
//     markerTooltipRenderer: (marker) => `${marker.city} (${marker.value})`,
//   };

//   const [globe, setGlobe] = useState(null);
//   console.log(globe);

//   const {globeBackgroundTexture, globeCloudsTexture} = config;

//   return (
//     <div>
//       <ReactGlobe
//         height="100vh"
//         width="100vw"
//         globeBackgroundTexture={globeBackgroundTexture}
//           globeCloudsTexture={globeCloudsTexture}
//         // globeCloudsTexture={null}
//         initialCoordinates={[13.144, 80.204]}
//         markers={markers}
//         options={options}
//         // width="100%"
//         onClickMarker={(marker, markerObject, event) =>
//           console.log(marker, markerObject, event)
//         }
//         onMouseOutMarker={(marker, markerObject, event) =>
//           console.log(marker, markerObject, event)
//         }
//         onGlobeTextureLoaded={() => console.log("globe loaded")}
//         onMouseOverMarker={(marker, markerObject, event) =>
//           console.log(marker, markerObject, event)
//         }
//       />
//     </div>
//   );
// }
