import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products.json";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      <Hero />

      <section className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold'>Catégories en vedette</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4'>
          {categories.map((c) => (
            <Link
              key={c}
              to={`/products?category=${encodeURIComponent(c)}`}
              className='p-4 bg-white border rounded text-center'>
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold'>Produits recommandés</h2>
        <div className='mt-4'>
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold'>Nos services</h2>
        <p className='mt-2 text-sm text-gray-700'>
          Des solutions adaptées aux établissements scolaires, bureaux et points
          de vente qui recherchent un approvisionnement fiable et en quantité.
        </p>
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2  gap-4'>
          <div className='p-4 bg-white border rounded'>
            <h4 className='font-semibold'>Livraisons en gros</h4>
            <p className='text-sm mt-1'>
              Approvisionnement régulier pour les écoles, collèges et
              entreprises.
            </p>
          </div>

          <div className='p-4 bg-white border rounded'>
            <h4 className='font-semibold'>Commandes sur mesure</h4>
            <p className='text-sm mt-1'>
              Gestion de besoins spécifiques et quantités importantes selon
              votre activité.
            </p>
          </div>
          <div className='p-4 bg-white border rounded'>
            <h4 className='font-semibold'>Fournitures scolaires</h4>
            <p className='text-sm mt-1'>
              Cahiers, trousses, sacs à dos, stylos et accessoires pour
              l’éducation.
            </p>
          </div>
          <div className='p-4 bg-white border rounded'>
            <h4 className='font-semibold'>Matériel bureautique</h4>
            <p className='text-sm mt-1'>
              Produits de bureau et outils d’organisation pour les équipes et
              les établissements.
            </p>
          </div>
        </div>
      </section>

      <section className='container mx-auto px-4 py-8'>
        <h2 className='text-2xl font-bold'>Notre emplacement</h2>
        <div className='mt-4 overflow-hidden rounded-lg border shadow-sm'>
          <iframe
            title='Google Maps Ettanouir'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.22287196651396!2d10.644579367459105!3d35.8105877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302751fbf239b9d%3A0xfff16be122c7b977!2z2LTYsdmD2Kkg2KfZhNiq2YbZiNmK2LEg2YTZhNiq2YjYstmK2Lk!5e0!3m2!1sen!2stn!4v1787263495896!5m2!1sen!2stn'
            className='w-full h-[480px] border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </section>
    </div>
  );
}
