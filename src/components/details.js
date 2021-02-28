import React, { useEffect, useState } from "react";

import { useStateValue } from "../data/state";
import Button from "./button";
import Fade from "./fade";
import api from "../data/api";

function getSearchUrl(city, country, keyword) {
  const formattedQuery = `${encodeURIComponent(city)}, ${encodeURIComponent(
    country
  )} ${encodeURIComponent(keyword)}`.replace(/(%20| )/g, "+");
  return `https://www.google.com/search?q=${formattedQuery}`;
}

export function getRandomMarker({ focusedMarker, markers }) {
  const filteredMarkers = markers.filter((marker) => {
    return marker.id !== focusedMarker?.id;
  });
  return filteredMarkers[Math.floor(Math.random() * filteredMarkers.length)];
}

export default function Details(props) {
  const [
    { config, focusedMarker, markers, currentCoordinates },
    dispatch,
  ] = useStateValue();
  const randomMarker = getRandomMarker({ focusedMarker, markers });
  const [data, setData] = useState({});
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    // const data = api(currentCoordinates[0],currentCoordinates[1]);
    console.log(data);
  }, [data]);

  const fetchData = async (lat, long) => {
    const apiFetchedData = await api(lat, long);
    setData(apiFetchedData);
    console.log("AMAZEEEE", data);
  };

  let content;
  if (focusedMarker) {
    const {
      city,
      countryCode,
      countryName,
      value,
      coordinates,
    } = focusedMarker;
    const url = getSearchUrl(city, countryName, config.keyword);
    const topics = [];
    if ((currentCity === "") | (currentCity !== focusedMarker.city)) {
      setCurrentCity(focusedMarker.city);
      fetchData(coordinates[0], coordinates[1]);
    }

    content = (
      <>
        <div className="absolute bottom-10 left-10">
          <Button
            label="Back to globe"
            onClick={() => dispatch({ type: "FOCUS" })}
          />
        </div>
        <div className="content">
          <h2>
            {city}, {countryName}
          </h2>
          <div className="details-content">
            Air Information Data:
            <h5>
              {data?.list == null
                ? ""
                : "CO2: " + data.list[0].components.co + " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "NO2: " + data.list[0].components.no2 + " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "O3: " + data.list[0].components.o3 + " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "SO2: " + data.list[0].components.so2 + " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "Fine Particles: " + data.list[0].components.pm2_5 + " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "Coarse Particles: " +
                  data.list[0].components.pm10 +
                  " μg/m3"}
            </h5>
            <h5>
              {data?.list == null
                ? ""
                : "Ammonia: " + data.list[0].components.nh3 + " μg/m3"}
            </h5>
          </div>
          <Button
            label="View search results"
            onClick={() => window.open(url, "_blank")}
          />
          <div className="mt-5">
            <Button
              label="Go to Random City"
              onClick={() => dispatch({ type: "FOCUS", payload: randomMarker })}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <Fade className="details" show={focusedMarker}>
      {content}
    </Fade>
  );
}
