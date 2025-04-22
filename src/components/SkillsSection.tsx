"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SkillsSection() {
  const skillCategories = [
    {
      id: "languages",
      name: "Langages",
      skills: [
        { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", level: 85, icon: "devicon-typescript-plain colored" },
        { name: "Python", level: 80, icon: "devicon-python-plain colored" },
        { name: "Java", level: 75, icon: "devicon-java-plain colored" },
        { name: "C++", level: 70, icon: "devicon-cplusplus-plain colored" },
        { name: "C", level: 65, icon: "devicon-c-plain colored" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "devicon-react-original colored" },
        { name: "PHP", level: 90, icon: "devicon-php-plain colored" },
        { name: "HTML", level: 95, icon: "devicon-html5-plain colored" },
        { name: "CSS", level: 90, icon: "devicon-css3-plain colored" },
        { name: "Tailwind", level: 85, icon: "devicon-tailwindcss-plain colored" },
        { name: "Next.js", level: 80, icon: "devicon-nextjs-plain" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "devicon-nodejs-plain colored" },
        { name: "Express", level: 80, icon: "devicon-express-original" },
        { name: "Django", level: 75, icon: "devicon-django-plain" },
        { name: "MongoDB", level: 70, icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", level: 80, icon: "devicon-mysql-plain colored" }
      ]
    },
    {
      id: "tools",
      name: "Outils",
      skills: [
        { name: "Git", level: 90, icon: "devicon-git-plain colored" },
        { name: "Docker", level: 75, icon: "devicon-docker-plain colored" },
        { name: "VS Code", level: 95, icon: "devicon-vscode-plain colored" },
        { name: "Linux", level: 80, icon: "devicon-linux-plain" },
        { name: "Figma", level: 70, icon: "devicon-figma-plain colored" }
      ]
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mes compétences
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Un aperçu des technologies et outils que j utilise pour créer des applications web et des logiciels.
          </p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-card border shadow-sm rounded-lg p-4 w-full aspect-square flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                      <i className={`${skill.icon} text-4xl mb-3`}></i>
                      <h3 className="font-medium text-center">{skill.name}</h3>
                      <div className="w-full bg-muted rounded-full h-2 mt-3">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}