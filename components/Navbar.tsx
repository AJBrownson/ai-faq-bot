"use client";

import * as React from "react";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { PlugIcon } from "lucide-react";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <header className="fixed flex w-full items-center p-2 justify-between border border-slate-600 overflow-hidden rounded-xl my-4 mx-auto">
      <Link href="/">
        <div className="hidden lg:block">AnyPlug Gadgets</div>
        <div className="flex lg:hidden items-center space-x-1"><PlugIcon /></div>
      </Link>
      <nav>
        <ul className="space-x-16 hidden lg:flex">
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <HamburgerMenuIcon />
      </div>
      <div className="hidden lg:block items-center space-x-4">
        <Button>Try for Free</Button>
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
    </header>
  );
}
