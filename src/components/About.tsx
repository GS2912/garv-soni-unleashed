
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Target, Users } from "lucide-react";

export const About = () => {
  const traits = [
    {
      icon: Code,
      title: "Software Engineer",
      description: "Building scalable solutions and tackling complex engineering challenges with passion and precision."
    },
    {
      icon: Zap,
      title: "Entrepreneur",
      description: "Co-founding innovative products that solve real problems and empower teams to achieve more."
    },
    {
      icon: Target,
      title: "Self-Improver",
      description: "Constantly pushing physical and mental limits through discipline, training, and relentless growth."
    },
    {
      icon: Users,
      title: "Content Creator",
      description: "Documenting the journey and sharing insights to inspire others to break their own barriers."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Journey of Relentless Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My mission extends far beyond code and startups. It's about documenting the process of building, 
            the mindset behind growth, and the discipline that fuels it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <trait.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{trait.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">The Rock Lee Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether it's tackling complex engineering challenges, pushing physical limits through strength and endurance training, 
              or sharing insights on breaking personal and professional barriers, my goal is simple: to level up constantly and 
              inspire others to do the same.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If there's one way to describe me, it's this: <span className="font-bold text-blue-600">relentless</span>. 
              Just like Rock Lee, I believe in the power of pure effort—no shortcuts, no excuses, just the will to keep improving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
