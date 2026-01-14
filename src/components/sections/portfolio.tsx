'use client';

import { projects, ProjectCategory } from '@/lib/portfolio-data';
import React, { useState } from 'react';
import ProjectCard from '../project-card';
import { Button } from '../ui/button';

const categories: ProjectCategory[] = ['All', 'Short-form', 'Long-form', 'Reels', 'YouTube'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-card">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Portfolio</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          A selection of projects that showcase my passion for visual storytelling and technical skills.
        </p>

        <div className="my-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-in fade-in-0 zoom-in-95" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards'}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
