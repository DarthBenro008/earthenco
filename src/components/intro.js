import React, { useEffect } from "react";

import { useStateValue } from "../data/state";
import Button from "./button";
import Description from "./description";
import Fade from "./fade";
import { reverseGeoCode } from "../data/api";

export default function Intro() {
  const [{ hasLoaded, start }, dispatch] = useStateValue();

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // const coords = [position.coords.latitude, position.coords.longitude];
        async function getLocationalData(lat, long) {
          const response = await reverseGeoCode(lat, long);
          console.log(response);
          let currentMarker = {};
          currentMarker.id = "marker7";
          currentMarker.value = 50;
          currentMarker.color="gold";
          currentMarker.city = response?.city ?? response.locality;
          currentMarker.countryCode = response.countryCode;
          currentMarker.countryName = response.countryName;
          currentMarker.coordinates = [response.latitude, response.longitude];
          console.log(currentMarker);
          dispatch({ type: "LOCATIONAL", payload: currentMarker });
        }

        getLocationalData(position.coords.latitude, position.coords.longitude);

        // dispatch({ type: "COORDINATES", payload: coords });
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <Fade className="intro" show={!start}>
      <h1>Earthenco</h1>
      <p>
        <Description />
      </p>
      <Fade show={hasLoaded}>
        <button
          style={{ pointerEvents: `auto` }}
          onClick={() => dispatch({ type: "START" })}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Observe Pollution
        </button>
        {/* <Button label="Explore" onClick={() => dispatch({ type: 'START' })} /> */}
      </Fade>
    </Fade>
  );
}
