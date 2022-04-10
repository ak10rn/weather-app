const SunriseSunsetCard = ({ sunrise, sunset }) => {
  const getTime = (epoch) => {
    var date = new Date(0);
    date.setUTCSeconds(epoch);
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      hour12: true,
      minute: "numeric",
    });
  };

  return (
    <div
      className="card"
      style={{ width: "18rem", "background-color": "#FDAF75" }}
    >
      <div className="card-body">
        <h5 className="card-title">Sunrise & Sunset</h5>
        <p className="card-text">{getTime(sunrise)}</p>
        <p className="card-text">{getTime(sunset)}</p>
      </div>
    </div>
  );
};

export default SunriseSunsetCard;
