import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo2.png"; // Assuming you have a logo image in assets

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <Link to='/' className='text-primary-600 font-bold text-lg'>
          {/* Ettanouir */}
          <img src={logo} alt='Logo' className='h-24 w-auto' />
        </Link>

        <nav className='hidden md:flex gap-4 items-center'>
          <Link to='/' className='text-gray-700 hover:text-primary-600'>
            Accueil
          </Link>
          <Link to='/products' className='text-gray-700 hover:text-primary-600'>
            Produits
          </Link>
          <Link
            to='/products?category=Sacs%20à%20dos'
            className='text-gray-700 hover:text-primary-600'>
            Sacs à dos
          </Link>
          <Link
            to='/products?category=Trousses'
            className='text-gray-700 hover:text-primary-600'>
            Trousses
          </Link>
        </nav>

        <div className='flex items-center gap-3'>
          <button
            className='md:hidden'
            onClick={() => setOpen((v) => !v)}
            aria-label='Ouvrir le menu'>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden bg-white border-t'>
          <div className='px-4 py-3 flex flex-col gap-2'>
            <Link to='/' onClick={() => setOpen(false)}>
              Accueil
            </Link>
            <Link to='/products' onClick={() => setOpen(false)}>
              Produits
            </Link>
            <Link
              to='/products?category=Sacs%20à%20dos'
              onClick={() => setOpen(false)}>
              Sacs à dos
            </Link>
            <Link
              to='/products?category=Trousses'
              onClick={() => setOpen(false)}>
              Trousses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
