import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/portfolio-data';
import { Github, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[85dvh] min-h-[600px] w-full animate-in fade-in duration-1000">
      <div
        className="absolute inset-0 bg-primary/10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05), hsl(var(--background)) 70%)',
        }}
      />
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Video Editor & Content Creator specializing in engaging short-form and long-form content.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#portfolio">
            <Button size="lg">View My Work</Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </a>
        </div>
        <div className="mt-8 flex items-center gap-6">
          <a href={personalInfo.youtube.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Youtube className="h-6 w-6" />
          </a>
          <a href={personalInfo.instagram.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Instagram className="h-6 w-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground transition-colors hover:text-primary">
            <Mail className="h-6 w-6" />
          </a>
          <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground transition-colors hover:text-primary">
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
