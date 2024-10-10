"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"; // Import Shadcn-UI Button component
// import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline'; // Import heroicons for icons
import { useTheme } from 'next-themes'; // For light/dark mode toggle
import { SunIcon, MoonIcon, HamburgerMenuIcon} from '@radix-ui/react-icons';
import { XIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className=" bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#">Teeweety</a>
        </div>

        {/* Hamburger button (for small screens) */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleTheme} className="mr-2">
            {theme === 'light' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <HamburgerMenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Links (default hidden on mobile) */}
        <nav
          className={`md:flex md:items-center md:gap-6 md:static absolute z-50 left-0 top-full w-full bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#" className="block py-2 px-4 md:py-0 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block py-2 px-4 md:py-0 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="block py-2 px-4 md:py-0 hover:text-blue-500">
            Pricing
          </a>
          <Button className="ml-4">
            Try Now
          </Button>
        </nav>

        {/* Light mode toggle (for larger screens) */}
        <div className="hidden md:flex items-center">
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === 'light' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
