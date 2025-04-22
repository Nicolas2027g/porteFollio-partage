"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";
import Image from "next/image";

// Définir le type pour un projet
interface ProjectFeature {
  technologies: string[];
  features?: string[];
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  link: string;
  github: string;
}

interface EnhancedProjectCardProps {
  project: ProjectFeature;
}

export default function EnhancedProjectCard({ project }: EnhancedProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
      {/* Carte du projet avec effet de hover */}
      <Card 
        className="overflow-hidden group relative cursor-pointer transition-all duration-300 h-full"
        onClick={() => setShowDetails(true)}
      >
        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-6 text-white">
          <h3 className="text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.description.length > 100 
              ? `${project.description.substring(0, 100)}...` 
              : project.description}
          </p>
          <Button 
            variant="outline" 
            className="text-white border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:bg-white hover:text-primary"
          >
            <span>Voir détails</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="relative overflow-hidden aspect-video">
          <div className="relative w-full h-full">
            <Image
              src={project.image === "#" ? "/images/Logo-noBG.png" : project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        
        {/* Informations du projet */}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Modal du projet avec arrière-plan flou */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={() => setShowDetails(false)}
          >
            {/* Overlay flou */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            
            {/* Contenu modal */}
            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-lg shadow-xl w-full max-w-4xl relative z-50"
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                {/* Bouton de fermeture */}
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-4 right-4 z-10 rounded-full bg-background/80 hover:bg-background"
                  onClick={() => setShowDetails(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <div className="relative h-60 md:h-80 rounded-t-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image === "#" ? "/images/Logo-noBG.png" : project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent bottom-0 h-20" />
                </div>
                
                {/* Contenu du projet */}
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-medium">Description</h3>
                    <p className="text-muted-foreground">
                      {project.longDescription || project.description}
                    </p>
                    
                    {/* Fonctionnalités */}
                    {project.features && project.features.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-medium mb-3">Fonctionnalités</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                                <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Liens */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <span>Voir le code</span>
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Voir le projet</span>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}