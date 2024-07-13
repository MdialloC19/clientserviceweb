import React from "react";
import Card from "./Card";
const HomeVisitor = () => {
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
              href="/"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Voir tous les articles
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeVisitor;
