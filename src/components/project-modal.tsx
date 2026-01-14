import React, { type ReactNode, useState, useEffect } from 'react';
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
import { ExternalLink, Upload, Video } from 'lucide-react';
import { useStorageUrl } from '@/firebase/storage/use-storage-url';
import { VideoUploader } from './video-uploader';
import { useUser } from '@/firebase';


interface ProjectModalProps {
  project: Project;
  children: ReactNode;
}

const ProjectModal = ({ project, children }: ProjectModalProps) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [showUploader, setShowUploader] = useState(false);
  const { user } = useUser();

  const fetchedVideoUrl = useStorageUrl(project.videoStoragePath);

  useEffect(() => {
    if (fetchedVideoUrl) {
      setVideoUrl(fetchedVideoUrl);
    }
  }, [fetchedVideoUrl]);

  const handleUploadComplete = (url: string) => {
    setVideoUrl(url);
    // Here you would typically also update the project data in your database
    console.log(`Video uploaded for project ${project.id}: ${url}`);
    setShowUploader(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="relative mb-4 h-60 w-full rounded-lg overflow-hidden">
            {videoUrl ? (
              <video src={videoUrl} controls className="h-full w-full object-contain bg-black" />
            ) : (
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.image.imageHint}
              />
            )}
             {user && !videoUrl && !showUploader && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button onClick={() => setShowUploader(true)} variant="secondary">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Video
                    </Button>
                </div>
            )}
          </div>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {showUploader && user ? (
            <VideoUploader
              path={`projects/${project.id}/video.mp4`}
              onUploadComplete={handleUploadComplete}
            />
          ) : (
            <>
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
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
