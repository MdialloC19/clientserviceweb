import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Article = ({ article, isLogin = true }) => {
  const [showFullContenu, setShowFullContenu] = useState(false);
  console.log(article);
  let description = article.contenu;
  if (!showFullContenu) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div key={article._id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{article.categorie.libelle}</div>
          <h3 className="text-xl font-bold">{article.titre}</h3>
        </div>
        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullContenu(!showFullContenu)}
          className="text-indigo-500 mb-5 hover:text-indigo-600 p-2 rounded-md bg-slate-400 text-center "
        >
          {showFullContenu ? "Voir moins" : "Voir Plus"}
        </button>
        <div className="border border-gray-100 mb-5"></div>
        {isLogin && (
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <Link
              to={`/edit-article/${article._id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Éditer
            </Link>
            <Link
              to={`/delete/${article._id}`}
              className="h-[36px] bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Supprimer
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
