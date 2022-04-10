import http from "./http";

const apiEndPoint = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&format=json`;

export async function getPlaceFromCoords({ latitude, longitude }) {
  const url = apiEndPoint + `&lat=${latitude}&lon=${longitude}`;
  try {
    const res = await http.get(url);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
