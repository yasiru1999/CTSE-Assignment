/* eslint-disable no-undef */
import axios from "axios";
import { TokenExpired } from "./logout";

export const GET = async (path) => {
  path = `http://10.0.2.2:8070/${path}`;
  try {
    const response = await axios.get(path, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      TokenExpired();
    } else {
      console.log(error);
      return error.response.data;
    }
    return error.response.data;
  }
};

export const POST = async (path, data) => {
  path = `http://10.0.2.2:8070/${path}`;
  try {
    const response = await axios.post(path, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      TokenExpired();
    } else {
      console.log(error);
      return error.response.data;
    }
    return error.response.data;
  }
};

export const DELETE = async (path, data) => {
  path = `http://10.0.2.2:8070/${path}`;
  try {
    const response = await axios.delete(path, {
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      TokenExpired();
    } else {
      console.log(error);
      return error.response.data;
    }
    return error.response.data;
  }
};

export const PUT = async (path, data) => {
  path = `http://10.0.2.2:8070/${path}`;
  try {
    const response = await axios.put(path, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      TokenExpired();
    } else {
      console.log(error);
      return error.response.data;
    }
    return error.response.data;
  }
};
