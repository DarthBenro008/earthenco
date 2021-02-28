import React, { useState } from "react";
import About from "./about";
import Link from "./link";

export default function Overlay() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <About onHide={() => setShowAbout(false)} show={showAbout} />
      <div className="absolute top-5 right-10 text-white">
        <Link link="GITHUB_REPO" className={"text-white"}>
          Checkout the Source Code
        </Link>
      </div>
      <div className="absolute top-5 left-10">
        <Link onClick={() => setShowAbout(true)} className={"text-white"}>
          About
        </Link>
      </div>
    </div>
  );
}
