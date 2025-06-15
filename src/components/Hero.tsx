
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Youtube, X } from "lucide-react";

// Removes the profile image from here; image is now animated above.
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-10 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile image moved out for animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
            Relentless Self-Improver
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineer • Entrepreneur • Co-founder of{' '}
            <a href="https://tacl.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
              Tacl.io
            </a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Just like Rock Lee, I believe in the power of pure effort—no shortcuts, no excuses, just the will to keep improving. 
            I document my journey building products, breaking barriers, and pushing limits to inspire others to level up constantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              onClick={() => scrollToSection('about')}
            >
              Learn More <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <X size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
