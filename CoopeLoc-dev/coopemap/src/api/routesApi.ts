import axios from "axios";
const routesAPI = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1Ijoiam9zdWViZW4iLCJhIjoiY2xncjlrcTM4MTlsZzNrcDlyNHdxcDk2dSJ9.fXRYEzvyv1Qfgk3keTnObQ",
  },
});

export default routesAPI;
