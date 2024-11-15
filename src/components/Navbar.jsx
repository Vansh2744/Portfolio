import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 p-4 shadow-md shadow-orange-500 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-orange-600">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-orange-600">
            About
          </a>
          <a href="/work" className="text-gray-300 hover:text-orange-600">
            My Work
          </a>
          <a href="/contact" className="text-gray-300 hover:text-orange-600">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600">
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600">
            About
          </a>
          <a
            href="/work"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600">
            My Work
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
