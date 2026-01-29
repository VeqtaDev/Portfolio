# Déploiement sur GitHub Pages

## Pourquoi la page était blanche

Le dossier **`out/`** (contenu du site après build) est dans le `.gitignore`, donc il n’est **jamais poussé** sur GitHub. GitHub Pages servait le dépôt sans les fichiers du site → page blanche.

## Solution : déploiement automatique

Un workflow **GitHub Actions** a été ajouté pour construire le site et le déployer sur GitHub Pages.

### Étapes à faire une seule fois

1. **Pousse le projet sur GitHub** (avec le workflow `.github/workflows/deploy-pages.yml`).

2. **Configure GitHub Pages** sur le dépôt :
   - Va dans **Settings** → **Pages**
   - **Source** : **Deploy from a branch**
   - **Branch** : **gh-pages** (sélectionne la branche, pas le dossier)
   - **Folder** : **/ (root)**
   - Enregistre (**Save**)

3. **Déclenche le premier déploiement** :
   - À chaque push sur **main** (ou **master**), le workflow se lance
   - Il exécute `npm ci` puis `npm run build:static`
   - Il pousse le contenu de **`out/`** sur la branche **gh-pages**
   - GitHub Pages sert ensuite ce contenu

4. **Attendre 1–2 minutes** après le push, puis ouvrir l’URL du site (indiquée en haut de **Settings** → **Pages**), par exemple :  
   `https://ton-pseudo.github.io/nom-du-repo/`

### Vérifier que ça marche

- Onglet **Actions** : le workflow « Deploy sur GitHub Pages » doit être vert après le push.
- Une fois le job terminé, la branche **gh-pages** apparaît dans le dépôt avec `index.html`, `_next/`, etc.

Tu n’as plus besoin de build ni de copier `out/` à la main : un simple push sur **main** met le site à jour sur GitHub Pages.
