# Corriger l’erreur 404 sur GitHub Pages

L’erreur **404 File not found** (« For root URLs you must provide an index.html file ») apparaît parce que GitHub Pages sert une branche ou un dossier qui **ne contient pas** `index.html` à la racine.

Dans ton cas, le **code source** est sur la branche **main** (app/, components/, etc.) et il n’y a **pas** d’`index.html` à la racine. Le site buildé (`index.html`, `_next/`, etc.) est déployé par le workflow sur la branche **gh-pages**.

## À faire

### 1. Vérifier que le workflow a bien tourné

1. Sur GitHub, ouvre ton dépôt **Portfolio**.
2. Va dans l’onglet **Actions**.
3. Regarde si le workflow **« Deploy sur GitHub Pages »** a été exécuté après un push sur **main** (ou **master**).
4. S’il est **vert** : la branche **gh-pages** existe et contient le site. Passe à l’étape 2.
5. S’il est **rouge** ou n’existe pas : fais un **push** sur **main** pour lancer le workflow. En cas d’échec, ouvre le job et lis l’erreur (souvent `npm ci` ou `npm run build:static`).

### 2. Configurer GitHub Pages sur la branche gh-pages

1. Dans le dépôt, va dans **Settings** → **Pages**.
2. **Build and deployment** :
   - **Source** : **Deploy from a branch** (pas « GitHub Actions »).
   - **Branch** : choisis **gh-pages** (et non main).
   - **Folder** : **/ (root)**.
3. Clique sur **Save**.
4. Attends 1–2 minutes, puis ouvre l’URL du site (ex. `https://ton-pseudo.github.io/Portfolio/`).

### Résumé

| Ce que tu as | Où est index.html |
|--------------|-------------------|
| Branche **main** | Code source uniquement → **pas** d’index.html → 404 si Pages = main |
| Branche **gh-pages** | Site buildé (généré par le workflow) → **avec** index.html → OK |

Il faut donc que **Pages** soit réglé sur la branche **gh-pages**, pas sur **main**.
