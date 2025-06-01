
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Power of Pure Effort: Lessons from Rock Lee",
      description: "How embracing the mindset of relentless improvement can transform your personal and professional journey.",
      date: "2024-03-15",
      category: "Mindset",
      readTime: "5 min read"
    },
    {
      title: "Building Tacl.io: From Idea to No-Code SaaS",
      description: "The journey of creating a platform that democratizes test automation and empowers teams worldwide.",
      date: "2024-03-10",
      category: "Entrepreneurship",
      readTime: "8 min read"
    },
    {
      title: "Breaking Barriers: The Discipline Behind Growth",
      description: "Exploring the daily habits and mental frameworks that fuel consistent self-improvement.",
      date: "2024-03-05",
      category: "Self-Improvement",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documenting the journey, sharing lessons learned, and inspiring others to push their own limits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
            >
              View All Posts <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
