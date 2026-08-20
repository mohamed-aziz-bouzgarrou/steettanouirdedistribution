import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products() {
  const {
    products,
    loading,
    filtered,
    allCategories,
    search,
    setSearch,
    categories,
    setCategories,
    inStockOnly,
    setInStockOnly,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    sortBy,
    setSortBy,
  } = useProducts();
  const query = useQuery();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  // If category query param provided, pre-select
  useEffect(() => {
    const cat = query.get("category");
    if (cat) setCategories([cat]);
  }, []);

  // show no products state
  const content = useMemo(() => {
    if (loading) return <p>Chargement...</p>;
    if (!filtered.length) return <p>Aucun produit trouvé.</p>;
    return <ProductGrid products={filtered} />;
  }, [loading, filtered]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Tous les produits</h1>
        <div className='md:hidden'>
          <button
            className='btn-base border'
            onClick={() => setDrawerOpen(true)}>
            Filtres
          </button>
        </div>
      </div>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {/* Sidebar */}
        <div className='hidden md:block md:col-span-1'>
          <FilterSidebar
            allCategories={allCategories}
            selectedCategories={categories}
            setSelectedCategories={setCategories}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            priceMin={priceMin}
            setPriceMin={setPriceMin}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        <div className='md:col-span-3'>
          <div className='mb-4 flex flex-col sm:flex-row gap-2 items-center'>
            <div className='flex-1'>
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <div className='hidden sm:block ml-2'>
              <select
                className='border rounded px-2 py-1'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value=''>Trier</option>
                <option value='price-asc'>Prix: bas → haut</option>
                <option value='price-desc'>Prix: haut → bas</option>
                <option value='name-asc'>Nom: A → Z</option>
                <option value='rating-desc'>Meilleures notes</option>
              </select>
            </div>
          </div>

          {content}
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40'
          onClick={() => setDrawerOpen(false)}>
          <div
            className='absolute right-0 top-0 h-full w-3/4 bg-white p-4'
            onClick={(e) => e.stopPropagation()}>
            <button className='mb-4' onClick={() => setDrawerOpen(false)}>
              Fermer
            </button>
            <FilterSidebar
              allCategories={allCategories}
              selectedCategories={categories}
              setSelectedCategories={setCategories}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onClose={() => setDrawerOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
