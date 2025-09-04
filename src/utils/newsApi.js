import axiosInstance from "./axiosInstance";

export const fetchNews = async () => {
  const response = await axiosInstance.get();
  return response.data;
};
