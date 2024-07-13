import React from "react";
import Card from "./Card";
const HomeCard = () => {
  return (
    <section className="py-2">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Visiteurs</h2>
            <p className="mt-2 mb-2">
              Voir l'ensemble des articles publiés sur le site Actualités
              Polytech
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Voir tous les articles
            </a>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">Administration</h2>
            <p className="mt-2 mb-2">
              Ajouter, modifier ou supprimer des articles sur le site Actualités
              Polytech
            </p>
            <a
              href="/add-article"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Ajouter des articles
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
