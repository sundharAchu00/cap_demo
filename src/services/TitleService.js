import axios from "axios";
import { BaiscExampleEndpoints } from "../utils/Endpoints";

//this is an example service file

export const getTitle = () => {
  try {
    return axios.get(BaiscExampleEndpoints.TITLE_BASE_URL);
  } catch (error) {
    return error;
  }
};
