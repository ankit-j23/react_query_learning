// src/pages/Home.jsx
import { useState, useEffect, use } from "react";
import NewsCard from "../components/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../utils/newsApi";

export default function Home() {
  const [page, setPage] = useState(1);

  // const [news, setNews] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchNews()
  //     .then((data) => {
  //       setNews(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  const {
    data: news,
    isLoading,
    error,
    isFetching, // useful for showing background loader
  } = useQuery({
    queryKey: ["news", page], // include page in query key
    queryFn: fetchNews,
    keepPreviousData: true, // keep old data while fetching new page
    staleTime: 1000 * 60 * 1,
    cacheTime: 1000 * 60 * 2,
  });

  //Data transformation can be done here if needed
  // const {
  //   data: topHeadlines,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["news"],
  //   queryFn: fetchNews,
  //   select: (data) => {
  //     // Example 1: only return first 5 articles
  //     return data.articles.slice(0, 5);

  //     // Example 2: return just an array of titles
  //     // return data.articles.map(article => article.title);
  //   },
  // });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news</div>;

  console.log("i am being rendered from home page");

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Latest News (Page {page})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between mt-6">
        <button
          className="btn btn-outline"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          className="btn btn-outline"
          onClick={() => setPage((old) => old + 1)}
          disabled={!news.articles.length} // disable if no more articles
        >
          Next
        </button>
      </div>

      {isFetching && <p className="text-gray-500 mt-2">Loading more...</p>}
    </div>
  );
}
