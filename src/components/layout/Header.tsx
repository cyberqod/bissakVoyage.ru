
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-primary">BissakVoyage.ru</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-700'}`}
          >
            Accueil
          </Link>
          <Link 
            to="/procedure" 
            className={`font-medium hover:text-primary transition-colors ${isActive('/procedure') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-700'}`}
          >
            Procédure
          </Link>
          <Link 
            to="/services" 
            className={`font-medium hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-700'}`}
          >
            Services
          </Link>
          <Link 
            to="/paiement" 
            className={`font-medium hover:text-primary transition-colors ${isActive('/paiement') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-700'}`}
          >
            Paiement
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-gray-700'}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-primary">
            <Link to="/contact">Démarrer ma procédure</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className={`font-medium py-2 border-b hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link
              to="/procedure"
              className={`font-medium py-2 border-b hover:text-primary transition-colors ${isActive('/procedure') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Procédure
            </Link>
            <Link
              to="/services"
              className={`font-medium py-2 border-b hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/paiement"
              className={`font-medium py-2 border-b hover:text-primary transition-colors ${isActive('/paiement') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Paiement
            </Link>
            <Link
              to="/contact"
              className={`font-medium py-2 border-b hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Button className="btn-primary w-full" onClick={closeMenu}>
              <Link to="/contact">Démarrer ma procédure</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
