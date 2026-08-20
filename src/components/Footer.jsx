import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-700 mt-12'>
      <div className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
          <h4 className='font-bold'>
            Société de distribution de fournitures scolaires et bureautiques en
            gros
          </h4>
          <p className='text-sm'>Email: ettanouir@gmail.com</p>
          <p className='text-sm'>Tél: +216 73 382 868</p>
          <p className='text-sm mt-2'>
            Horaires: Lun–Ven 8:00–17:00 / Sam 8:00-14:00
          </p>
        </div>
        <div>
          <h5 className='font-semibold'>Liens</h5>
          <ul className='text-sm'>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/products'>Produits</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold'>Adresse</h5>
          <p className='text-sm'>
            Avenue Ibn Khaldoun, Sousse <br />
            Face aux AMS
          </p>
        </div>
      </div>
      <div className='bg-gray-200 text-center py-3 text-sm'>
        © 2026 Ettanouir — Tous droits réservés
      </div>
    </footer>
  );
}
