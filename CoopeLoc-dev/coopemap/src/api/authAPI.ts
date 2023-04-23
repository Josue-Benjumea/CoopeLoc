import axios from "axios";

const ENDPOINT_PATH = "http://localhost:5400/users/login";

export default {
  register(email:string, password:string) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "regiser", user);
  },
  login(email:string, password:string) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
};