"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  GUILLARD Nicolas
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
                  Étudiant en informatique à l ESIEA en 3ème Année
                </h2>
                <h2 className="text-xl font-medium md:text-2xl">
                  Développeur
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" asChild>
                  <Link href="/assets/CV.pdf" download="CV_GUILLARD_Nicolas.pdf">
                    Télécharger CV
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Me contacter
                  </Link>
                </Button>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Link 
                  href="https://github.com/Nicolas2027g"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link 
                  href="https://fr.linkedin.com/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link 
                  href="https://www.instagram.com/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link 
                  href="https://discord.com/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-6 w-6" />
                  <span className="sr-only">Discord</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-primary blur-xl opacity-50 -z-10" />
                <img
                  src="/images/presentation.jpg"
                  alt="Photo de profil de GUILLARD Nicolas"
                  className="rounded-3xl object-cover border shadow-lg aspect-square w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}