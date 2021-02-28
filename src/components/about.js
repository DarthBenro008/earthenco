import React from "react";

import Button from "./button";
import Fade from "./fade";
import Link from "./link";

export default function About({ onHide, show }) {
  return (
    <Fade className="about" show={show}>
      <div className="about-content">
        <h2>About</h2>
        <p>
          <Link link="GITHUB_REPO">Earth Enco</Link> is a{" "}
          <Link link="JAMSTACK">React</Link> application built without any
          server components. Data is fetched from Open Weather API and is
          monitored by New Relic{" "}
        </p>
        <p>
          This project is inspired by the wonderful{" "}
          <Link link="METOO">#metoorising</Link> project. With most of
          interactive features supported by react-globe, the project aims to
          simplify building beautiful globe visualizations with Air Pollution.
        </p>
        <p>
          Please visit the <Link link="GITHUB_REPO">Github</Link> project page
          for more instructions on customizing instances and leave a star if you
          like the concept!
        </p>
        <Button label="Back" onClick={onHide} />
      </div>
    </Fade>
  );
}
