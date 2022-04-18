import axios from "axios";

const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://murmuring-lowlands-54876.herokuapp.com/apps"
    : "http://localhost:8080/apps";

export const getAllApplications = () => {
  return axios.get(endpoint);
};

export const getSingleApplication = (appId: number) => {
  return axios.get(endpoint + "/" + String(appId));
};

interface ApplicationData {
  companyName: string;
  appliedOn: Date;
  website: string;
  interview: boolean;
  notes: string;
}

export const createApplication = (data: ApplicationData) => {
  return axios.post(endpoint, data);
};
