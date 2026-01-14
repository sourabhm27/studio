import { educationAndAchievements, experience } from '@/lib/portfolio-data';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Experience = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Career & Education</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            My journey in content creation, technical education, and notable achievements.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-bold text-center lg:text-left">Professional Experience</h3>
            {experience.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-semibold">{item.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{item.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-bold text-center lg:text-left">Education & Achievements</h3>
            {educationAndAchievements.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-semibold">{item.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{item.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
