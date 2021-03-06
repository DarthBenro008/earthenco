import React, { useEffect } from "react";

import Details from "./details";
import Globe from "./globe";
import Intro from "./intro";
import Overlay from "./overlay";
import { useStateValue } from "../data/state";

export default function App2() {
  return (
    <>
      <Globe />
      <Intro />
      <Overlay />
      <Details />
    </>
  );
}
