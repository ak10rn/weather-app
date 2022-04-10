import http from "./http";

const apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

export async function getWeatherFromLocation(loc) {
  const url = apiEndPoint + `&q=${loc}`;
  const res = await http.get(url);
  // console.log(res.data);
  return res.data;
}

export async function getWeatherFromCoords(lat, lon) {
  const url = apiEndPoint + `&lat=${lat}&lon=${lon}`;
  const res = await http.get(url);
  // console.log(res.data);
  return res.data;
}
