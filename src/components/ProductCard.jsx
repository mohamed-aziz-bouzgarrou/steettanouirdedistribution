import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function RatingStars({ rating = 0 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className='text-yellow-400' />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className='text-yellow-400' />);
    else stars.push(<FaRegStar key={i} className='text-yellow-400' />);
  }
  return <div className='flex gap-1'>{stars}</div>;
}

export default function ProductCard({ product }) {
  const image = Array.isArray(product.images)
    ? product.images[0]
    : product.image || "";

  return (
    <article className='border rounded-md overflow-hidden bg-white shadow-sm'>
      <Link to={`/products/${product.id}`} className='block'>
        <img
          src={image}
          alt={product.name}
          className='w-full h-48 object-contain'
        />
      </Link>
      <div className='p-3'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-sm'>{product.name}</h3>
          <span className='text-xs bg-gray-100 px-2 py-1 rounded'>
            {product.category}
          </span>
        </div>
        <p className='mt-2 text-primary-600 font-bold'>
          €{product.price.toFixed(2)}
        </p>
        <div className='mt-2 flex items-center justify-between'>
          {/* <RatingStars rating={product.rating} /> */}
          <div
            className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "En stock" : "Rupture"}
          </div>
        </div>
        <div className='mt-3'>
          <Link
            to={`/products/${product.id}`}
            className='btn-base bg-primary-600 text-white block text-center'>
            Détails
          </Link>
        </div>
      </div>
    </article>
  );
}
