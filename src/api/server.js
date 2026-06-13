import { catchError } from "../utlis/helper";
import axios from "axios";
import { BASE_URL } from "./client";

//GET
export const getUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    if (
      response.status === 200 &&
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length > 0
    ) {
      // console.log(response?.data," data");
      return response.data;
    }
    return [];
  } catch (err) {
    return catchError(err);
  }
};

// POST
export const postUser = async ({ payload }) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, payload);
    if (
      response.status === 200 &&
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length > 0
    ) {
      // console.log(response?.data," data");
      return response.data;
    }
    return [];
  } catch (err) {
    return catchError(err);
  }
};

// put api
export const putUser = async ({ payload }) => {
  try {
    const response = await axios.put(`${BASE_URL}/users`, payload);
    if (
      response.status === 200 &&
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length > 0
    ) {
      // console.log(response?.data," data");
      return response.data;
    }
    return [];
  } catch (err) {
    return catchError(err);
  }
};


// delete api

export const deleteUser = async ({ id }) => {
  try {
    const response = await axios.put(`${BASE_URL}/users`, id);
    if (
      response.status === 200 &&
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length > 0
    ) {
      // console.log(response?.data," data");
      return response.data;
    }
    return [];
  } catch (err) {
    return catchError(err);
  }
};
