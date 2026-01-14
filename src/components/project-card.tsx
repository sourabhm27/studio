import React from 'react';
import type { Project } from '@/lib/portfolio-data';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import ProjectModal from './project-modal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <ProjectModal project={project}>
        <Card className="group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="p-0">
            <div className="relative h-48 w-full">
                <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.image.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            </CardHeader>
            <CardContent className="p-4 text-left">
                <h3 className="font-headline text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">{project.category}</Badge>
            </CardFooter>
        </Card>
    </ProjectModal>
  );
};

export default ProjectCard;
