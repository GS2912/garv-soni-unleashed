
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
      { name: "Java", imagePlaceholder: "/placeholder-java-logo.png", bgColor: "from-orange-500 to-red-500" },
      { name: "Python", imagePlaceholder: "/placeholder-python-logo.png", bgColor: "from-blue-500 to-yellow-500" },
      { name: "JavaScript", imagePlaceholder: "/placeholder-js-logo.png", bgColor: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", imagePlaceholder: "/placeholder-ts-logo.png", bgColor: "from-blue-600 to-blue-800" },
      { name: "PostgreSQL", imagePlaceholder: "/placeholder-postgresql-logo.png", bgColor: "from-blue-700 to-blue-900" },
      { name: "MongoDB", imagePlaceholder: "/placeholder-mongodb-logo.png", bgColor: "from-green-600 to-green-800" },
      { name: "React.js", imagePlaceholder: "/placeholder-react-logo.png", bgColor: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", imagePlaceholder: "/placeholder-nextjs-logo.png", bgColor: "from-gray-700 to-black" },
      { name: "Kubernetes", imagePlaceholder: "/placeholder-kubernetes-logo.png", bgColor: "from-blue-500 to-purple-600" },
      { name: "Machine Learning", imagePlaceholder: "/placeholder-ml-logo.png", bgColor: "from-purple-500 to-pink-500" },
      { name: "Deep Learning", imagePlaceholder: "/placeholder-dl-logo.png", bgColor: "from-indigo-500 to-purple-700" },
      { name: "PyTorch", imagePlaceholder: "/placeholder-pytorch-logo.png", bgColor: "from-orange-600 to-red-600" },
      { name: "TensorFlow", imagePlaceholder: "/placeholder-tensorflow-logo.png", bgColor: "from-orange-500 to-yellow-500" },
      { name: "AI Agents", imagePlaceholder: "/placeholder-ai-agents-logo.png", bgColor: "from-emerald-500 to-teal-600" },
      { name: "MCP", imagePlaceholder: "/placeholder-mcp-logo.png", bgColor: "from-slate-600 to-slate-800" }
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
      { name: "Communication" },
      { name: "Team Building" },
      { name: "Collaboration" },
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Adaptability" },
      { name: "Critical Thinking" }
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {skillsData.tech.skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={skill.imagePlaceholder} 
                  alt={`${skill.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Fallback to a simple icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {skill.name.charAt(0)}
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </div>
              <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-none">
                Proficient
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
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 dark:hover:from-red-800/30 dark:hover:to-orange-800/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">{achievement.exercise}</h4>
                <Dumbbell className="text-red-500 h-5 w-5" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {achievement.record}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  const renderLeadershipSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.leadership.skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h4>
                <ChevronRight className="text-purple-500 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <Badge variant="secondary" className="text-xs bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border-none">
                Expert
              </Badge>
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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A relentless pursuit of excellence across technology, physical fitness, and leadership
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-gray-700">
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
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
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
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{activeData.title}</h3>
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
