import { catchError } from "../utlis/helper";
import axios from "axios";
import { BASE_URL } from "./client";

export const getUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    if (
      response.status === 200 &&
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length>0
    ) {
      // console.log(response?.data," data");
      return response.data;
    }
    return [];
  } catch (err) {
    return catchError(err);
  }
};
