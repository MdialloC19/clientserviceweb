import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage, { articleLoader } from "./pages/ArticlePage";
import AddArticlePage from "./pages/AddArticlePage";
import EditArticle from "./pages/EditArticle";
import Login from "./auth/Login";
import HomeVisitors from "./pages/HomeVisitors";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  // const apiUrl = "http://localhost:5000/api/v1/articles/";
  const addArticle = async (newArticle, idCategorie) => {
    const res = await fetch(
      `http://localhost:5000/api/v1/articles/${idCategorie}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      }
    );
    return;
  };

  // Delete Job
  const deleteArticle = async (id) => {
    const res = await fetch(`http://localhost:5000/api/v1/articles/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Article
  const updateArticle = async (article) => {
    const res = await fetch(
      `http://localhost:5000/api/v1/articles/${article.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      }
    );
    console.log(res);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeVisitors />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-article"
          element={<AddArticlePage addArticle={addArticle} />}
        />
        <Route
          path="/article/:id"
          element={<ArticlePage deleteArticle={deleteArticle} />}
        />
        <Route
          path="/edit-article/:id"
          element={<EditArticle updateArticle={updateArticle} />}
          // loader={articleLoader}
        />
        <Route
          path="/delete/:id"
          element={<ArticlePage deleteArticle={deleteArticle} />}
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
