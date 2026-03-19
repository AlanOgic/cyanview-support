import React, {useEffect, useCallback, useRef} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

/* ───────────────────────────────────────────
   SVG Icon Components — crisp 24×24 strokes
   ─────────────────────────────────────────── */

const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="13" y2="11" />
  </svg>
);

const IconCompass = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconDownload = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconTool = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconBot = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const IconRefresh = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconSliders = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ───────────────────────────────────────────
   Data
   ─────────────────────────────────────────── */

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  external?: boolean;
  badge?: string;
}

const featuredServices: ServiceItem[] = [
  {
    icon: <IconBook />,
    title: 'Knowledge Base',
    description: 'Technical articles, product documentation, and in-depth guides for the Cyanview ecosystem.',
    link: '/docs/getting-started',
    color: '#3b82f6',
  },
  {
    icon: <IconCompass />,
    title: 'User Guides',
    description: 'Step-by-step manuals for RCP, RIO, CI0, VP4, NIO, and all Cyanview products.',
    link: '/docs/reference/manuals/rcp/installation',
    color: '#06b6d4',
  },
  {
    icon: <IconDownload />,
    title: 'Downloads',
    description: 'Firmware updates, software releases, and configuration files for your devices.',
    link: '/docs/reference/firmware-download',
    color: '#8b5cf6',
  },
];

const quickLinks: ServiceItem[] = [
  {
    icon: <IconTool />,
    title: 'Troubleshoot',
    description: 'Diagnostic tools and common fixes',
    link: '/docs/reference/troubleshooting/troubleshooting',
    color: '#f59e0b',
  },
  {
    icon: <IconRefresh />,
    title: 'RMA',
    description: 'Product return or exchange requests',
    link: '/docs/reference/rma-procedure',
    color: '#ef4444',
  },
  {
    icon: <IconUsers />,
    title: 'Forum',
    description: 'Community discussions and tips',
    link: 'https://discourse.cyanview.com',
    external: true,
    color: '#0ea5e9',
  },
  {
    icon: <IconSliders />,
    title: 'Configurator',
    description: 'Build your ideal product setup',
    link: 'https://cyanview.cloud/configurator',
    external: true,
    badge: 'Beta',
    color: '#f97316',
  },
  {
    icon: <IconBot />,
    title: 'AI Support Assistant',
    description: 'AI-powered answers from our knowledge base',
    link: 'https://cyanview.cloud',
    external: true,
    badge: 'Beta',
    color: '#10b981',
  },
  {
    icon: <IconMail />,
    title: 'Contact Us',
    description: 'Sales, partnerships, or questions',
    link: 'https://www.cyanview.com/contact',
    external: true,
    color: '#6366f1',
  },
];

const products = [
  {name: 'RCP', desc: 'Remote Control Panel', to: '/docs/products/rcp'},
  {name: 'RIO', desc: 'Remote I/O Gateway', to: '/docs/products/rio'},
  {name: 'CI0', desc: 'Camera Interface', to: '/docs/products/ci0'},
  {name: 'VP4', desc: 'Video Processor', to: '/docs/products/vp4'},
  {name: 'NIO', desc: 'Network I/O', to: '/docs/products/nio'},
  {name: 'RSBM', desc: 'SDI Control Board', to: '/docs/products/rsbm'},
];

/* ───────────────────────────────────────────
   Hero Search Component
   ─────────────────────────────────────────── */

function HeroSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.userAgent);

  const triggerSearch = useCallback(() => {
    const searchButton = document.querySelector(
      '.navbar__search-button, .DocSearch-Button, [class*="searchBar"] button, [class*="searchBar"] input'
    ) as HTMLElement;
    if (searchButton) {
      inputRef.current?.blur();
      searchButton.click();
      return;
    }
    document.dispatchEvent(new KeyboardEvent('keydown', {key: 'k', ctrlKey: !isMac, metaKey: isMac}));
  }, [isMac]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    triggerSearch();
  }, [triggerSearch]);

  return (
    <form className="sp-hero__search" onSubmit={handleSubmit} role="search">
      <span className="sp-hero__search-icon"><IconSearch /></span>
      <input
        ref={inputRef}
        type="search"
        className="sp-hero__search-input"
        placeholder="Search documentation..."
        aria-label="Search documentation"
        onClick={triggerSearch}
        readOnly
      />
      <kbd className="sp-hero__search-kbd">{isMac ? '\u2318 K' : 'Ctrl K'}</kbd>
    </form>
  );
}

/* ───────────────────────────────────────────
   Scroll Reveal Hook
   ─────────────────────────────────────────── */

function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-loaded');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.08, rootMargin: '0px 0px -30px 0px'},
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ───────────────────────────────────────────
   Card Components
   ─────────────────────────────────────────── */

