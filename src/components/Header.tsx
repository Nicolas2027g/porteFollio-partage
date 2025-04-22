"use client";

import Link from 'next/link';
import { useState } from "react";
import { HomeIcon, BriefcaseIcon, MailIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

// Menu Desktop
function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Home Link */}
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Accueil</span>
        </Link>
      </Button>

      {/* Projects Link */}
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/portfolio">
          <BriefcaseIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Projets</span>
        </Link>
      </Button>

      {/* Contact Link */}
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/contact">
          <MailIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Contact</span>
        </Link>
      </Button>
    </div>
  );
}

// Menu Mobile
function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex md:hidden items-center space-x-2">
      {/* Menu Button */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            {/* Home Link */}
            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
              <Link href="/" onClick={() => setShowMobileMenu(false)}>
                <HomeIcon className="w-4 h-4" />
                Accueil
              </Link>
            </Button>

            {/* Portfolio Link */}
            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
              <Link href="/portfolio" onClick={() => setShowMobileMenu(false)}>
                <BriefcaseIcon className="w-4 h-4" />
                Projets
              </Link>
            </Button>

            {/* Contact Link */}
            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
              <Link href="/contact" onClick={() => setShowMobileMenu(false)}>
                <MailIcon className="w-4 h-4" />
                Contact
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Header (Combinaison des deux menus)
export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image 
                src="/images/Logo-noBG.png" 
                alt="Logo_Nico_Dev" 
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-xl font-bold text-primary font-mono tracking-wider">
              GUILLARD Nicolas
            </span>
          </Link>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}