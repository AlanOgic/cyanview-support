import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const products = [
  {
    name: 'RCP',
    subtitle: 'Remote Control Panel',
    description:
      'Software-based camera paint control running on tablets, computers, or touchscreens. From 2 to 128 cameras.',
    link: '/docs/products/rcp',
  },
  {
    name: 'RIO',
    subtitle: 'Remote I/O Gateway',
    description:
      'Hardware gateway that connects cameras to the RCP ecosystem. Maintains autonomous camera and lens control even on lossy networks.',
    link: '/docs/products/rio',
  },
  {
    name: 'CI0',
    subtitle: 'Camera Interface',
    description:
      'Compact serial-to-IP converter for direct camera connection. Budget-friendly option for local production environments.',
    link: '/docs/products/ci0',
  },
  {
    name: 'VP4',
    subtitle: 'Video Processor',
    description:
      '4-channel video processor for multi-camera setups with real-time color correction and CCU capabilities.',
    link: '/docs/products/vp4',
  },
  {
    name: 'NIO',
    subtitle: 'Network I/O',
    description:
      'Network-based I/O device with 16 GPIO channels for tally over Ethernet, WiFi, or 4G. NDI and SRT compatible.',
    link: '/docs/products/nio',
  },
  {
    name: 'RSBM',
    subtitle: 'SDI Control Board',
    description:
      'SDI control injection board for Blackmagic cameras. Used with CI0 or RIO to enable full camera control over SDI.',
    link: '/docs/products/rsbm',
  },
];

const features = [
  {
    icon: '\u{1F39B}',
    title: 'Remote camera control',
    text: 'Control paint, iris, gain, shutter, color matrix, and more from any location \u2014 studio, OB van, or across the globe with REMI.',
  },
  {
    icon: '\u{1F517}',
    title: 'Multi-protocol support',
    text: 'Works with Serial, VISCA, LANC, IP, SDI, USB, and proprietary camera protocols. One system for all your cameras.',
  },
  {
    icon: '\u{1F310}',
    title: 'REMI-ready',
    text: 'Cloud-connected remote production with sub-second latency. Control cameras anywhere with just an internet connection.',
  },
  {
    icon: '\u{1F4F7}',
    title: '100+ camera models',
    text: 'Supports Sony, Canon, Panasonic, Blackmagic, ARRI, and 25+ other manufacturers out of the box.',
  },
];

const useCases = [
  {
    tag: 'Studio',
    title: 'Multi-camera studio production',
    text: 'Control all studio cameras from a single RCP. Paint, shade, and match cameras in real-time with centralized control.',
  },
  {
    tag: 'REMI',
    title: 'Remote production',
    text: 'Place a RIO on-site and control cameras from headquarters. Full camera paint over standard internet \u2014 no dedicated fiber needed.',
  },
  {
    tag: 'Live event',
    title: 'On-location broadcast',
    text: 'From fashion shows to sports events, mix cinema cameras with PTZ units and control them all from one panel.',
  },
];

const manufacturers = [
  {name: 'Sony', logo: '/img/3Parties/sony.png'},
  {name: 'Canon', logo: '/img/3Parties/canon.png'},
  {name: 'Panasonic', logo: '/img/3Parties/panasonic.png'},
  {name: 'Blackmagic', logo: '/img/3Parties/blackmagic.png'},
  {name: 'ARRI', logo: '/img/3Parties/arri.png'},
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Remote camera control for broadcast"
      description="Cyanview provides remote camera control solutions for broadcast professionals. Control any camera, from any location, with any protocol."
    >
      {/* Hero */}
      <header className="hero-section">
        <h1>Control any camera, from anywhere</h1>
        <p>
          The all-in-one remote camera control ecosystem for broadcast
          professionals. One system for 100+ camera models across 25+
          manufacturers.
        </p>
        <div className="hero-buttons">
          <Link className="hero-btn hero-btn--primary" to="/docs/getting-started/quickstart">
            Get started
          </Link>
          <Link className="hero-btn hero-btn--secondary" to="/docs/products/rcp">
            View products
          </Link>
        </div>
      </header>

      <main>
        {/* Products */}
        <section className="home-section">
          <h2>The Cyanview ecosystem</h2>
          <p className="section-subtitle">
            Hardware and software that work together to give you full camera
            control \u2014 locally or remotely.
          </p>
          <div className="products-grid">
            {products.map((product) => (
              <Link key={product.name} className="product-card" to={product.link}>
                <div className="product-card__name">{product.name}</div>
                <div className="product-card__subtitle">{product.subtitle}</div>
                <div className="product-card__description">{product.description}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="home-section bg-alt" style={{maxWidth: 'none', padding: '5rem 2rem'}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <h2>Built for broadcast</h2>
            <p className="section-subtitle">
              Designed by broadcast engineers, for broadcast engineers.
            </p>
            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-item">
                  <div className="feature-item__icon">{feature.icon}</div>
                  <div className="feature-item__title">{feature.title}</div>
                  <div className="feature-item__text">{feature.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="home-section">
          <h2>For every production scenario</h2>
          <p className="section-subtitle">
            From intimate studio setups to global REMI productions.
          </p>
          <div className="use-cases-grid">
            {useCases.map((uc) => (
              <div key={uc.tag} className="use-case-card">
                <div className="use-case-card__tag">{uc.tag}</div>
                <div className="use-case-card__title">{uc.title}</div>
                <div className="use-case-card__text">{uc.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturer logos */}
        <section className="home-section" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <h2>Works with your cameras</h2>
          <p className="section-subtitle">
            Native support for the brands you already use.
          </p>
          <div className="logos-grid">
            {manufacturers.map((m) => (
              <img key={m.name} src={m.logo} alt={`${m.name} logo`} loading="lazy" />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Set up your first camera in minutes with our quick start guide.</p>
          <div className="cta-buttons">
            <Link className="cta-btn cta-btn--primary" to="/docs/getting-started/quickstart">
              Quick start guide
            </Link>
            <Link className="cta-btn cta-btn--secondary" to="mailto:support@cyanview.com">
              Contact support
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
