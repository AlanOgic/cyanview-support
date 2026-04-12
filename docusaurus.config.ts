import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cyanview Support',
  tagline: 'Remote camera control for broadcast professionals',
  favicon: 'img/siteGfx/favicon.ico',

  future: {
    v4: true,
  },

  // TEST MODE — do not index
  noIndex: true,
  url: 'https://support.cyanview.cloud',
  baseUrl: '/',

  organizationName: 'cyanview',
  projectName: 'cyanview-support',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    // JSON-LD Organization
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Cyanview',
        url: 'https://www.cyanview.com',
        logo: 'https://support.cyanview.com/img/siteGfx/Logo_Cyan_flat.svg',
        description:
          'Cyanview provides remote camera control solutions for broadcast professionals. Control any camera from any location.',
        sameAs: [
          'https://www.linkedin.com/company/cyanview',
          'https://www.youtube.com/@cyanview',
        ],
        areaServed: [
          {
            '@type': 'Place',
            name: 'Europe',
          },
          {
            '@type': 'Place',
            name: 'United States',
          },
          {
            '@type': 'Place',
            name: 'Worldwide',
          },
        ],
        knowsAbout: [
          'Remote Camera Control',
          'Broadcast Engineering',
          'REMI Production',
          'Camera Paint Control',
          'PTZ Control',
          'SDI',
          'NDI',
          'SRT',
        ],
      }),
    },
    // JSON-LD Product
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Cyanview Remote Camera Control System',
        description:
          'Hardware and software ecosystem for remote camera control in broadcast production. Control 100+ camera models across Sony, Canon, Panasonic, Blackmagic, ARRI, and more.',
        brand: {
          '@type': 'Brand',
          name: 'Cyanview',
        },
        category: 'Broadcast Equipment',
      }),
    },
    // Preconnect for performance
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    // Outfit + Source Code Pro
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap',
      },
    },
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Legacy redirects from old site
          {from: '/docs/overview', to: '/docs/getting-started'},
          {from: '/docs/quickstart', to: '/docs/getting-started/quickstart'},
          {from: '/docs/Manuals/RIOManual', to: '/docs/products/rio'},
          {from: '/docs/Manuals/RIOLiveManual', to: '/docs/products/rio'},
          {from: '/docs/Manuals/VP4Manual', to: '/docs/products/vp4'},
          {from: '/docs/Manuals/NIOManual', to: '/docs/products/nio'},
          {from: '/docs/Manuals/CI0/CI0Manual', to: '/docs/products/ci0'},
          {from: '/docs/Configuration/ConfIP', to: '/docs/guides/networking/ip-configuration'},
          {from: '/docs/Configuration/REMI', to: '/docs/guides/networking/remi'},
          {from: '/docs/Configuration/Tally', to: '/docs/guides/tally/tally'},
          {from: '/docs/Configuration/Preview', to: '/docs/guides/preview/preview'},
          {from: '/docs/Troubleshooting/FAQ', to: '/docs/reference/faq'},
          {from: '/docs/Troubleshooting/Troubleshooting', to: '/docs/reference/troubleshooting/troubleshooting'},
          {from: '/docs/Maintenance/ReleaseNotes', to: '/docs/reference/release-notes'},
          {from: '/docs/Accessories/CableCatalog', to: '/docs/resources/cable-catalog'},
          {from: '/docs/DrawIOSymbols', to: '/docs/resources/draw-io-symbols'},
          {from: '/docs/my-first-cyanview', to: '/docs/getting-started/my-first-cyanview'},
          {from: '/docs/Manuals/multi-cam-dashboard', to: '/docs/reference/manuals/rcp/multi-cam-dashboard'},
        ],
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/siteGfx/Logo_Cyan_flat.svg',
    metadata: [
      {name: 'keywords', content: 'Cyanview, remote camera control, broadcast, RCP, RIO, REMI, PTZ, camera paint, Sony, Canon, Panasonic, Blackmagic, ARRI'},
      {name: 'author', content: 'Cyanview'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Cyanview Support'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@cyanview'},
      {name: 'robots', content: 'index, follow'},
      {name: 'geo.region', content: 'BE'},
      {name: 'geo.placename', content: 'Brussels'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Cyanview',
        src: 'img/siteGfx/Logo_Cyan_flat.svg',
        srcDark: 'img/siteGfx/Logo_Cyan_flat.svg',
        height: 40,
      },
      items: [
        {
          type: 'dropdown',
          label: 'Products',
          position: 'left',
          items: [
            {label: 'RCP — Remote Control Panel', to: '/docs/products/rcp'},
            {label: 'RIO — Remote I/O Gateway', to: '/docs/products/rio'},
            {label: 'CI0 — Camera Interface', to: '/docs/products/ci0'},
            {label: 'VP4 — Video Processor', to: '/docs/products/vp4'},
            {label: 'NIO — Network I/O', to: '/docs/products/nio'},
            {label: 'RSBM — SDI Control Board', to: '/docs/products/rsbm'},
            {type: 'html', value: '<hr style="margin: 4px 0;">'},
            {label: 'See it live', to: '/docs/products/system-examples'},
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: 'Integrations',
          to: '/docs/integrations',
          position: 'left',
        },
        {
          label: 'Support',
          to: '/docs/reference/troubleshooting/troubleshooting',
          position: 'left',
        },
        {
          href: 'https://cyanview.cloud',
          label: 'AI Search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Support',
          items: [
            {label: 'Knowledge Base', to: '/docs/getting-started'},
            {label: 'Troubleshooting', to: '/docs/reference/troubleshooting/troubleshooting'},
            {label: 'FAQ', to: '/docs/reference/faq'},
            {label: 'RMA Procedure', to: '/docs/reference/rma-procedure'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Firmware & Downloads', to: '/docs/reference/firmware-download'},
            {label: 'User Guides', to: '/docs/reference/manuals/rcp/installation'},
            {label: 'Cable Catalog', to: '/docs/resources/cable-catalog'},
            {label: 'Release Notes', to: '/docs/reference/release-notes'},
          ],
        },
        {
          title: 'Products',
          items: [
            {label: 'RCP', to: '/docs/products/rcp'},
            {label: 'RIO', to: '/docs/products/rio'},
            {label: 'CI0', to: '/docs/products/ci0'},
            {label: 'VP4', to: '/docs/products/vp4'},
            {label: 'NIO', to: '/docs/products/nio'},
          ],
        },
        {
          title: 'Cyanview',
          items: [
            {label: 'cyanview.com', href: 'https://www.cyanview.com'},
            {label: 'Contact Support', href: 'mailto:support@cyanview.com'},
            {label: 'AI Assistant', href: 'https://cyanview.cloud'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/cyanview'},
            {label: 'YouTube', href: 'https://www.youtube.com/@cyanview'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cyanview. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    zoom: {
      selector: '.markdown img:not(.products-grid img)',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
