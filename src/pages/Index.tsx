
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

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="garv-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
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
