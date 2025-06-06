
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">BissakVoyage.ru</h3>
            <p className="text-gray-300 mb-4">
              Votre agence d'accompagnement pour étudier en Russie. Services complets d'admission, visa, logement et assistance pour les étudiants internationaux.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/procedure" className="text-gray-300 hover:text-white transition-colors">
                  Procédure d'admission
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/paiement" className="text-gray-300 hover:text-white transition-colors">
                  Paiement sécurisé
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Admission universitaire</li>
              <li className="text-gray-300">Obtention de visa</li>
              <li className="text-gray-300">Réservation de logement</li>
              <li className="text-gray-300">Billets d'avion</li>
              <li className="text-gray-300">Assistance locale</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">+7 925 438-72-93</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">exemple.contact@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-gray-300">Moscou, Russie</span>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} BissakVoyage.ru. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
