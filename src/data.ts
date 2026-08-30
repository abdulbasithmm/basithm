import { WorkProject, ClientStory, StoreItem, ServiceItem } from './types';

export const personalBio = {
  name: 'Abdul Basith MM',
  brandName: 'Basith Frames',
  title: 'Motion & Visual Designer',
  location: 'Malappuram, Kerala, India',
  email: 'basithmm08@gmail.com',
  phone: '+91 94966 60968',
  whatsappUrl: 'https://wa.me/919496660968?text=Hi%20Basith!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  bio1: 'Abdul Basith MM is a self-taught video editor and graphic designer with a strong focus on visual storytelling and digital media production. He specializes in creating theme visuals, posters, event edits, and promotional content, combining creativity with clear communication to produce designs that effectively convey a message.',
  bio2: 'Based in Malappuram, Kerala, India, he is currently open to freelance opportunities within the design and media industry.'
};

export const basithServices: ServiceItem[] = [
  {
    id: 'ui-design',
    title: 'UI Design',
    icon: 'layout',
    description: 'User-centered web and mobile interfaces that combine intuitive navigation with modern aesthetic precision.',
    features: ['Figma Wireframing & Prototypes', 'Responsive Design Systems', 'User Experience & Flow Design']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    description: 'Fast, responsive, and interactive web applications built with cutting-edge front-end frameworks and custom animations.',
    features: ['React & Modern Frameworks', 'Custom Motion & Micro-animations', 'Performance & Mobile Optimization']
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    icon: 'videocam',
    description: 'Engaging, dynamic animations that bring your ideas to life. From logo reveals to complex explanatory videos.',
    features: ['Faceless videos', 'AI powered voice overs', 'Advertisement animations']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: 'movie_edit',
    description: 'Professional visual storytelling through precise editing, color grading, and sound design. Perfect for events and social media.',
    features: ['Storytelling / Explainer', 'Short / Long-form contents', 'VFX & Color Grading']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: 'palette',
    description: 'Striking visuals including branding, posters, and digital assets. Crafting unique identities for your vision.',
    features: ['Social Media Posters', 'Printable Designs', 'Brand Identities'],
    link: 'https://basith-design-nu.vercel.app/'
  }
];

export const basithProjects: WorkProject[] = [
  {
    id: 'suhail-faizy',
    title: 'SUHAIL FAIZY KOORAD | MINHAJUL JANNA',
    category: 'UI Design',
    tools: 'After Effects • Motion Graphics',
    type: 'motion',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuZViy7rEK7F_r6t-vPvoQx3b6g4y3gKQpeFtHi2JU4bJ98IeBFgSVGD1jQNyXPWnDmL9I0Sg-ofosOhAkGbDqUmdP5G7GoIW0lAj8zcVhqZXWUB8T8VMSo4ytG5wCipAZJsggZ6mtcOURuvOvREN-km_NAXNrn0CQpPXmPvlwJ5X_8fTQEo0DvcaqyFHMnCV3MFlTQZ6oRh70uf5ESVF_kWZBp87ybVAE0wcn0fZUhTi6osx4nliI-T885',
    description: 'High-impact motion graphics lyrical video featuring typography, kinetic effects, and spiritual atmosphere.'
  },
  {
    id: 'legacy-100',
    title: '100 Years Legacy',
    category: 'Graphic Design',
    tools: 'Photoshop • Brand Poster',
    type: 'design',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuUuJPtokCze5p2EtO58SdJ_3v_lEqlvgjUAqrzf9iHRNWSFzgQdhdIXmYHJh8_8jYqnPozCDU2MPOeh2BB-2B3qAcfngkm1YTQ0TBeM3Q135mdxAp6pPLBpXO1Y-HHY-T__eCZm5ZLl-duoaoLRO9ygSE7zp4FikFXD_BklJILR-doBkaJ33W2oyL67AOxT_3FMhpoFqHsBAMnVO6TpinGas0AnlhluQsCPLzchSFarOaP33zfJI7LTXng',
    description: 'Centennial commemorative graphic art poster celebrating a century of heritage and community impact.',
    link: 'https://basith-design-nu.vercel.app/'
  },
  {
    id: 'nooril-noorin',
    title: 'Nooril Noorin Nouka',
    category: 'Web Development',
    tools: 'Premiere Pro • Motion Design',
    type: 'video',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsmLWR_UV6lipIx509gcgUwfBcP1NVLEUssckl9dtgHKZbRbxQDf6b-e5E-TOmexPc5klV73x7UFxuLvOyEyPv2f5dTztFjTiufuHE6vD_oCiuzr3t8SVPXuZpy0hk5VqCdFOioLmTqJsKTZWlisrczfUQilA7ALfQzo-4G4lQe_5BiNbduv6PUdcSyRPMLwOKPxFwZ_KPdu9nphbqYO8E99yvML4bTnFXkxDlWjMHNG9fqb9jedKC7WFQ',
    description: 'Visual artwork and song release graphics designed for multi-platform digital publishing.'
  },
  {
    id: 'arabic-lyric',
    title: 'Arabic Lyric Video',
    category: 'Motion & Video Editing',
    tools: 'After Effects • Calligraphy Animation',
    type: 'motion',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuBMsnXE2rDPFW2vgqc4HSb5wmExMaz5aaiMFsYaQvOeRugnuyvUK6WBUmz7IcHpblBqAaedOyy9Q3lzGlkpYgUzTXC-rMywKZq3h6CdN5_t2-5lvaJX5IzcsNnV1j-bsCqdNnRY65-8GSVW8Mzg0p7TPrG5Q1Fo_qcFck15cilRKg9jMtzxG0mMi90RPjycWRfxd3yDOB6TUpyFKD86AwiZtIt4FME3_-o3GZ99DX2CGKykQcqtVzg1I5H',
    description: 'Custom Arabic typography animation with cinematic particle dynamics and color grading.'
  },
  {
    id: 'arts-fest',
    title: 'Arts Fest Visuals',
    category: 'Event Media & Branding',
    tools: 'Motion & Print Design',
    type: 'design',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLtxpvdVV8ptHQpsU3FXbrUaWEHyqzGvTekYfcPp76_tUAMhtPGgJD19rKJmaIF3vF_ORJeIMlzyqc-_luGlJQ-EiwjvQgUT5aSKz5Se9strywyCzEj9LpkUJLZtY0x3IVylW81lUE-SSTYCKHsT4NhruZRYRFjfihENWhGJVazb6qyBtS5na-Wy73cdI_u0r-fbpNk0RXKKQeAWHOSa5xIYYXqdd-yv_X9oETTS3bcBDDUEb8jWpYe5eIDg',
    description: 'Comprehensive media identity package for annual arts festival including promo teasers and social posters.'
  }
];

