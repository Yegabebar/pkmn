# Projet Pokédex
#### Membres: Mathieu Barbé-gayet (Yegabebar) & Mohamed Yassine Guembri
Ce projet a été réalisé dans le contexte du cours 3FULLS2.

Le but de ce projet est de pouvoir réaliser des opérations CRUD sur des Pokémon.

### Fonctions implémentées:
Nous avons pu mettre en place la plupart des fonctions demandées, à l'exception des pages de suppression et de modification de Pokémon.

- Pour la mise à disposition de données entre les pages, un state Redux a été mis en place via le package redux-toolkit.
- Une sauvegarde dans le stockage local (dans navigateur) est appelée à chaque utilisation des actions du reducer pour la modification du state de l'app.
- Les calls API sont gérés par le package Axios, et déclenchés via l'utilisation d'un slicer de Pokémon dans les hook React.
- Les actions du Reducer sont en place, il ne reste que les pages à créer pour l'édition et la suppression.

### Difficultés rencontrées:
- Trop de travail personnel à fournir pour d'autres cours (webmarketing, PIM, préparation certification Azure, data analytics, ...), pour pouvoir se concentrer pleinement sur ce projet!