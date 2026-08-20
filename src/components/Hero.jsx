import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/banner.jpg"; // Assurez-vous d'avoir une image dans le dossier assets

export default function Hero() {
  return (
    <section className='bg-primary-50'>
      <div className='container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8'>
        <div className='flex-1'>
          <h1 className='text-3xl md:text-4xl font-bold text-primary-800'>
            Bienvenue chez Ettanouir
          </h1>
          <p className='mt-4 text-gray-700'>
            Votre partenaire pour la distribution en gros de fournitures
            scolaires et bureautiques, avec des solutions adaptées aux
            librairies, établissements, écoles et entreprises.
          </p>
          <Link
            to='/products'
            className='inline-block mt-6 bg-primary-600 text-white px-5 py-3 rounded-md'>
            Découvrir nos produits
          </Link>
        </div>
        <div className='flex-1'>
          <img
            src={heroImage}
            alt='Bannière de distribution de fournitures scolaires et bureautiques'
            className='rounded-md shadow w-full'
          />
        </div>
      </div>
    </section>
  );
}
