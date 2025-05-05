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
            <div className="font-poppins font-bold text-2xl mb-4">
              Specifi<span className="text-bright-orange">AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Powering ethical AI with reliable, compliant training data.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-bright-orange transition duration-150"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-bright-orange transition duration-150"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  DataForge
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Atlas Library
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Prism Packs
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-bright-orange transition duration-150">
                  Sentinel Audit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for AI data insights.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 border-gray-700 rounded-r-none text-white placeholder:text-gray-400 focus-visible:ring-bright-orange" 
              />
              <Button className="bg-bright-orange hover:bg-deep-orange transition duration-150 rounded-l-none">
                <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 SpecifiAI, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-bright-orange transition duration-150">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-bright-orange transition duration-150">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-bright-orange transition duration-150">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
