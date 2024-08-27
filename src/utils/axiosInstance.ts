import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://elian-next-nest-blog-api.onrender.com/";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;
