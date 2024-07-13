import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ArticlePage = ({ deleteArticle }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = useLoaderData();

  const onDeleteClick = (articleId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteArticle(articleId);

    toast.success("article deleted successfully");

    navigate("/admin");
  };
  useEffect(() => {
    onDeleteClick(id);
  }, []);

  return "";
};

const articleLoader = async (id) => {
  const { data } = await fetch(`http://localhost:5000/api/v1/articles/${id}`);
  //   const data = await res.json();
  return data;
};

export { ArticlePage as default, articleLoader };
