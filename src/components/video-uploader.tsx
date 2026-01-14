'use client';
import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useFirebaseApp, useUser } from '@/firebase';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

interface VideoUploaderProps {
  path: string;
  onUploadComplete: (downloadUrl: string) => void;
}

export function VideoUploader({ path, onUploadComplete }: VideoUploaderProps) {
  const app = useFirebaseApp();
  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) {
      setError('Please select a file and be signed in.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    const storage = getStorage(app);
    const storageRef = ref(storage, path);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (uploadError) => {
        console.error('Upload failed:', uploadError);
        setError(`Upload failed: ${uploadError.message}`);
        setIsUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onUploadComplete(downloadURL);
        } catch (downloadError: any) {
           console.error('Failed to get download URL:', downloadError);
           setError(`Failed to get download URL: ${downloadError.message}`);
        } finally {
            setIsUploading(false);
        }
      }
    );
  };

  return (
    <div className="space-y-4">
      <Input type="file" accept="video/*" onChange={handleFileChange} disabled={isUploading} />
      <Button onClick={handleUpload} disabled={!file || isUploading}>
        {isUploading ? 'Uploading...' : 'Upload Video'}
      </Button>

      {isUploading && (
        <div className="space-y-2">
            <p>{Math.round(uploadProgress)}%</p>
            <Progress value={uploadProgress} />
        </div>
      )}

      {error && (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Upload Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
