/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permet de générer un site 100% statique (pour GitHub Pages)
  output: "export",
  // Désactive l'optimisation d'images côté serveur (obligatoire pour export statique)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
