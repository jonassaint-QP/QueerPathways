import { useEffect } from 'react';

export default function SomaticSignalsRedirect() {
  useEffect(() => {
    window.location.replace('https://somaticsignals.substack.com');
  }, []);

  return null;
}
