import React, { type ReactNode } from 'react';
import type { Project } from '@/lib/portfolio-data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  children: ReactNode;
}

const ProjectModal = ({ project, children }: ProjectModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="relative mb-4 h-60 w-full rounded-lg overflow-hidden">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.image.imageHint}
            />
          </div>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-sm">Skills Used</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Category</h4>
            <div className="mt-2">
              <Badge variant="outline">{project.category}</Badge>
            </div>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
