import axios from "axios";

const baseUrl = "https://siasn.bkd.jatimprov.go.id/pemprov-api";

export const berita = () => {
  return axios.get(`${baseUrl}/web/berita`).then((res) => res.data);
};
