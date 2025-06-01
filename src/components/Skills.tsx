
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Dumbbell, Users, ChevronRight } from "lucide-react";

type SkillCategory = 'tech' | 'fitness' | 'leadership';

const skillsData = {
  tech: {
    title: "Tech Arsenal",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 89 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 83 },
      { name: "React.js", level: 94 },
      { name: "Next.js", level: 87 },
      { name: "Kubernetes", level: 78 },
      { name: "Machine Learning", level: 82 },
      { name: "Deep Learning", level: 80 },
      { name: "PyTorch", level: 81 },
      { name: "TensorFlow", level: 79 },
      { name: "AI Agents", level: 85 },
      { name: "MCP", level: 83 }
    ]
  },
  fitness: {
    title: "Physical Power",
    icon: Dumbbell,
    gradient: "from-red-500 to-orange-500",
    achievements: [
      { exercise: "Deadlift", record: "175 KG", description: "Max lift" },
      { exercise: "Squat", record: "120 KG", description: "Max lift" },
      { exercise: "Bench Press", record: "90 KG", description: "Max lift" },
      { exercise: "Shoulder Press", record: "32.5 KG", description: "Each hand × 8 reps" },
      { exercise: "Endurance Run", record: "21 KMs", description: "4 half marathons completed" }
    ]
  },
  leadership: {
    title: "Leadership & Soft Skills",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Communication", level: 92 },
      { name: "Team Building", level: 88 },
      { name: "Collaboration", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Time Management", level: 89 },
      { name: "Adaptability", level: 91 },
      { name: "Critical Thinking", level: 93 }
    ]
  }
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('tech');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'tech', label: 'Tech' },
    { key: 'fitness', label: 'Fitness' },
    { key: 'leadership', label: 'Leadership' }
  ];

  const renderTechSkills = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {skillsData.tech.skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100">
            <CardContent className="p-4 text-center">
              <div className="text-sm font-semibold text-gray-800 mb-2">{skill.name}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                />
              </div>
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                {skill.level}%
              </Badge>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  const renderFitnessAchievements = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.fitness.achievements.map((achievement, index) => (
        <div
          key={achievement.exercise}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-800">{achievement.exercise}</h4>
                <Dumbbell className="text-red-500 h-5 w-5" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {achievement.record}
              </div>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  const renderLeadershipSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.leadership.skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                <ChevronRight className="text-purple-500 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Proficiency</span>
                  <span className="font-medium text-purple-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case 'tech':
        return renderTechSkills();
      case 'fitness':
        return renderFitnessAchievements();
      case 'leadership':
        return renderLeadershipSkills();
      default:
        return null;
    }
  };

  const activeData = skillsData[activeCategory];
  const IconComponent = activeData.icon;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A relentless pursuit of excellence across technology, physical fitness, and leadership
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              {categories.map(({ key, label }) => {
                const isActive = activeCategory === key;
                const data = skillsData[key];
                const Icon = data.icon;
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${data.gradient} text-white shadow-lg transform scale-105`
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-8">
          <div className={`text-center mb-12 transform transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${activeData.gradient}`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">{activeData.title}</h3>
            </div>
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
