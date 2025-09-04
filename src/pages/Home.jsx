// src/pages/Home.jsx
import NewsCard from "../components/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../utils/newsApi";

export default function Home() {
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
  } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    keepPreviousData: true,
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
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
