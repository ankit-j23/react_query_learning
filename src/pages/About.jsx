// src/pages/About.jsx
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../utils/newsApi";

export default function About() {
//   const [news, setNews] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     fetchNews()
//       .then((data) => {
//         setNews(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);
    const {
      data: news,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["news"],
      queryFn: fetchNews,
      retry: false,
      staleTime: 1000 * 60 * 1,
      cacheTime: 1000 * 60 * 2,
      refetchOnWindowFocus: false,
    });

  if (isLoading) return <div>Loading news in About page...</div>;
  if (error) return <div>Error fetching news in About page</div>;


  console.log("i am being rendered from about page");
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <p>
        This is a simple About page to test caching. Check the console to see if
        React Query fetched the API again or used cached data.
      </p>
      <p>Total articles fetched: {news?.articles?.length}</p>
    </div>
  );
}