export const clientStories: ClientStory[] = [
  {
    id: 'salman-mp',
    quote: 'Basith is an outstanding motion designer and editor. He consistently delivers mind-blowing results, which is his unique strength. I have worked with him on many projects.',
    author: 'Salman MP',
    role: 'Founder',
    company: 'DigiBayt',
    avatarBg: 'from-[#8B5CF6] to-[#06B6D4]'
  },
  {
    id: 'abdurahman-kunnath',
    quote: 'Working with Basith has been an amazing experience. His attention to detail, sense of aesthetics, and perfection in execution truly stand out. Every frame feels thoughtfully designed.',
    author: 'Abdurahman Kunnath',
    role: 'Creative Director',
    company: 'Tazkiyah Records',
    avatarBg: 'from-[#06B6D4] to-[#10B981]'
  },
  {
    id: 'hafiz-jasir',
    quote: 'Amazing works and incredibly responsive. He understood our vision perfectly and translated it into visuals that exceeded our expectations. Truly a top-tier creative partner.',
    author: 'HAFIZ JASIR',
    role: 'Vocalist & Producer',
    company: 'Independent Artist',
    avatarBg: 'from-[#10B981] to-[#ff3200]'
  }
];

export const storeProducts: StoreItem[] = [
  {
    id: 'vintage-wedding-invite',
    title: 'Vintage Wedding Invite',
    price: '₹299',
    priceNum: 299,
    category: 'After Effects & Photoshop Template',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvO0y4A7qPDaWf46MO3IRklkQh5-kCeW3fpAkfDFleuF2VAEbLw2Ac3GW9GNmL7KSUEi9bCfuuASIRCewhWsrP52ZBC-IPKBk3uTj_KeNCgBskrVhMrm4HfB5F0DSBsZYqCFpKj0UbLAckvTFidWlQ2xeC3WUHDudQ-QirWfNXlDPSfBZcSJ8IHVy6UdvVIF88p6a50vgo9vm9EwSDjKJqNa1QWnnYKELOGEGBvcSaIfTkSTqjHQKW_Gokf',
    badge: 'BESTSELLER',
    downloads: '1.2k+',
    description: 'Fully customizable vintage motion invitation project file with elegant typography and golden ornaments.'
  },
  {
    id: 'motion-poster-bundle',
    title: 'Cyberpunk Motion Poster Pack',
    price: '₹499',
    priceNum: 499,
    category: 'After Effects Presets',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLtv9-zcbKoNiytUv12GHnT_aN833G5cxiZU7Mxh6656amEdvtDkhGFBCuHbeRnY31OGy6hrwEGjddC7qINYo2ZA-2PpfRTYro05lB7PtGDl6VASfttRrnCeFNWLiFWZFKGKQO8oO-k81VNhhr4C-fphdmYCpr_qqLWYCogvB_dhRKqZ12dG9VkmbF979iYwmDnNnT-JaPlKvWBwjWBwjRb-wKczXfMNg-waLoq4CilbevToYHJEBqRtqz6B6gCr',
    badge: 'NEW',
    downloads: '650+',
    description: '10 modular motion poster layouts with glitch transitions and neon atmospheric glows.'
  },
  {
    id: 'arabic-typography-kit',
    title: 'Arabic Calligraphy Motion Kit',
    price: '₹399',
    priceNum: 399,
    category: 'MOGRT & Premiere Presets',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuBMsnXE2rDPFW2vgqc4HSb5wmExMaz5aaiMFsYaQvOeRugnuyvUK6WBUmz7IcHpblBqAaedOyy9Q3lzGlkpYgUzTXC-rMywKZq3h6CdN5_t2-5lvaJX5IzcsNnV1j-bsCqdNnRY65-8GSVW8Mzg0p7TPrG5Q1Fo_qcFck15cilRKg9jMtzxG0mMi90RPjycWRfxd3yDOB6TUpyFKD86AwiZtIt4FME3_-o3GZ99DX2CGKykQcqtVzg1I5H',
    badge: 'POPULAR',
    downloads: '920+',
    description: 'Seamless Arabic text reveals and motion graphics titles ready for YouTube & Instagram reels.'
  }
];

export const recognitionData = {
  title: 'Recognition & Impact',
  tagline: 'We build visual systems that make brands clear and memorable.',
  stats: [
    {
      number: '100%',
      label: 'No random visuals. Only clear systems built for recognition.'
    },
    {
      number: '360°',
      label: 'Full brand presence. From strategy and identity to launch.'
    }
  ],
  awards: [
    'Awwwards Site of the Year 2025 Nominee',
    'FWA of the Month — Motion Graphics System',
    'Red Dot Design Best of the Best 2025',
    'DigiBayt Featured Motion Editor of the Year'
  ]
};
