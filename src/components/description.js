import React from "react";

import { useStateValue } from "../data/state";
import Link from "./link";

export default function Description() {
  const [{ config }] = useStateValue();

  return (
    <div className="text-white">
      Visualizing <b>{`"${config.keyword}"`}</b> of Earth with{" "}
      <Link link="OPEN_WEATHER">OpenWeather</Link> and{" "}
      <Link link="NEW_RELIC">NewRelic</Link>
    </div>
  );
}
