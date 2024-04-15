import axios, { AxiosInstance } from "axios";
const backendAPIPrefix = "https://staging.mazaady.com/api/v1";
const private_key = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";
export const axiosClient: AxiosInstance = axios.create({
  baseURL: backendAPIPrefix,
  headers: {
    "private-key": private_key,
  },
});