function FeaturedCard({svc, index}: {svc: ServiceItem; index: number}) {
  const isExternal = svc.external;
  const CardTag = isExternal ? 'a' : Link;
  const extraProps = isExternal
    ? {href: svc.link, target: '_blank', rel: 'noopener noreferrer'}
    : {to: svc.link};

  return (
    <CardTag
      className="sp-featured reveal"
      style={{'--card-accent': svc.color, '--reveal-delay': `${index * 0.1}s`} as React.CSSProperties}
      {...(extraProps as any)}
    >
      <div className="sp-featured__icon">
        {svc.icon}
      </div>
      <div className="sp-featured__content">
        <div className="sp-featured__title-row">
          <h2 className="sp-featured__title">{svc.title}</h2>
          {svc.badge && <span className="sp-featured__badge">{svc.badge}</span>}
        </div>
        <p className="sp-featured__desc">{svc.description}</p>
      </div>
      <span className="sp-featured__arrow">
        {isExternal ? <IconExternalLink /> : <IconArrowRight />}
      </span>
    </CardTag>
  );
}

function QuickLinkCard({svc, index}: {svc: ServiceItem; index: number}) {
  const isExternal = svc.external;
  const CardTag = isExternal ? 'a' : Link;
  const extraProps = isExternal
    ? {href: svc.link, target: '_blank', rel: 'noopener noreferrer'}
    : {to: svc.link};

  return (
    <CardTag
      className="sp-quick reveal"
      style={{'--card-accent': svc.color, '--reveal-delay': `${0.3 + index * 0.06}s`} as React.CSSProperties}
      {...(extraProps as any)}
    >
      <span className="sp-quick__icon">{svc.icon}</span>
      <div className="sp-quick__content">
        <span className="sp-quick__title">
          {svc.title}
          {svc.badge && <span className="sp-quick__badge">{svc.badge}</span>}
        </span>
        <span className="sp-quick__desc">{svc.description}</span>
      </div>
      <span className="sp-quick__chevron">
        {isExternal ? <IconExternalLink /> : <IconChevronRight />}
      </span>
    </CardTag>
  );
}

/* ───────────────────────────────────────────
   Page Component
   ─────────────────────────────────────────── */

export default function Home(): React.JSX.Element {
  useScrollReveal();

  return (
    <Layout
      title="Support Center"
      description="Cyanview Support Center — Knowledge base, user guides, downloads, troubleshooting, and more for broadcast professionals."
    >
      {/* ── Hero ── */}
      <header className="sp-hero">
        <div className="sp-hero__bg" />
        <div className="sp-hero__grid-lines" />

        <div className="sp-hero__inner">
          <p className="sp-hero__eyebrow">Cyanview Support Center</p>
          <h1 className="sp-hero__title">
            How can we <span className="sp-hero__title-accent">help you</span>?
          </h1>
          <p className="sp-hero__subtitle">
            Find answers, download firmware, troubleshoot issues,
            or connect with our support team.
          </p>
          <HeroSearch />
        </div>
      </header>

      <main className="sp-main">
        {/* ── Featured Services ── */}
        <section className="sp-section">
          <div className="sp-section__header reveal">
            <h2 className="sp-section__title">Get Started</h2>
            <p className="sp-section__subtitle">Choose how you want to find help</p>
          </div>
          <div className="sp-featured-grid">
            {featuredServices.map((svc, i) => (
              <FeaturedCard key={svc.title} svc={svc} index={i} />
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="sp-section">
          <div className="sp-section__header reveal" style={{'--reveal-delay': '0.25s'} as React.CSSProperties}>
            <h2 className="sp-section__title">Resources</h2>
          </div>
          <div className="sp-quick-grid">
            {quickLinks.map((svc, i) => (
              <QuickLinkCard key={svc.title} svc={svc} index={i} />
            ))}
          </div>
        </section>

        {/* ── Products Strip ── */}
        <section className="sp-products reveal" style={{'--reveal-delay': '0.5s'} as React.CSSProperties}>
          <h3 className="sp-products__title">Products</h3>
          <div className="sp-products__grid">
            {products.map((p) => (
              <Link key={p.name} className="sp-products__item" to={p.to}>
                <span className="sp-products__name">{p.name}</span>
                <span className="sp-products__desc">{p.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section className="sp-contact reveal" style={{'--reveal-delay': '0.6s'} as React.CSSProperties}>
          <div className="sp-contact__inner">
            <div className="sp-contact__text">
              <h3>Need direct assistance?</h3>
              <p>Our engineering team is available for technical issues and urgent support requests.</p>
            </div>
            <a className="sp-contact__btn" href="mailto:support@cyanview.com">
              <IconMail />
              Email Support
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
