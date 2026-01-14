'use client';

import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useFirebaseApp } from '@/firebase';

export function useStorageUrl(path: string | undefined | null): string | null {
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const app = useFirebaseApp();

  useEffect(() => {
    if (!path) {
      setUrl(null);
      return;
    }

    let isMounted = true;
    const fetchUrl = async () => {
      setLoading(true);
      setError(null);
      try {
        const storage = getStorage(app);
        const storageRef = ref(storage, path);
        const downloadUrl = await getDownloadURL(storageRef);
        if (isMounted) {
          setUrl(downloadUrl);
        }
      } catch (err: any) {
        if (isMounted) {
          if (err.code !== 'storage/object-not-found') {
             setError(err);
          }
          setUrl(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUrl();

    return () => {
      isMounted = false;
    };
  }, [path, app]);

  return url;
}
