import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="text-gray-300 hover:text-orange-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-orange-600">
            About
          </Link>
          <Link to="/work" className="text-gray-300 hover:text-orange-600">
            My Work
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-orange-600">
            Contact
          </Link>
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
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link
            to="/work"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}>
            My Work
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
