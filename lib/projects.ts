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
    slug: 'catalogo-perfumaria',
    image: '/projects/perfumaria.png',
    github: 'https://github.com/luizfernando',
    demo: '#',
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
