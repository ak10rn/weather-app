import { useState, useEffect } from "react";

import CardContainer from "./components/cardContainer";
import SeachBar from "./components/searchBar";
import SideDetailsBar from "./components/sideDetailsBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getWeatherFromCoords } from "./services/weatherService";

export default function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const info = await getWeatherFromCoords(latitude, longitude);
        // console.log(info);
        setInfo(info);
      }
    );
  }, []);

  useEffect(() => {
    document.title = info?.name + " | Weather";
  }, [info]);

  return (
    <div className="App row" style={{ "background-color": "#E4D1B9" }}>
      <ToastContainer />
      <div className="col-4 mt-4">
        <SeachBar setInfo={setInfo} />
        {info && <SideDetailsBar info={info} />}
      </div>
      <div className="col-8">{info && <CardContainer info={info} />}</div>
    </div>
  );
}
