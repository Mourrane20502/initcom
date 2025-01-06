import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoInitCom from "../assets/logoinit.png";
import { navLinks } from "../data/data";
import useScroll from "../hooks/useScroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolling } = useScroll();

  const handleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className=
         "bg-white shadow-md text-gray-700  fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out"
    >
      <nav className="flex items-center justify-around max-md:justify-between px-4 py-3 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoInitCom} alt="Logo InitCom" width={120} />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((nav) => (
            <li key={nav.name} className="list-none">
              <a
                href={nav.href}
                className="text-lg text-gray-700 hover:text-rose-500 font-semibold transition-all duration-500 "
                  
                
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleOpenState} className="md:hidden cursor-pointer z-20">
          {isOpen ? (
            <X size={35} className={`${isScrolling ? "text-white" : "text-black "}`} />
          ) : (
            <Menu size={35} className={`${isScrolling ? "text-white" : "text-black"}`} />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-20 right-0 h-screen w-[60%] bg-white shadow-md transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-10`}
        >
          <ul className="flex flex-col items-center   space-y-6 p-6">
            {navLinks.map((nav) => (
              <li key={nav.name} className="list-none">
                <a
                  href={nav.href}
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-700 text-lg hover:text-rose-500 font-semibold transition-all duration-300"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
