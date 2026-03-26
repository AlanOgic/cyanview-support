import React, {useRef, useCallback, useEffect, useState} from 'react';

interface ScrubVideoProps {
  src: string;
  poster?: string;
}

export default function ScrubVideo({src, poster}: ScrubVideoProps): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startTime = useRef(0);
  const rafRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [hint, setHint] = useState(true);

  const scrub = useCallback((clientX: number) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !container || !video.duration) return;

      const dx = clientX - startX.current;
      const sensitivity = video.duration / container.offsetWidth;
      const newTime = Math.min(
        video.duration,
        Math.max(0, startTime.current + dx * sensitivity),
      );

      video.currentTime = newTime;
      setProgress(newTime / video.duration);
    });
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      const video = videoRef.current;
      if (!video) return;

      isDragging.current = true;
      startX.current = e.clientX;
      startTime.current = video.currentTime;
      setHint(false);

      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      scrub(e.clientX);
    },
    [scrub],
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="scrub-video"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        className="scrub-video__player"
      />

      {/* Progress bar */}
      <div className="scrub-video__track">
        <div
          className="scrub-video__fill"
          style={{width: `${progress * 100}%`}}
        />
      </div>

      {/* Drag hint */}
      {hint && (
        <div className="scrub-video__hint">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8l4 4-4 4" />
            <path d="M6 8l-4 4 4 4" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
          <span>Click &amp; drag to scrub</span>
        </div>
      )}
    </div>
  );
}
