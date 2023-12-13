import axios from "axios";

const instance = axios.create({
  baseURL: "https://knu.locker-manager.site/lms/api/v1", 

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});

export default instance;
