import axiosInstance from "./axiosInstance";

export const fetchNews = async ({ queryKey }) => {
  const [_key, page] = queryKey; // react-query passes queryKey as array
  const response = await axiosInstance.get("", {
    params: {
      page,
      pageSize: 6, // show 6 articles per page
    },
  });
  console.log(`I fetched page ${page}`);
  return response.data;
};
