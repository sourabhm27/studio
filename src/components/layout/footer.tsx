import { personalInfo } from '@/lib/portfolio-data';
import { Youtube, Instagram, Clapperboard } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Clapperboard className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold tracking-tighter">ReelCraft</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Sourabh B. Magadum's Video Editing Portfolio
            </p>
          </div>
          
          <div className="lg:justify-self-center">
            <h4 className="font-headline text-lg font-semibold">Contact Info</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
          
          <div className="lg:justify-self-end">
            <h4 className="font-headline text-lg font-semibold">Follow Me</h4>
            <div className="mt-2 flex space-x-4">
              <a href={personalInfo.youtube.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href={personalInfo.instagram.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
