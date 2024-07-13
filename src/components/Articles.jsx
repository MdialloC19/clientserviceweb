import React from "react";
import { useEffect, useState } from "react";
import Article from "./Article";
import Spinner from "./Spinner";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    const apiUrl = "http://localhost:5000/api/v1/articles"; // Adjust the URL as necessary
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (!Array.isArray(articles)) {
    return <p>Error loading articles.</p>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Articles" : "Browse Articles"}
        </h2> */}

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
