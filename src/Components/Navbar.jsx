import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header>
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="W. logo" />
        </div>
        <nav className="hidden md:block">
          {/* Show on medium and larger screens */}
          <ul className="flex gap-10 text-DarkGrayishBlue">
            {navItems.map((item, index) => (
              <li key={index} className="text-base hover:text-SoftRed">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          {/* Show on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-11 z-20 focus:outline-none"
            aria-label="toggle menu"
          >
            {isOpen ? (
              /* Mobile Menu Close Icon */
              <img src={iconMenuClose} alt="close icon" className="z-20" />
            ) : (
              /* Hamburger Menu Icon */
              <img src={iconMenu} alt="hamburger menu icon" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu (Hamburger) */}
      {isOpen && (
        <div
          aria-label="close menu"
          onClick={() => setIsOpen(!isOpen)}
          className="animate-fade-in fixed left-0 top-0 z-10 h-screen w-full cursor-pointer bg-VeryDarkBlue bg-opacity-60 md:hidden"
        >
          <div className="fixed right-0 z-20 h-screen w-2/3 bg-OffWhite p-6 md:hidden">
            <ul className="mt-24 text-DarkGrayishBlue">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="mt-8 text-xl text-VeryDarkBlue transition-colors duration-300 hover:text-SoftRed"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
