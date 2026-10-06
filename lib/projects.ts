import type { Lang } from '@/lib/i18n'

export type Project = {
  slug: string
  image: string
  github: string
  demo: string
  year: string
  tech: string[]
  title: Record<Lang, string>
  category: Record<Lang, string>
  short: Record<Lang, string>
  overview: Record<Lang, string>
  features: Record<Lang, string[]>
}

export const projects: Project[] = [
  {
    slug: 'catalogo-barbearia',
    image: '/projects/barbearia.png',
    github: 'https://github.com/luizfernando',
    demo: '#',
    year: '2025',
    tech: ['React', 'Tailwind', 'Node.js', 'MySQL'],
    title: { pt: 'Catálogo para Barbearia', en: 'Barbershop Catalog' },
    category: { pt: 'Website Institucional', en: 'Business Website' },
    short: {
      pt: 'Site moderno para uma barbearia com catálogo de serviços, galeria, contato e experiência totalmente responsiva.',
      en: 'Modern website for a barbershop with a service catalog, gallery, contact and a fully responsive experience.',
    },
    overview: {
      pt: 'Projeto desenvolvido para uma barbearia que precisava de presença digital moderna. A aplicação apresenta os serviços com preços, uma galeria de trabalhos e um canal direto de contato, tudo com foco em conversão e experiência mobile.',
      en: 'A project built for a barbershop that needed a modern digital presence. The application showcases services with pricing, a gallery of work and a direct contact channel, all focused on conversion and mobile experience.',
    },
    features: {
      pt: [
        'Catálogo de serviços com preços',
        'Galeria de trabalhos responsiva',
        'Seção de contato e localização',
        'Design mobile-first',
      ],
      en: [
        'Service catalog with pricing',
        'Responsive work gallery',
        'Contact and location section',
        'Mobile-first design',
      ],
    },
  },
  {
  slug: 'acai',
  image: 'image.png',
  github: 'https://github.com/Luiz-dev9/acai',
  demo: 'https://jovial-lolly-161848.netlify.app/',
  year: '2025',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  title: {
    pt: 'Açaí',
    en: 'Açaí'
  },
  category: {
    pt: 'E-commerce & Alimentação',
    en: 'E-commerce & Food'
  },
  short: {
    pt: 'Loja online de açaí desenvolvida para oferecer uma experiência rápida e intuitiva de pedidos, com personalização dos produtos e interface responsiva.',
    en: 'Online açaí shop designed to provide a fast and intuitive ordering experience, with product customization and a responsive interface.'
  },
  overview: {
    pt: 'Projeto desenvolvido para uma loja de açaí com foco em pedidos online e experiência do cliente. A aplicação apresenta um catálogo de produtos, opções de tamanhos e complementos, personalização dos pedidos e uma interface moderna e responsiva, facilitando o processo de escolha e compra.',
    en: 'Project developed for an açaí shop focused on online ordering and customer experience. The application features a product catalog, size and topping options, order customization, and a modern responsive interface that simplifies the selection and purchasing process.'
  },
  features: {
    pt: [
      'Catálogo de produtos e opções de açaí',
      'Personalização dos pedidos',
      'Seleção de tamanhos e complementos',
      'Sistema de carrinho de compras',
      'Resumo dos produtos selecionados',
      'Interface moderna e responsiva',
      'Experiência otimizada para pedidos online'
    ],
    en: [
      'Product catalog and açaí options',
      'Order customization',
      'Size and topping selection',
      'Shopping cart system',
      'Selected products summary',
      'Modern and responsive interface',
      'Optimized online ordering experience'
    ]
  },
},
  {
  slug: 'nexus',
  image: '/projects/nexus.png',
  github: 'https://github.com/Luiz-dev9/nexus',
  demo: 'https://nexuscloset.vercel.app/',
  year: '2026',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  title: {
    pt: 'Nexus',
    en: 'Nexus'
  },
  category: {
    pt: 'E-commerce & Moda',
    en: 'E-commerce & Fashion'
  },
  short: {
    pt: 'Loja virtual moderna de roupas e acessórios, desenvolvida para proporcionar uma experiência de compra elegante, intuitiva e responsiva.',
    en: 'Modern online store for clothing and accessories, designed to provide an elegant, intuitive, and responsive shopping experience.'
  },
  overview: {
    pt: 'Projeto desenvolvido para a Nexus, uma loja de roupas e acessórios com foco em moda contemporânea e experiência digital. A aplicação apresenta um catálogo de produtos, navegação por categorias, visualização detalhada dos itens e uma experiência de compra moderna, com interface responsiva e identidade visual própria.',
    en: 'Project developed for Nexus, a clothing and accessories store focused on contemporary fashion and digital experience. The application features a product catalog, category navigation, detailed product views, and a modern shopping experience with a responsive interface and custom visual identity.'
  },
  features: {
    pt: [
      'Catálogo de roupas e acessórios',
      'Navegação por categorias de produtos',
      'Página com detalhes dos produtos',
      'Sistema de carrinho de compras',
      'Seleção de produtos e quantidades',
      'Interface moderna e responsiva',
      'Experiência de compra otimizada para desktop e mobile'
    ],
    en: [
      'Clothing and accessories catalog',
      'Product category navigation',
      'Detailed product pages',
      'Shopping cart system',
      'Product and quantity selection',
      'Modern and responsive interface',
      'Optimized shopping experience for desktop and mobile'
    ]
  },
},  
  {
  slug: 'nba-store',
  image: '/projects/NBA.png', // Altere para o caminho da sua imagem
  github: 'https://github.com/luizfernando', // Altere para o seu repositório
  demo: 'https://relaxed-nasturtium-65e55f.netlify.app/', // Altere para o link da demonstração
  year: '2025',
  tech: ['React', 'Tailwind', 'Node.js', 'MySQL'],
  title: { pt: 'NBA Store', en: 'NBA Store' },
  category: { pt: 'E-commerce & Acessórios', en: 'E-commerce & Accessories' },
  short: {
    pt: 'Loja online oficial com uma vasta seleção de vestuário, acessórios e colecionáveis da NBA, incluindo camisolas de equipas e equipamentos.',
    en: 'Official online store with a wide selection of NBA apparel, accessories, and collectibles, including team jerseys and gear.',
  },
  overview: {
    pt: 'Projeto desenvolvido para a NBA Store com o objetivo de oferecer uma experiência de compra online excecional. A aplicação conta com um catálogo abrangente, filtragem avançada por equipa e jogador, personalização de camisolas e uma plataforma de pagamento segura, tudo com foco na paixão dos fãs.',
    en: 'Project developed for the NBA Store to provide an exceptional online shopping experience. The application features a comprehensive catalog, advanced filtering by team and player, jersey customization, and a secure payment platform, all focused on fan passion.',
  },
  features: {
    pt: [
      'Catálogo online com categorias de produtos',
      'Filtragem avançada por equipa e jogador',
      'Personalização de camisolas',
      'Integração de pagamentos segura',
      'Design responsivo e otimizado',
    ],
    en: [
      'Online catalog with product categories',
      'Advanced filtering by team and player',
      'Jersey customization',
      'Secure payment integration',
      'Responsive and optimized design',
    ],
  },
},
   {
  slug: 'burger-house',
  image: '/projects/humbuguer.png', // Lembre-se de salvar a imagem com esse nome na sua pasta pública
  github: 'https://github.com/luizfernando',
  demo: 'https://prime-burguer.netlify.app/',
  year: '2025',
  tech: ['React', 'Tailwind', 'Node.js', 'MySQL'],
  title: { pt: 'Burger House', en: 'Burger House' },
  category: { pt: 'Cardápio Digital & Delivery', en: 'Digital Menu & Delivery' },
  short: {
    pt: 'Site e cardápio digital para a hamburgueria Burger House, com apresentação de combos, adicionais e pedidos online.',
    en: 'Website and digital menu for Burger House, showcasing combo meals, extra toppings, and online ordering.',
  },
  overview: {
    pt: 'Projeto desenvolvido para a hamburgueria Burger House com o objetivo de modernizar o atendimento. A aplicação conta com um cardápio interativo, destaques para os hambúrgueres artesanais, cálculo de adicionais e canal direto para pedidos via WhatsApp, com foco total na experiência mobile.',
    en: 'A project built for the Burger House restaurant to modernise customer ordering. The application features an interactive menu, highlights for artisanal burgers, add-on calculations, and a direct WhatsApp ordering channel, with a strong focus on mobile experience.',
  },
  features: {
    pt: [
      'Cardápio digital interativo com categorias',
      'Personalização de pedidos e adicionais',
      'Integração de pedidos direto para o WhatsApp',
      'Design mobile-first e layout otimizado',
    ],
    en: [
      'Interactive digital menu with categories',
      'Order customization and extra toppings',
      'Direct WhatsApp order integration',
      'Mobile-first design and optimized layout',
    ],
  },
},
  {
    slug: 'catalogo-perfumaria',
    image: '/projects/perfumaria.png',
    github: 'https://github.com/luizfernando',
    demo: 'https://teal-starburst-17e358.netlify.app/', //link dos projetos
    year: '2025',
    tech: ['React', 'Express', 'MySQL', 'Tailwind'],
    title: { pt: 'Catálogo de Perfumaria', en: 'Perfumery Catalog' },
    category: { pt: 'Sistema de Gestão', en: 'Management System' },
    short: {
      pt: 'Sistema para gerenciamento e exibição de produtos de uma perfumaria.',
      en: 'A system for managing and displaying products of a perfumery.',
    },
    overview: {
      pt: 'Aplicação full stack que permite cadastrar, editar e exibir produtos de uma perfumaria. Conta com API em Express, banco MySQL e uma vitrine elegante para os clientes navegarem pelo catálogo.',
      en: 'A full stack application that allows registering, editing and displaying perfumery products. It has an Express API, a MySQL database and an elegant storefront for customers to browse the catalog.',
    },
    features: {
      pt: [
        'CRUD completo de produtos',
        'API REST em Express',
        'Vitrine com busca e filtros',
        'Painel de gerenciamento',
      ],
      en: [
        'Full product CRUD',
        'REST API with Express',
        'Storefront with search and filters',
        'Management dashboard',
      ],
    },
  },
  {
    slug: 'ecommerce-luxaria',
    image: '/projects/luxaria.png',
    github: 'https://github.com/luizfernando',
    demo: '#',
    year: '2025',
    tech: ['React', 'TypeScript', 'Tailwind', 'Context API'],
    title: { pt: 'E-commerce Luxaria', en: 'Luxaria E-commerce' },
    category: { pt: 'Loja Virtual', en: 'Online Store' },
    short: {
      pt: 'Loja virtual moderna com carrinho, checkout, cupom e pagamento fictício, com interface premium.',
      en: 'Modern online store with cart, checkout, coupons and mock payment, with a premium interface.',
    },
    overview: {
      pt: 'E-commerce completo construído com React e TypeScript, com gerenciamento de estado via Context API. Inclui fluxo de compra do início ao fim: carrinho, aplicação de cupons, checkout e simulação de pagamento, tudo com uma interface premium.',
      en: 'A complete e-commerce built with React and TypeScript, with state management via Context API. It includes the full purchase flow: cart, coupon application, checkout and payment simulation, all with a premium interface.',
    },
    features: {
      pt: [
        'Carrinho de compras dinâmico',
        'Checkout com validação',
        'Sistema de cupons de desconto',
        'Pagamento fictício e interface premium',
      ],
      en: [
        'Dynamic shopping cart',
        'Checkout with validation',
        'Discount coupon system',
        'Mock payment and premium interface',
      ],
    },
  },
  {
    slug: 'sistema-petlife',
    image: '/projects/petlife.png',
    github: 'https://github.com/luizfernando',
    demo: '#',
    year: '2024',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    title: { pt: 'Sistema PetLife', en: 'PetLife System' },
    category: { pt: 'Plataforma Full Stack', en: 'Full Stack Platform' },
    short: {
      pt: 'Sistema para adoção e doação de animais, com login, cadastro e área administrativa.',
      en: 'A platform for pet adoption and donation, with login, registration and an admin area.',
    },
    overview: {
      pt: 'Plataforma full stack voltada para adoção e doação de animais. Possui autenticação de usuários, cadastro de animais, listagem pública e uma área administrativa para gerenciar todos os registros.',
      en: 'A full stack platform focused on pet adoption and donation. It features user authentication, animal registration, a public listing and an admin area to manage all records.',
    },
    features: {
      pt: [
        'Login e cadastro de usuários',
        'Área administrativa',
        'Listagem e busca de animais',
        'API em Node.js e Express',
      ],
      en: [
        'User login and registration',
        'Admin area',
        'Animal listing and search',
        'API built with Node.js and Express',
      ],
    },
  },
  {
    slug: 'gerenciamento-escolar',
    image: '/projects/escolar.png',
    github: 'https://github.com/luizfernando',
    demo: '#',
    year: '2024',
    tech: ['Node.js', 'Express', 'MySQL', 'React'],
    title: { pt: 'Gerenciamento Escolar', en: 'School Management' },
    category: { pt: 'Sistema Administrativo', en: 'Admin System' },
    short: {
      pt: 'Sistema completo para gerenciamento de alunos, turmas e registros escolares.',
      en: 'A complete system for managing students, classes and school records.',
    },
    overview: {
      pt: 'Sistema administrativo completo para gestão escolar. Permite gerenciar alunos e registros acadêmicos através de uma API robusta em Node.js e Express integrada a um banco de dados MySQL.',
      en: 'A complete administrative system for school management. It allows managing students and academic records through a robust Node.js and Express API integrated with a MySQL database.',
    },
    features: {
      pt: [
        'Gestão completa de alunos',
        'Registros acadêmicos',
        'API REST estruturada',
        'Banco de dados relacional MySQL',
      ],
      en: [
        'Complete student management',
        'Academic records',
        'Structured REST API',
        'MySQL relational database',
      ],
    },
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
