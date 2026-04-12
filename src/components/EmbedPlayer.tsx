import React, {useRef, useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface EmbedPlayerProps {
  src: string;
  credit?: string;
  creditUrl?: string;
}

function EmbedPlayerInner({src, credit, creditUrl}: EmbedPlayerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = src;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [src]);

  return (
    <figure className="embed-player">
      <div ref={containerRef} className="embed-player__container" />
      {credit && (
        <figcaption className="embed-player__credit">
          {creditUrl ? (
            <a href={creditUrl} target="_blank" rel="noopener noreferrer">{credit}</a>
          ) : (
            credit
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function EmbedPlayer(props: EmbedPlayerProps): React.JSX.Element {
  return (
    <BrowserOnly fallback={<div style={{padding: '2rem', textAlign: 'center', color: 'var(--ifm-color-emphasis-600)'}}>Loading video…</div>}>
      {() => <EmbedPlayerInner {...props} />}
    </BrowserOnly>
  );
}
