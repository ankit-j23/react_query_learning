// src/components/NewsCard.jsx
import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img src={article.urlToImage || "/assets/dummy_new_card.jpg"} alt={article.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="text-sm text-gray-500">{article.publishedAt}</p>
        <p>{article.description || article.title}</p>
        <div className="card-actions justify-end">
          <Link to={article.url} className="btn btn-primary btn-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
