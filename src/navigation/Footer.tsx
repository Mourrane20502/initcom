import { Facebook, Instagram, Linkedin } from "lucide-react";
import footerbg from "../assets/footerbg.jpg";

export default function Footer() {
  return (
    <footer
      className="w-full py-10 text-gray-300 bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${footerbg})`,
      }}
    >
      <div className="py-16">
        <div className="px-6 mx-auto max-w-7xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
            {/* About */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                À Propos
              </h3>
              <p className="text-sm leading-relaxed">
                <span className="font-bold text-rose-400">INITCOM</span> est une
                agence de communication basée au Maroc, spécialisée dans des
                solutions innovantes pour ses clients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Liens Rapides
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#qui-sommes-nous" className="hover:text-rose-400">
                    Qui Sommes Nous
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-rose-400">
                    Nos Services
                  </a>
                </li>
                <li>
                  <a href="#partenaires" className="hover:text-rose-400">
                    Nos Partenaires
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-rose-400">
                    Contactez-Nous
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">📍</span>
                  32 rue El Banafsaj , Rés Azzaitouna 1er Étage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">📞</span>
                  +212 695592907
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-400">✉️</span>
                  contact@initcom.com
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Suivez-Nous
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300"
                >
                  <Instagram />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-700"></div>

          {/* Bottom Section */}
          <div className="flex items-center justify-center text-sm f sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} INITCOM. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
