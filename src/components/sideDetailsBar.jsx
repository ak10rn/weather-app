const SideDetailsBar = ({ info }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = () => {
    const d = new Date();
    return weekday[d.getDay()];
  };
  return (
    <div>
      <div className="row m-2 display-1">{info?.name}</div>
      <div className="row m-2 display-6">
        <br></br>
        {Math.round(info?.main.temp - 273)}
        {" °C"}
      </div>
      <div className="row m-2 display-5">{day()}</div>
    </div>
  );
};

export default SideDetailsBar;
