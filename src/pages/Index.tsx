import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Code, Zap, Target, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { FeaturedWork } from "@/components/FeaturedWork";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/hooks/useTheme";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="garv-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        {/* Welcome section at very top */}
        <section className="h-[40vh] flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3 text-gray-700 dark:text-gray-200 animate-fade-in">Hi, welcome</h2>
          <AnimatedProfileImage imageUrl="/lovable-uploads/14e50bf2-0665-431d-8e8e-a2481e122a73.png" size={180} minSize={36} />
        </section>
        {/* Rest of the homepage */}
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <BlogSection />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
