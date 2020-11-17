import axios from "axios";
const API = "";

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signup = (data) => {
  return axios
    .post(`/createUser`, { ...data, status: "user" })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const signin = (data) => {
  return axios
    .post(`/login`, data)
    .then((res) => {
      authenticate(res.data)
      //redirect to /
      window.location.href = window.location.origin
      
    })
    .catch((err) => {
      if (err.request) {
        return err.request;
      } else if (err.response) {
        return err.response;
      } else {
        return err;
      }
    });
};

  