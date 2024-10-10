"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { XIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-gray-800 md:px-20 z-50 fixed w-full font-geistMono">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <a href="#">Teeweety</a>
        </div>

        {/* Light mode toggle (for all screens) */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Hamburger button displayed on small screens only */}
          <button onClick={toggleMenu} className="focus:outline-none md:hidden">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <HamburgerMenuIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Navigation links hidden on mobile */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent md:static md:flex md:items-center md:space-x-6 md:w-auto transition-all duration-300`}
        >
          <a
            href="#"
            className="block py-2 px-4 md:py-0 hover:text-blue-500 text-gray-800 dark:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 px-4 md:py-0 hover:text-blue-500 text-gray-800 dark:text-white"
          >
            Pricing
          </a>
          <div className="block md:hidden mt-4 mb-4 md:mt-0">
            <Button className="font-semibold">Get Started</Button>
          </div>
        </nav>

        {/* Light and dark mode toggle for lg screens */}
        <div className="hidden md:flex">
          <div className="hidden md:flex md:items-center lg:mr-10">
            <Button className="font-semibold">Get Started</Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
