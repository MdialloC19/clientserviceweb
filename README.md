# Application React Client

## Description

Ce projet est une application côté client construite avec React. Il utilise des outils et bibliothèques JavaScript modernes tels que Vite, TailwindCSS, et divers plugins spécifiques à React pour créer un environnement de développement rapide et efficace.

## Fonctionnalités

- React pour la création d'interfaces utilisateur
- Vite pour des builds et un développement rapide
- TailwindCSS pour un style CSS utilitaire
- React Router pour le routage côté client
- Axios pour les requêtes HTTP
- React Icons pour ajouter facilement des icônes
- ESLint pour maintenir la qualité du code

## Structure du Projet

```plaintext
├── App.css
├── App.jsx
├── assets
│   └── images
│       └── logo.png
├── auth
│   └── Login.jsx
├── components
│   ├── Article.jsx
│   ├── ArticleVisiteur.jsx
│   ├── Articles.jsx
│   ├── ArticlesVisiteur.jsx
│   ├── Card.jsx
│   ├── HomeCard.jsx
│   ├── HomeVisitor.jsx
│   ├── Navbar.jsx
│   └── Spinner.jsx
├── index.css
├── layouts
│   └── MainLayout.jsx
├── main.jsx
└── pages
    ├── AddArticlePage.jsx
    ├── ArticlePage.jsx
    ├── ArticlesPage.jsx
    ├── EditArticle.jsx
    ├── HomePage.jsx
    ├── HomeVisitors.jsx
    ├── NotFoundPage.jsx
    └── VisiteursPages.jsx
```

##Serveur de Développement

npm run dev

# ou

yarn dev
Ceci démarre le serveur de développement et vous permet de voir l'application dans votre navigateur.

### Structure des Dossiers

- **App.jsx**: Le composant racine de l'application.
- **assets**: Contient les ressources statiques comme les images.
- **auth**: Contient les composants relatifs à l'authentification.
- **components**: Contient les composants UI réutilisables.
- **index.css**: Fichier CSS global.
- **layouts**: Contient les composants de mise en page.
- **main.jsx**: Point d'entrée de l'application.
- **pages**: Contient les composants des pages.

### Composants Clés

- **Article.jsx**: Affiche un article avec des options pour éditer ou supprimer si l'utilisateur est connecté.
- **Navbar.jsx**: La barre de navigation de l'application.
- **HomePage.jsx**: La page d'accueil pour les utilisateurs connectés.
- **Login.jsx**: La page de connexion pour l'authentification.

## Contribution

N'hésitez pas à forker ce projet, créer une branche de fonctionnalité et soumettre une pull request. Les contributions sont toujours les bienvenues.

## Licence

Ce projet est sous licence MIT.
