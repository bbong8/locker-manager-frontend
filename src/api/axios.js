import axios from "axios";

const instance = axios.create({
  baseURL: "https://he.princip.es/lms/api/v1", 

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});

export default instance;
