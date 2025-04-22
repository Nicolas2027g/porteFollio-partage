"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

// Interface pour définir la structure d'un projet
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

// Interface pour les props du composant
interface ProjectCardProps {
  project: ProjectFeature;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div 
          className="relative overflow-hidden aspect-video" 
          onClick={() => setShowDetails(true)}
        >
          <div className="relative overflow-hidden aspect-video" onClick={() => setShowDetails(true)}>
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
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
          <Button size="sm" onClick={() => setShowDetails(true)} className="flex items-center gap-1">
            <span>En savoir plus</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      {/* Modal de détails du projet */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-background rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-4 right-4 rounded-full bg-background/80 hover:bg-background"
                  onClick={() => setShowDetails(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-medium">Description</h3>
                  <p className="text-muted-foreground">{project.longDescription || project.description}</p>
                  
                  {project.features && project.features.length > 0 && (
                    <>
                      <h3 className="text-lg font-medium">Fonctionnalités</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      <span>Voir le code</span>
                    </a>
                  </Button>
                  <Button asChild>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}