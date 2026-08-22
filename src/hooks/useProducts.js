import { useEffect, useMemo, useState } from "react";
import productsData from "../data/products.json";

// Custom hook to load products and expose filtering/sorting/searching logic
export default function useProducts(initialProducts = []) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]); // array of selected categories
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // load bundled JSON directly (works in dev and production)
    try {
      if (mounted) setProducts(productsData);
    } catch (e) {
      console.error(e);
    } finally {
      if (mounted) setLoading(false);
    }

    return () => (mounted = false);
  }, []);

  // derive available categories
  const allCategories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return Array.from(set);
  }, [products]);

  // apply filters and sorting
  const filtered = useMemo(() => {
    let list = [...products];

    if (search) {
      const s = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          (p.description || "").toLowerCase().includes(s),
      );
    }

    if (categories.length) {
      list = list.filter((p) => categories.includes(p.category));
    }

    if (inStockOnly) list = list.filter((p) => p.inStock);

    if (priceMin !== "") {
      const v = parseFloat(priceMin) || 0;
      list = list.filter((p) => p.price >= v);
    }
    if (priceMax !== "") {
      const v = parseFloat(priceMax) || 0;
      list = list.filter((p) => p.price <= v);
    }

    if (sortBy) {
      if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
      if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
      if (sortBy === "name-asc")
        list.sort((a, b) => a.name.localeCompare(b.name));
      if (sortBy === "rating-desc")
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return list;
  }, [products, search, categories, inStockOnly, priceMin, priceMax, sortBy]);

  return {
    products,
    loading,
    filtered,
    allCategories,
    // filters
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
  };
}
