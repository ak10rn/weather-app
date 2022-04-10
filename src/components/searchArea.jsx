import { useState } from "react";

import { IconButton, Divider, InputBase, Paper, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SwapHorizIcon from "@mui/icons-material/SwapHorizontalCircle";

import { getWeatherFromCoords } from "../services/weatherService";

const SearchArea = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const { setInfo, renderSearchComponent } = props;

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLon(longitude);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = await getWeatherFromCoords(lat, lon);
    setInfo(info);
  };

  const handleKeyPress = async (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      await handleSubmit(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Tooltip title="Switch Search Mode" placement="top">
          <SwapHorizIcon onClick={renderSearchComponent} />
        </Tooltip>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Lat"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Long"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon onClick={handleSubmit} />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <Tooltip title="Current Location" placement="top">
          <LocationOnIcon onClick={setCurrentLoc} />
        </Tooltip>
      </IconButton>
    </Paper>
  );
};

export default SearchArea;
