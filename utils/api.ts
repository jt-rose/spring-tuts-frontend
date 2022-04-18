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

export interface ApplicationInput {
  companyName: string;
  appliedOn: Date;
  website: string;
  interview: boolean;
  notes: string;
}

export interface ApplicationData extends ApplicationInput {
  id: number;
}

export const createApplication = (data: ApplicationInput) => {
  return axios.post(endpoint, data);
};

export const deleteApplication = (appId: number) => {
  return axios.delete(endpoint + "/" + String(appId));
};
