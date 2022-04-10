const GeneralCard = (props) => {
  const { title, body, unit, footer } = props;
  return (
    <div
      className="card"
      style={{ width: "18rem", "background-color": "#FDAF75" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body} {unit}
        </p>
        <p className="card-text">{footer}</p>
      </div>
    </div>
  );
};

export default GeneralCard;
