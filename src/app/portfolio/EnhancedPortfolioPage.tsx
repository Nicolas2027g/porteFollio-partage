"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { themeConfig } from "@/lib/theme-config";
import EnhancedProjectCard from "@/components/EnhancedProjectCard";


export default function EnhancedPortfolioPage() {
  const { projects } = themeConfig;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Extraire toutes les technologies uniques pour les filtres
  const allTechnologies = ["all"];
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });
  
  // Filtrer les projets lorsque la catégorie change
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.technologies.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mes Projets
          </h1>
          <p className="text-muted-foreground max-w-[700px]">
            Une sélection de mes projets de développement les plus significatifs.
          </p>
        </motion.div>
        
        {/* Filtres de projets */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === tech
                  ? "bg-primary text-white"
                  : "bg-muted hover:bg-primary/10"
              }`}
            >
              {tech === "all" ? "Tous les projets" : tech}
            </button>
          ))}
        </div>

        {/* Grille de projets avec animation */}
        <motion.div
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                layout
                className="h-full"
              >
                <EnhancedProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={item}
              className="col-span-full text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                Aucun projet ne correspond à ces critères. Essayez un autre filtre.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}