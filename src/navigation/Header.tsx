import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import { Grid, Menu, X } from "lucide-react";
import { useState } from "react";
import LogoInitCom from "../assets/logoinit.png";
import { navLinks } from "../data/data";
import useScroll from "../hooks/useScroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isScrolling } = useScroll();

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

        <motion.div
          className="hidden md:flex items-center justify-center w-16 h-16 bg-[#df2868] hover:bg-[#c0235d] text-white rounded-full shadow-lg cursor-pointer transition-all duration-500 transform hover:scale-110"
          whileTap={{ scale: 0.9 }}
          onClick={toggleDropdown}
        >
          <Grid size={40} />
        </motion.div>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute px-8 py-6 bg-white shadow-2xl top-20 right-6 rounded-3xl w-80"
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

        <div
          onClick={handleOpenState}
          className="z-50 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <X
              size={40}
              className={`${isScrolling ? "text-white" : "text-black "}`}
            />
          ) : (
            <Menu
              size={40}
              className={`${isScrolling ? "text-white" : "text-black"}`}
            />
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-20 right-0 h-screen w-[75%] bg-white shadow-xl rounded-l-3xl z-20"
            >
              <ul className="flex flex-col items-center p-8 space-y-8">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.name}
                    className="list-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={nav.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-semibold text-gray-800 transition-all duration-300 hover:text-[#df2868]"
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
