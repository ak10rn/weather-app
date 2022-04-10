import GeneralCard from "./generalCard";
import SunriseSunsetCard from "./sunriseSunsetCard";

const CardContainer = ({ info }) => {
  const {
    main: { humidity, pressure },
    visibility,
    wind,
    clouds,
    sys,
  } = info;

  const cards = [
    {
      title: "Humidity",
      body: humidity,
      unit: "%",
      footer: `${
        humidity < 30 ? "Low" : humidity < 70 ? "Comfortable" : "High"
      }`,
    },
    {
      title: "Visibility",
      body: visibility / 1000,
      unit: "km",
      footer: `${
        visibility < 2000 ? "Bad" : visibility < 10000 ? "Normal" : "Good"
      }`,
    },
    {
      title: "Wind Status",
      body: wind.speed * 3.6,
      unit: "km/h",
      footer: `${
        wind.speed < 72 ? "Gentle" : wind.speed > 144 ? "Strong" : "Normal"
      }`,
    },
    {
      title: "Cloudiness",
      body: clouds.all,
      unit: "%",
      footer: `${
        clouds.all < 20 ? "Clear" : clouds.all > 70 ? "Cloudy" : "Normal"
      }`,
    },
    {
      title: "Pressure",
      body: pressure,
      unit: "hPa",
      footer: `${
        pressure < 1000 ? "Low" : pressure > 1024 ? "High" : "Normal"
      }`,
    },
  ];
  const sunriseSunsetData = { sunrise: sys.sunrise, sunset: sys.sunset };

  return (
    <div className="card-container">
      {cards?.map((card) => (
        <GeneralCard {...card} key={card.title} />
      ))}
      <SunriseSunsetCard {...sunriseSunsetData} />
    </div>
  );
};

export default CardContainer;
