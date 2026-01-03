# cinemania-react
Le projet cinemania du module 1 (autre fois réalisé avec du html, css, php et mysql) en version react cette fois-ci pour faciliter l'apprentissage de mes apprenants.

1. React-router
2. React-icons
bash: yarn add react-icons

# Deploiement sur GitHub Pages :

Ce projet est déployé sur GitHub Pages grâce à la branche `gh-pages`.

⚙️ Prérequis

1. Avoir installé le package `gh-pages` :

   ```bash
   yarn add gh-pages --dev
   ```

2. Ajouter dans `package.json` :

   - Le champ `homepage` :

     ```json
     "homepage": "https://<ton-username>.github.io/<nom-du-depot>"
     ```

     *Exemple :*

     ```json
     "homepage": "https://josuengoma.github.io/cinemania-react"
     ```

   - Le script de déploiement :

     ```json
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
     ```


3. Construire et déploier le projet :

   ```bash
   yarn deploy
   ```

   Ce script :
   - Génère le dossier `build/` (avec `yarn build`)
   - Publie le contenu de `build/` dans la branche `gh-pages`


4. Mettre à jour après des modifications

```bash
git add .
git commit -m "ma mise à jour"
git push origin main
yarn deploy
```
