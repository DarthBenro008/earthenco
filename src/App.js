import "./App.css";
import Globe from "./components/globs";
import { useEffect, useState } from "react";
import WelcomeScreen from "./components/welcome";
import Overlay from "./components/overlay";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        const coords = [position.coords.latitude, position.coords.longitude];
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  const switchComponent = () => {
    setIsWelcome(false);
  };

  return (
    <div className="absolute">
      <div>
        {/* <Globe /> */}
        {isWelcome ? <WelcomeScreen moveNext={switchComponent} /> : <Globe />}
      </div>
      <div className="absolute text-white top-0">
        nice
        <Overlay />
      </div>

      <div style={{ maxWidth:`30vw`, position: `absolute`, right: `10%`, top:`50%`, translate: `translate(0%, -50%)`}} className="text-white flex flex-col">
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
          Content
      </div>
    </div>
  );
}

export default App;
