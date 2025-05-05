import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-bright-orange flex items-center justify-center mr-2 transform transition-transform duration-300 hover:scale-110">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <div className="font-poppins font-bold text-2xl">
                Specifi<span className="text-bright-orange">AI</span>
              </div>
            </div>
            <p className="text-white text-opacity-90 mb-4">
              Powering ethical AI with reliable, compliant training data.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-orange transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-orange transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-orange transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Home</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">About</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Careers</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">DataForge</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Atlas Library</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Prism Packs</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white text-opacity-90 hover:text-bright-orange transition-all duration-200 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Sentinel Audit</span>
                  <i className="fas fa-arrow-right ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs"></i>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Stay Updated</h3>
            <p className="text-white text-opacity-90 mb-4">
              Subscribe to our newsletter for AI data insights.
            </p>
            <div className="flex group">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/10 border-transparent rounded-r-none text-white placeholder:text-white placeholder:text-opacity-60 focus-visible:ring-bright-orange group-hover:bg-white/20 transition-all duration-300" 
              />
              <Button className="bg-bright-orange hover:bg-deep-orange transition-all duration-300 rounded-l-none transform group-hover:translate-x-1">
                <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-80">© {new Date().getFullYear()} SpecifiAI, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white text-opacity-80 hover:text-bright-orange transition-all duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-opacity-80 hover:text-bright-orange transition-all duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-white text-opacity-80 hover:text-bright-orange transition-all duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
