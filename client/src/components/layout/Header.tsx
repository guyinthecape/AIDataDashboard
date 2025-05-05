import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Pricing", href: "/pricing" },
    { text: "About", href: "/about" },
    { text: "Compliance", href: "/compliance" },
    { text: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-charcoal font-poppins font-bold text-2xl">
                Specifi<span className="text-bright-orange">AI</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition duration-150 ${
                  isActive(link.href)
                    ? "text-bright-orange"
                    : "text-charcoal hover:text-deep-orange"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/dashboard"
              className={`font-medium transition duration-150 ${
                isActive("/dashboard")
                  ? "text-charcoal"
                  : "text-bright-orange hover:text-deep-orange"
              }`}
            >
              Dashboard
            </Link>
            <Button className="bg-bright-orange hover:bg-deep-orange transition duration-150">
              Request Demo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-charcoal hover:text-bright-orange focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`font-medium px-2 py-1 rounded-md transition duration-150 ${
                  isActive(link.href)
                    ? "text-bright-orange"
                    : "text-charcoal hover:text-deep-orange"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={closeMenu}
              className={`font-medium px-2 py-1 rounded-md transition duration-150 ${
                isActive("/dashboard")
                  ? "text-charcoal"
                  : "text-bright-orange hover:bg-warm-cream"
              }`}
            >
              Dashboard
            </Link>
            <Button className="bg-bright-orange hover:bg-deep-orange transition duration-150 w-full justify-center mt-2">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
