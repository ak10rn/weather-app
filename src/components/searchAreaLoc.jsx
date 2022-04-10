import { useState } from "react";
import axios from "axios";

import { IconButton, Divider, InputBase, Paper, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import { getWeatherFromLocation } from "../services/weatherService";
import { getPlaceFromCoords } from "../services/currentLocationService";

const SearchAreaLoc = (props) => {
  const [loc, setLoc] = useState("");
  //const [suggested, setSuggested] = useState([]);
  const { setInfo, renderSearchComponent } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = await getWeatherFromLocation(loc);
    setInfo(info);
  };

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const info = await getPlaceFromCoords(coords);
      setLoc(info.address.city);
    });
  };

  const handleKeyPress = async (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      await handleSubmit(e);
    }
  };
  const onChange = async (e) => {
    // console.log(e.target.value);
    await setLoc(e.target.value);
    // console.log(loc, "---this");
    const res = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&apiKey=3ffda9b42afa4e42ba6f911bae1d8e06`
    );
    // console.log(res.data);
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
        placeholder="City Name"
        value={loc}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        autoFocus
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

export default SearchAreaLoc;
