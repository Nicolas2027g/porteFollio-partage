"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
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

interface ProjectCarouselProps {
  projects: ProjectFeature[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const totalProjects = projects.length;
  
  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev === totalProjects - 1 ? 0 : prev + 1));
  }, [totalProjects]);
  
  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev === 0 ? totalProjects - 1 : prev - 1));
  }, [totalProjects]);
  
  useEffect(() => {
    if (!autoplay) return;
    
    autoplayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [current, autoplay, nextSlide]);
  
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden rounded-xl relative aspect-[16/9]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${index === current ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-full">
              <div className="relative w-full h-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4 max-w-lg line-clamp-2">{project.description}</p>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href={`/portfolio?project=${project.id}`}>
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/50 hover:bg-background/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/50 hover:bg-background/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}