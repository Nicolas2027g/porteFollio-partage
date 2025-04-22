"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Smartphone, MapPin, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Définir les types pour le formulaire
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Définir le type pour le statut du formulaire
interface FormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulation d'envoi (à remplacer par votre logique d'envoi réel)
    try {
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Logique d'envoi de formulaire ici
      console.log("Form submitted:", formData);
      
      // Réinitialiser le formulaire après envoi réussi
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer." 
      });
    }
  };

  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4 mb-12"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Me Contacter
            </h1>
            <p className="text-muted-foreground max-w-[700px]">
              N hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Informations de contact */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Coordonnées</h2>
                <p className="text-muted-foreground">
                  Je suis disponible pour des projets freelance, des stages ou des opportunités d emploi.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@nicolasguillard.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Horaires de disponibilité</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Lundi - Vendredi: 9h00 - 18h00</li>
                  <li>Weekend: Sur rendez-vous</li>
                </ul>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {formStatus.isSubmitted && (
                <Alert className="bg-green-50 border-green-200">
                  <AlertTitle className="text-green-800">Message envoyé !</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </AlertDescription>
                </Alert>
              )}

              {formStatus.error && (
                <Alert className="bg-red-50 border-red-200">
                  <AlertTitle className="text-red-800">Erreur</AlertTitle>
                  <AlertDescription className="text-red-700">
                    {formStatus.error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}