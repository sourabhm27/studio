import { careerObjective } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-4 text-center lg:order-1 lg:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              {careerObjective}
            </p>
            <a href="/sourabh_magadum_cv.html" download="Sourabh_Magadum_CV.html">
              <Button variant="secondary" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
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
