"use client";

import Link from 'next/link';
import { Github, Linkedin, Instagram, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} GUILLARD Nicolas. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://github.com/Nicolas2027g" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://fr.linkedin.com/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://discord.com/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}