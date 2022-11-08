import axios from "axios";
import fetcher from "../utils/fetcher";

const baseUrl = "https://siasn.bkd.jatimprov.go.id/pemprov-api";

export const berita = () => {
  return axios.get(`${baseUrl}/web/berita`).then((res) => res.data);
};

export const banner = () => {
  return axios.get(`${baseUrl}/web/banner`).then((res) => res.data);
};

export const cv = () => {
  return fetcher.get("/master/cv").then((res) => res?.data);
};
