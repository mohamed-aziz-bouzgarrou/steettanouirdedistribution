import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='container mx-auto px-4 py-20 text-center'>
      <h1 className='text-3xl font-bold'>Page non trouvée</h1>
      <p className='mt-4'>Désolé, la page demandée est introuvable.</p>
      <Link
        to='/'
        className='inline-block mt-4 bg-primary-600 text-white px-4 py-2 rounded'>
        Retour à l'accueil
      </Link>
    </div>
  );
}
