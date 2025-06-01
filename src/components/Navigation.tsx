
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Garv Soni
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('work')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('work')} className="text-left text-gray-600 hover:text-blue-600 transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
