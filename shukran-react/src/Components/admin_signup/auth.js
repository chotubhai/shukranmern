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

export const signin = (data) => {
  return axios
    .post(`http://54.84.213.218:5000/adminlogin`, data)
    .then((res) => {
      authenticate(res.data)
      //redirect to /
      window.location.href = "/admin"
      
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

  