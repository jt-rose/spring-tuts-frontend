import axios from "axios";

const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://murmuring-lowlands-54876.herokuapp.com"
    : "http://localhost:8080";

export const getAllApplications = async () => {
  return axios.get(endpoint + "/apps");
};
