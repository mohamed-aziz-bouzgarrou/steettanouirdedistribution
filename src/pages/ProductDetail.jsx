import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const p = products.find((x) => String(x.id) === String(id));
    setProduct(p);
    setSelectedImage(0);
  }, [id]);

  if (!product)
    return (
      <div className='container mx-auto px-4 py-8'>Produit introuvable.</div>
    );

  const images = Array.isArray(product.images)
    ? product.images
    : product.image
      ? [product.image]
      : [];

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link to='/products' className='text-primary-600'>
        ← Retour aux produits
      </Link>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          {images.length > 0 && (
            <img
              src={images[selectedImage]}
              alt={product.name}
              className='w-full h-96 object-contain rounded'
            />
          )}
          {images.length > 1 && (
            <div className='mt-3 flex gap-2 overflow-x-auto'>
              {images.map((image, index) => (
                <button
                  key={`${product.id}-${index}`}
                  type='button'
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded overflow-hidden w-20 h-20 flex-shrink-0 ${
                    selectedImage === index
                      ? "border-primary-600"
                      : "border-gray-200"
                  }`}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <p className='text-sm text-gray-600 mt-1'>{product.category}</p>
          <p className='text-primary-600 text-xl font-semibold mt-4'>
            €{product.price.toFixed(2)}
          </p>
          <p className='mt-4' style={{ whiteSpace: "pre-line" }}>
            {product.description}
          </p>
          <p
            className={`mt-4 font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "En stock" : "Rupture de stock"}
          </p>
        </div>
      </div>
    </div>
  );
}
