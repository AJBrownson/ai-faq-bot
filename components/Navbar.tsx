"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
import { XIcon } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="bg-white dark:bg-gray-800 md:px-20 z-50">
      <div className="container flex justify-between items-center lg:space-x-10 p-4">
        <div className="text-xl font-bold">
          <a href="#">Teeweety</a>
        </div>

        {/* Hamburger button (for small screens) */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleTheme} className="mr-2">
            {theme === "light" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <HamburgerMenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Links hidden on mobile */}
        <nav
          className={`md:flex md:items-center md:gap-6 left-0 top-full bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block py-2 px-4 md:py-0 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="block py-2 px-4 md:py-0 hover:text-blue-500">
            Pricing
          </a>
          <Button className="font-semibold lg:hidden">Get started</Button>
        </nav>

        {/* <div className="lg:flex lg:space-x-5"> */}
        <div className="hidden lg:block">
          <Button className="font-semibold">Get started</Button>
        </div>

        {/* Light mode toggle (for larger screens) */}
        <div className="hidden md:flex">
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === "light" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};
