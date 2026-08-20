import React from "react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Rechercher des produits...",
}) {
  return (
    <div className='w-full'>
      <input
        aria-label='Recherche'
        className='w-full border rounded-md px-3 py-2'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
