import axios from "axios";
// get from secure storage
import * as SecureStore from "expo-secure-store";

// base url api gateway untuk microservice
const baseURL = "https://siasn.bkd.jatimprov.go.id/pemprov-api";

// create some fetcher
const fetcher = axios.create({
  baseURL,
});

// attach token to authorization header
fetcher.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default fetcher;