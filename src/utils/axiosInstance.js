import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=09316fc70aeb4a3591e15789bb0658af`,
});

export default axiosInstance;
