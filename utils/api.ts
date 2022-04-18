import axios from "axios";

const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://murmuring-lowlands-54876.herokuapp.com"
    : "http://localhost:8080";

export const getAllApplications = () => {
  return axios.get(endpoint + "/apps");
};

export const getSingleApplication = (appId: number) => {
  return axios.get(endpoint + "/apps/" + String(appId));
};
