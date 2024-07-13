import { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditArticle = ({ updateArticle }) => {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("Politique");
  const [contenu, setContenu] = useState("");
  const [categories, setCategories] = useState([]);
  const [article, setArticle] = useState({});

  const navigate = useNavigate();
  //   const article = useLoaderData();

  const { id } = useParams();

  const fetchCategories = async () => {
    const apiUrl = "http://localhost:5000/api/v1/categories/"; // Adjust the URL as necessary

    // setLoading(true);
    try {
      const res = await fetch(apiUrl);
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const { data } = await res.json();
      // console.log(data);
      setCategories(data);
    } catch (error) {
      console.log("Error fetching Categories:", error);
    } finally {
      // setLoading(false);
    }
  };

  //   const articleLoader = async (idArticle) => {
  //     const res = await fetch(
  //       `http://localhost:5000/api/v1/articles/${idArticle}`
  //     );
  //     //   const data = await res.json();
  //     console.log(res);
  //     // setArticle(data);
  //   };

  useEffect(() => {
    fetchCategories();
    // articleLoader(id);
  }, []);
  //   console.log(article);

  const submitForm = (e) => {
    e.preventDefault();

    const newArticle = {
      id,
      titre,
      categorie,
      contenu,
    };
    console.log(newArticle);

    updateArticle(newArticle);

    toast.success("Article Added Successfully");

    return navigate("/admin");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Update Article
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Categorie Article
              </label>
              <select
                id="categorie"
                name="categorie"
                className="border rounded w-full py-2 px-3"
                required
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
              >
                {categories.map((categorie, index) => (
                  <option value={categorie._id} key={index}>
                    {categorie.libelle}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Titre
              </label>
              <input
                type="text"
                id="titre"
                name="titre"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Titre"
                required
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contenu"
                className="block text-gray-700 font-bold mb-2"
              >
                Contenu
              </label>
              <textarea
                id="contenu"
                name="contenu"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Modifier"
                value={contenu}
                onChange={(e) => setContenu(e.target.value)}
              ></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Mettre à jour Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditArticle;
