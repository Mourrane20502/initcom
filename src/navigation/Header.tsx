import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LogoInitCom from "../assets/logoinit.png";
import { navLinks } from "../data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-in-out bg-white shadow-md">
      <nav className="relative flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoInitCom} alt="Logo InitCom" width={140} />
        </div>

        {/* Hamburger Icon */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-2 cursor-pointer md:hidden"
          onClick={handleOpenState}
        >
          <div
            className={`h-1 w-6 bg-black transition-all duration-300 transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`h-1 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`h-1 w-6 bg-black transition-all duration-300 transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef} // Use ref to detect clicks outside this element
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 w-full h-screen bg-[#df2868] shadow-xl z-20"
            >
              <div className="flex flex-col items-center justify-center h-full p-10 space-y-8">
                <motion.div
                  className="absolute cursor-pointer top-6 right-6"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={40} className="text-white" />
                </motion.div>

                {/* Animated Nav Links */}
                {navLinks.map((nav, index) => (
                  <motion.div
                    key={nav.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <a
                      href={nav.href}
                      onClick={() => setIsOpen(false)} // Close the menu on click
                      className="text-4xl font-bold text-white hover:text-[#f7f7f7] transition-all duration-300"
                    >
                      {nav.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown Button for Desktop */}
        <motion.div
          className="hidden md:flex items-center justify-center w-16 h-16 bg-[#df2868] hover:bg-[#c0235d] text-white rounded-full shadow-lg cursor-pointer transition-all duration-500 transform hover:scale-110"
          whileTap={{ scale: 0.9 }}
          onClick={toggleDropdown}
        >
          <Menu size={40} />
        </motion.div>

        {/* Dropdown Menu for Desktop */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute px-8 py-6 bg-white shadow-2xl top-28 right-6 rounded-3xl w-80"
            >
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.name}
                    className="list-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={nav.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="text-xl text-gray-800 font-semibold transition-all duration-300 hover:text-[#df2868]"
                    >
                      {nav.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
