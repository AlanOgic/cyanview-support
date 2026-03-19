import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      link: {type: 'doc', id: 'getting-started/index'},
      items: [
        'getting-started/my-first-cyanview',
        'getting-started/quickstart',
        'getting-started/ip-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      link: {type: 'generated-index', title: 'Cyanview products', slug: '/products'},
      items: [
        'products/rcp',
        'products/rio',
        'products/ci0',
        'products/vp4',
        'products/nio',
        'products/rsbm',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Networking',
          items: [
            'guides/networking/ip-configuration',
            'guides/networking/remi',
            'guides/networking/wireless',
            'guides/networking/cellular',
            'guides/networking/wifi',
            'guides/networking/wifi-usb',
            'guides/networking/wifi-nano-ap',
            'guides/networking/halow',
            'guides/networking/tethering',
          ],
        },
        {
          type: 'category',
          label: 'Tally',
          items: [
            'guides/tally/tally',
          ],
        },
        {
          type: 'category',
          label: 'Preview',
          items: [
            'guides/preview/preview',
          ],
        },
        'guides/licensing',
        'guides/remote-support',
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'guides/advanced/serial-camera',
            'guides/advanced/b4-return',
            'guides/advanced/camera-groups',
            'guides/advanced/sbus',
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: [
            'guides/workflows/fashion-show',
            'guides/workflows/blackmagic-haivision',
            'guides/workflows/sony-mirrorless-gimbal',
            'guides/workflows/lens-video-return',
            'guides/workflows/haivision-beauty-shot',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {type: 'doc', id: 'integrations/index'},
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Generic guides',
          items: [
            'integrations/generic/serial-camera',
            'integrations/generic/ip-camera',
            'integrations/generic/ptz',
            'integrations/generic/lens',
            'integrations/generic/routers',
            'integrations/generic/color-corrector',
            'integrations/generic/3d-lut-processor',
          ],
        },
        {
          type: 'category',
          label: 'Sony',
          items: [
            'integrations/cameras/sony/sony',
            'integrations/cameras/sony/sony-8pin',
            'integrations/cameras/sony/sony-alpha',
            'integrations/cameras/sony/sony-burano',
            'integrations/cameras/sony/sony-cbm',
            'integrations/cameras/sony/sony-fr7',
            'integrations/cameras/sony/sony-fx6',
            'integrations/cameras/sony/sony-fx9',
            'integrations/cameras/sony/sony-venice',
            'integrations/cameras/sony/sony-ptz',
            'integrations/cameras/sony/sony-lanc',
            'integrations/cameras/sony/sony-pxw',
            'integrations/cameras/sony/sony-fcb',
          ],
        },
        {
          type: 'category',
          label: 'Canon',
          items: [
            'integrations/cameras/canon/canon',
            'integrations/cameras/canon/canon-ptz',
            'integrations/cameras/canon/canon-mirrorless',
            'integrations/cameras/canon/canon-remote-a',
            'integrations/cameras/canon/canon-xc',
            'integrations/cameras/canon/canon-xf605',
          ],
        },
        {
          type: 'category',
          label: 'Panasonic',
          items: [
            'integrations/cameras/panasonic/aw-ub',
            'integrations/cameras/panasonic/bgh1',
            'integrations/cameras/panasonic/eva1',
            'integrations/cameras/panasonic/gh5s',
            'integrations/cameras/panasonic/p2-serial',
            'integrations/cameras/panasonic/p2hd',
            'integrations/cameras/panasonic/panasonic-studio',
            'integrations/cameras/panasonic/panasonic-ptz',
            'integrations/cameras/panasonic/varicam',
            'integrations/cameras/panasonic/cx350',
          ],
        },
        {
          type: 'category',
          label: 'Blackmagic',
          items: [
            'integrations/cameras/blackmagic/blackmagic-camera-control',
            'integrations/cameras/blackmagic/atem',
            'integrations/cameras/blackmagic/bm-handles',
          ],
        },
        {
          type: 'category',
          label: 'ARRI',
          items: [
            'integrations/cameras/arri/arri-sscp',
            'integrations/cameras/arri/arri-cap',
            'integrations/cameras/arri/arri-cforce',
          ],
        },
        {
          type: 'category',
          label: 'Other cameras',
          items: [
            {type: 'autogenerated', dirName: 'integrations/cameras/other'},
          ],
        },
        {
          type: 'category',
          label: 'Lenses',
          items: [
            {type: 'autogenerated', dirName: 'integrations/lenses'},
          ],
        },
        {
          type: 'category',
          label: 'Accessories',
          items: [
            {type: 'autogenerated', dirName: 'integrations/accessories'},
          ],
        },
        {
          type: 'category',
          label: 'Broadcast systems',
          items: [
            {type: 'autogenerated', dirName: 'integrations/broadcast-systems'},
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Manuals',
          items: [
            {
              type: 'category',
              label: 'RCP manual',
              items: [
                'reference/manuals/rcp/installation',
                'reference/manuals/rcp/ui',
                {
                  type: 'category',
                  label: 'RCP UI pages',
                  items: [
                    'reference/manuals/rcp/ui/general',
                    'reference/manuals/rcp/ui/scene',
                    'reference/manuals/rcp/ui/lens',
                    'reference/manuals/rcp/ui/assignables',
                    'reference/manuals/rcp/ui/settings',
                  ],
                },
                'reference/manuals/rcp/web-ui',
                'reference/manuals/rcp/emberplus',
                'reference/manuals/rcp/gpio-dongle',
                'reference/manuals/rcp/controls',
              ],
            },
            'reference/manuals/ci0/ci0-manual',
            'reference/manuals/rio-manual',
            'reference/manuals/rio-live-manual',
            'reference/manuals/vp4-manual',
            'reference/manuals/nio-manual',
            'reference/manuals/tally-light-manual',
            'reference/manuals/iris-joystick',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'reference/troubleshooting/troubleshooting',
            'reference/troubleshooting/ip-primer',
            'reference/troubleshooting/commands',
          ],
        },
        'reference/faq',
        'reference/release-notes',
        'reference/product-update',
        'reference/firmware-download',
        'reference/rma-procedure',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/cable-catalog',
        'resources/build-tally-led',
        'resources/draw-io-symbols',
        'resources/glossary',
      ],
    },
  ],
};

export default sidebars;
