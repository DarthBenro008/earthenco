import React from "react";

const links = {
  GITHUB_REPO: "https://github.com/DarthBenro008/earthenco",
  NEW_RELIC: "https://newrelic.com/",
  OPEN_WEATHER: "https://openweathermap.org/",
};

export default function Link({ children, className, link, onClick }) {
  const hasLink = links[link] && !onClick;
  return (
    <a
      className={className}
      href={hasLink ? links[link] : "#"}
      rel={hasLink ? "noopener noreferrer" : undefined}
      target={hasLink ? "_blank" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
