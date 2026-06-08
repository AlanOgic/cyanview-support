import React, {useState} from 'react';
import {DeepChat} from 'deep-chat-react';
import styles from './ChatWidget.module.css';

interface SourceLink {
  title?: string;
  url: string | null;
  source_type?: string;
}

interface StreamEvent {
  type: 'session' | 'text' | 'sources' | 'done' | 'error';
  text?: string;
  sources?: SourceLink[];
  error?: string;
  session_id?: string;
  search_id?: string;
}

interface HandlerBody {
  messages: Array<{role: string; text?: string}>;
}

interface HandlerSignals {
  onResponse: (response: {text?: string; error?: string}) => Promise<void> | void;
  onOpen: () => void;
  onClose: () => void;
}

const API_URL = 'https://cyanview.cloud/api/search/stream';

function formatSources(sources: SourceLink[]): string {
  const linkable = sources.filter(
    (s): s is SourceLink & {url: string} =>
      typeof s.url === 'string' && s.url.length > 0,
  );
  if (linkable.length === 0) return '';
  const items = linkable
    .map((s) => `- [${s.title || s.url}](${s.url})`)
    .join('\n');
  return `\n\n**Sources:**\n${items}`;
}

async function handleChat(
  body: HandlerBody,
  signals: HandlerSignals,
): Promise<void> {
  const lastMessage = body.messages[body.messages.length - 1];
  const query = lastMessage?.text?.trim() ?? '';
  if (!query) {
    await signals.onResponse({error: 'Empty question.'});
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query, source: 'both', limit: 10, mode: 'chat'}),
    });

    if (!response.ok || !response.body) {
      await signals.onResponse({
        error: `Request failed (${response.status} ${response.statusText})`,
      });
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const {done, value} = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, {stream: true});
      const events = buffer.split('\n\n');
      buffer = events.pop() ?? '';

      for (const rawEvent of events) {
        const line = rawEvent.trim();
        if (!line.startsWith('data:')) continue;
        const payload = line.slice(line.indexOf(':') + 1).trim();
        if (!payload) continue;

        let data: StreamEvent;
        try {
          data = JSON.parse(payload) as StreamEvent;
        } catch {
          continue;
        }

        if (data.type === 'text' && data.text) {
          await signals.onResponse({text: data.text});
        } else if (
          data.type === 'sources' &&
          Array.isArray(data.sources) &&
          data.sources.length > 0
        ) {
          const md = formatSources(data.sources);
          if (md) await signals.onResponse({text: md});
        } else if (data.type === 'error') {
          await signals.onResponse({error: data.error ?? 'Unknown error'});
          return;
        }
      }
    }

    signals.onClose();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network error';
    await signals.onResponse({error: message});
  }
}

export default function ChatWidget(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className={styles.panel}
          role="dialog"
          aria-modal="false"
          aria-label="Cyanview Support Assistant"
        >
          <div className={styles.header}>
            <span className={styles.title}>Cyanview Assistant</span>
            <button
              type="button"
              className={styles.close}
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.chatContainer}>
            <DeepChat
              style={{width: '100%', height: '100%', border: 'none', borderRadius: 0}}
              introMessage={{
                text: 'Hi! Ask me anything about Cyanview products, integrations, setup, or troubleshooting.',
              }}
              textInput={{placeholder: {text: 'Ask a question…'}}}
              submitButtonStyles={{
                submit: {container: {default: {backgroundColor: '#00a8e8'}}},
              }}
              connect={{
                stream: true,
                handler: handleChat,
              }}
            />
          </div>
          <div className={styles.disclaimer}>
            AI-generated answers may contain errors. Always verify critical
            information.
          </div>
        </div>
      )}
      <button
        type="button"
        className={styles.bubble}
        aria-label={open ? 'Close support chat' : 'Open support chat'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
