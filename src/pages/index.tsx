import React, {useEffect, useRef, useCallback, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Splash(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);
  const hasNavigated = useRef(false);
  const history = useHistory();

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const rawProgress = -rect.top / scrollableHeight;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      video.currentTime = clamped * video.duration;
      setProgress(clamped);

      // Navigate when video reaches the end
      if (clamped >= 0.98 && !hasNavigated.current) {
        hasNavigated.current = true;
        history.push('/support');
      }
    });
  }, [history]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  // Hide Docusaurus navbar and footer on splash
  useEffect(() => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const footer = document.querySelector('.footer') as HTMLElement;
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const opacity = progress > 0.85 ? (progress - 0.85) / 0.15 : 0;

  return (
    <>
      <Head>
        <title>Cyanview — Remote Camera Control</title>
        <meta name="description" content="Cyanview remote camera control solutions for broadcast professionals." />
      </Head>

      <div className="splash" ref={containerRef}>
        <div className="splash__sticky">
          <video
            ref={videoRef}
            src="/video/rcpj-scroll.mp4"
            muted
            playsInline
            preload="auto"
            className="splash__video"
          />

          {/* Scroll hint at the start */}
          <div
            className="splash__scroll-hint"
            style={{opacity: progress < 0.05 ? 1 : 0}}
          >
            <div className="splash__scroll-arrow" />
            <span>Scroll to explore</span>
          </div>

          {/* Fade to white overlay when reaching the end */}
          <div
            className="splash__fade-overlay"
            style={{opacity}}
          />
        </div>
      </div>
    </>
  );
}
