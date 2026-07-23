'use client';

import { useEffect, useRef } from 'react';

export default function BookingEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ORIGIN = 'https://yescrew-dashboard.vercel.app';

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== ORIGIN || !iframeRef.current) return;

      const d = e.data;
      if (d && d.type === 'yescrew:embed:height' && typeof d.height === 'number') {
        iframeRef.current.style.height = d.height + 'px';
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="lafc-booking"
      src="https://yescrew-dashboard.vercel.app/book/56327af6-853f-4979-bb1d-952c2a0b0d5f"
      title="Book a FREE consultation with Los Angeles Fashion Consulting"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{
        width: '100%',
        maxWidth: '520px',
        minHeight: '840px',
        border: 0,
        display: 'block',
        margin: '0 auto',
      }}
    />
  );
}
