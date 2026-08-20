import React, { useState, useEffect } from "react";

export default function FilterSidebar({
  allCategories,
  selectedCategories,
  setSelectedCategories,
  inStockOnly,
  setInStockOnly,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sortBy,
  setSortBy,
  onClose,
}) {
  const [localCats, setLocalCats] = useState(selectedCategories || []);

  useEffect(() => setLocalCats(selectedCategories || []), [selectedCategories]);

  function toggleCategory(cat) {
    setLocalCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  }

  function apply() {
    setSelectedCategories(localCats);
    if (onClose) onClose();
  }

  return (
    <aside className='p-4 bg-white border rounded-md'>
      <h4 className='font-semibold'>Filtres</h4>

      <div className='mt-3'>
        <label className='font-medium'>Catégories</label>
        <div className='mt-2 flex flex-col gap-2'>
          {allCategories.map((c) => (
            <label key={c} className='flex items-center gap-2 text-sm'>
              <input
                type='checkbox'
                checked={localCats.includes(c)}
                onChange={() => toggleCategory(c)}
              />{" "}
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <label className='font-medium'>Prix</label>
        <div className='flex gap-2 mt-2'>
          <input
            className='w-1/2 border rounded px-2 py-1'
            placeholder='Min'
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
          <input
            className='w-1/2 border rounded px-2 py-1'
            placeholder='Max'
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
      </div>

      <div className='mt-4 flex items-center gap-2'>
        <input
          id='inStock'
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        <label htmlFor='inStock' className='text-sm'>
          Afficher seulement en stock
        </label>
      </div>

      <div className='mt-4'>
        <label className='font-medium'>Trier</label>
        <select
          className='w-full border rounded mt-2 px-2 py-1'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value=''>Par défaut</option>
          <option value='price-asc'>Prix: bas → haut</option>
          <option value='price-desc'>Prix: haut → bas</option>
          <option value='name-asc'>Nom: A → Z</option>
          <option value='rating-desc'>Meilleures notes</option>
        </select>
      </div>

      <div className='mt-4 flex gap-2'>
        <button className='btn-base bg-primary-600 text-white' onClick={apply}>
          Appliquer
        </button>
        <button
          className='btn-base border'
          onClick={() => {
            setLocalCats([]);
            setPriceMin("");
            setPriceMax("");
            setInStockOnly(false);
            setSortBy("");
          }}>
          Réinitialiser
        </button>
      </div>
    </aside>
  );
}
