"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const education = [
    {
      degree: "Ingénieur en Informatique",
      institution: "ESIEA",
      period: "2022 - Présent",
      description: "Spécialisation en développement logiciel et cybersécurité.",
    },
    {
      degree: "DUT Informatique",
      institution: "IUT de Paris",
      period: "2020 - 2022",
      description: "Formation en programmation, algorithmique, et bases de données.",
    }
  ];

  const experiences = [
    {
      title: "Développeur Full Stack (Stage)",
      company: "Tech Solutions",
      period: "Juin 2024 - Septembre 2024",
      description: "Développement d'une application web utilisant React et Node.js.",
      tasks: [
        "Implémentation de fonctionnalités front-end avec React",
        "Création d'API RESTful avec Express.js",
        "Intégration avec une base de données MongoDB"
      ]
    },
    {
      title: "Développeur Web (Projet)",
      company: "Projet Universitaire",
      period: "Janvier 2024 - Mai 2024",
      description: "Développement d'une plateforme de gestion de projets pour étudiants.",
      tasks: [
        "Conception de l'architecture technique",
        "Mise en place d'une base de données relationnelle",
        "Développement de l'interface utilisateur"
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Colonne gauche - Présentation */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">À propos de moi</h2>
            
            <p className="text-muted-foreground">
              Étudiant passionné d'informatique en 3ème année à l'ESIEA, je me spécialise dans le développement web et la programmation. 
              Je suis constamment en quête de nouvelles connaissances et d'expériences pour parfaire mes compétences techniques.
            </p>
            
            <p className="text-muted-foreground">
              Mon parcours académique m'a permis d'acquérir une solide base technique, que j'applique dans divers projets personnels et professionnels. 
              Je m'intéresse particulièrement aux technologies web modernes, à la cybersécurité et au développement d'applications.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3">Centres d'intérêt</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Développement web</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Intelligence artificielle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cybersécurité</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Open source</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <Button asChild>
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
          
          {/* Colonne droite - Formation et expérience */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Formation</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {education.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn}
                    className="border-l-2 border-primary pl-4 pb-2"
                  >
                    <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Expérience */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Expérience</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeIn}
                    className="border-l-2 border-primary pl-4 pb-2"
                  >
                    <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm mt-1">{exp.description}</p>
                    <ul className="mt-2 space-y-1">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm flex items-start gap-2">
                          <span className="text-primary text-lg leading-none">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}