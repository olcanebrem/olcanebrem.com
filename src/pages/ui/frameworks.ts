export interface Framework {
  slug: string;
  title: string;
  description: string;
  docsUrl: string;
}

export const frameworks: Framework[] = [
  {
    slug: 'shadcn',
    title: 'Shadcn UI',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
    docsUrl: 'https://ui.shadcn.com'
  },
  {
    slug: 'materialui',
    title: 'Material UI',
    description: 'MUI offers a comprehensive suite of UI tools to help you ship new features faster.',
    docsUrl: 'https://mui.com'
  },
  {
    slug: 'daisy',
    title: 'DaisyUI',
    description: 'The most popular component library for Tailwind CSS.',
    docsUrl: 'https://daisyui.com'
  },
  {
    slug: 'mantine',
    title: 'Mantine',
    description: 'A fully featured React components library.',
    docsUrl: 'https://mantine.dev'
  },
  {
    slug: 'mwc',
    title: 'Material Web Components',
    description: 'Material Design implemented as Web Components, including Chips, Buttons, and more.',
    docsUrl: 'https://material-web.dev'
  },
  {
    slug: 'material-next',
    title: 'Material Next',
    description: 'Next generation of Material Design with modern styling and enhanced features.',
    docsUrl: 'https://next.material.io'
  },
  {
    slug: 'mui-x',
    title: 'MUI-X Data Grid',
    description: 'Advanced data grid and table components for complex data visualization.',
    docsUrl: 'https://mui.com/x/react-data-grid/'
  }
];

export const frameworksList = [
  { slug: 'shadcn', ...frameworks[0] },
  { slug: 'materialui', ...frameworks[1] },
  { slug: 'daisy', ...frameworks[2] },
  { slug: 'mantine', ...frameworks[3] },
  { slug: 'mwc', ...frameworks[4] },
  { slug: 'material-next', ...frameworks[5] },
  { slug: 'mui-x', ...frameworks[6] }
];
