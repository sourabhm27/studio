import { careerObjective } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = () => {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile') || { imageUrl: 'https://picsum.photos/seed/profile/500/500', imageHint: 'profile picture' };

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-center lg:text-left animate-in fade-in slide-in-from-left duration-500">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              {careerObjective}
            </p>
            <a href="/sourabh_magadum_cv.pdf" download="Sourabh_Magadum_CV.pdf">
              <Button variant="secondary" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right duration-500">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                <Image 
                    src="https://picsum.photos/seed/profile/800/800"
                    alt="Sourabh Magadum"
                    fill
                    className="rounded-full object-cover shadow-lg"
                    data-ai-hint="man portrait"
                />
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 ring-4 ring-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
