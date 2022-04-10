import { useState } from "react";
import SearchArea from "./searchArea";
import SearchAreaLoc from "./searchAreaLoc";

const SeachBar = ({ setInfo }) => {
  const [way, setWay] = useState(true);

  const renderSearchComponent = () => setWay(!way);

  return (
    <>
      <div className="row m-2 ms-4">
        {way ? (
          <SearchAreaLoc
            setInfo={setInfo}
            renderSearchComponent={renderSearchComponent}
          />
        ) : (
          <SearchArea
            setInfo={setInfo}
            renderSearchComponent={renderSearchComponent}
          />
        )}
      </div>
    </>
  );
};

export default SeachBar;
