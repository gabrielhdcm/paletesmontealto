import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Factory,
  Leaf,
  PackageCheck,
  ShieldCheck,
  TimerReset,
  Truck,
} from 'lucide-react'
import type { ReactNode } from 'react'

function createPlaceholderDataUri(title: string, subtitle: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1600" y2="1000" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F2937" />
          <stop offset="0.55" stop-color="#0E2A88" />
          <stop offset="1" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1200 260) rotate(143) scale(500 380)">
          <stop stop-color="#F8FAFC" stop-opacity="0.35"/>
          <stop offset="1" stop-color="#F8FAFC" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)" />
      <rect x="78" y="72" width="1444" height="856" rx="38" stroke="rgba(248,250,252,0.28)" stroke-width="2" />
      <path d="M170 745C408 522 614 438 955 437C1202 437 1357 350 1472 228" stroke="rgba(248,250,252,0.24)" stroke-width="8" stroke-linecap="round" />
      <path d="M158 838L1466 838" stroke="rgba(248,250,252,0.18)" stroke-width="4" stroke-dasharray="16 18" />
      <rect x="188" y="182" width="228" height="182" rx="24" fill="rgba(248,250,252,0.08)" />
      <rect x="448" y="242" width="228" height="182" rx="24" fill="rgba(248,250,252,0.1)" />
      <rect x="708" y="164" width="228" height="182" rx="24" fill="rgba(248,250,252,0.08)" />
      <rect x="968" y="292" width="228" height="182" rx="24" fill="rgba(248,250,252,0.1)" />
      <rect x="1228" y="194" width="184" height="146" rx="24" fill="rgba(248,250,252,0.12)" />
      <rect width="1600" height="1000" fill="url(#glow)" />
      <text x="188" y="610" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="42" font-weight="700">${title}</text>
      <text x="188" y="670" fill="rgba(248,250,252,0.72)" font-family="Arial, sans-serif" font-size="26">${subtitle}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export type ProductCategory = 'todos' | 'retornaveis' | 'descartaveis' | 'personalizados'

export type Product = {
  id: string
  category: Exclude<ProductCategory, 'todos'>
  name: string
  description: string
  details: string
  specs: string[]
  image: string
  badge: string
}

export const company = {
  name: 'Paletes Monte Alto',
  slogan: 'Paletes de qualidade com sustentabilidade e confiança',
  description:
    'Especializada na fabricação de paletes de madeira retornáveis, descartáveis e embalagens personalizadas. Atendemos indústrias, logística, agronegócio e empresas de todo o Brasil com produtos de alta durabilidade.',
  address:
    'Rodovia SP 305 Km 15,5 – Início da estrada para Taiacu, Monte Alto – SP, CEP 15910-000',
  phones: ['(16) 3241-1009', '(16) 3241-1640'],
  email: 'contato@paletesmontealto.com.br',
  foundedYear: '2006',
}

export const navigationItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
]

export const whatsappUrl =
  'https://wa.me/551632411009?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20paletes%20e%20embalagens%20de%20madeira.'

// PLACEHOLDER: troque por /assets/logo-paletes-monte-alto.png
export const logoPlaceholder = createPlaceholderDataUri(
  'Paletes Monte Alto',
  'Logo placeholder para substituicao futura',
  '#2450C8',
)

// PLACEHOLDER: troque por /assets/hero-paletes-obra.jpg
export const heroPlaceholder = createPlaceholderDataUri(
  'Fabrica e patio de paletes',
  'Imagem principal da operacao industrial',
  '#F3D31B',
)

// PLACEHOLDER: troque por /public/imagem-instucional.jpg caso substitua a foto institucional.
export const aboutPlaceholder = '/imagem-instucional.jpg'

export const productCategories: Array<{ value: ProductCategory; label: string }> = [
  { value: 'todos', label: 'Todos' },
  { value: 'retornaveis', label: 'Retornáveis' },
  { value: 'descartaveis', label: 'Descartáveis' },
  { value: 'personalizados', label: 'Personalizados' },
]

export const products: Product[] = [
  {
    id: 'pma-01-padrao',
    category: 'retornaveis',
    name: 'PMA 01 - Palete Padrão',
    description:
      'Modelo com 4 entradas e face simples, indicado para operações logísticas com foco em praticidade e bom desempenho.',
    details:
      'Palete de construção equilibrada para armazenagem e movimentação de cargas em centros de distribuição e ambientes industriais. Entrega estabilidade operacional e montagem confiável.',
    specs: ['Código: PMA 01', '4 entradas', 'Face simples'],
    image: '/palete.png',
    badge: 'Linha padrão',
  },
  {
    id: 'pma-02-quatro-entradas',
    category: 'retornaveis',
    name: 'PMA 02 - Quatro Entradas',
    description:
      'Versão com 4 entradas e face simples para facilitar o manuseio em diferentes fluxos de carga e descarga.',
    details:
      'Modelo desenvolvido para operação contínua, com boa distribuição de carga e movimentação segura em pátios, estoque e transporte interno.',
    specs: ['Código: PMA 02', '4 entradas', 'Face simples'],
    image: '/palete.png',
    badge: '4 entradas',
  },
  {
    id: 'pma-03-duas-entradas-longarina',
    category: 'retornaveis',
    name: 'PMA 03 - Duas Entradas Longarina',
    description:
      'Palete com 2 entradas no sistema longarina, projetado para suporte estável em armazenagem e expedição.',
    details:
      'Indicado para operações que exigem estrutura firme e padronização dimensional. Oferece bom desempenho em movimentação planejada de cargas.',
    specs: ['Código: PMA 03', '2 entradas', 'Estrutura longarina'],
    image: '/duas%20entradas.jpg',
    badge: 'Longarina',
  },
  {
    id: 'pma-04-duas-entradas-dupla-face',
    category: 'retornaveis',
    name: 'PMA 04 - Duas Entradas Dupla Face',
    description:
      'Palete com duas entradas e dupla face, pensado para melhor aproveitamento estrutural em operações industriais.',
    details:
      'Solução robusta para cenários com alta frequência de manuseio. A dupla face contribui para desempenho consistente em ciclos repetitivos.',
    specs: ['Código: PMA 04', '2 entradas', 'Dupla face'],
    image: '/duplaface.jpg',
    badge: 'Dupla face',
  },
  {
    id: 'pma-05-duas-entradas-face-simples',
    category: 'retornaveis',
    name: 'PMA 05 - Duas Entradas Face Simples',
    description:
      'Modelo com reforço inferior, ideal para movimentação com empilhadeiras e paleteiras em operação diária.',
    details:
      'Estrutura projetada para maior estabilidade no transporte interno e armazenagem. Indicado para linhas que precisam de produtividade com segurança operacional.',
    specs: ['Código: PMA 05', '2 entradas', 'Face simples com reforço inferior'],
    image: '/duasentradassimples.jpg',
    badge: 'Reforçado',
  },
  {
    id: 'pma-06-face-simples-com-aba',
    category: 'retornaveis',
    name: 'PMA 06 - Face Simples com Aba',
    description:
      'Palete de duas entradas com aba lateral, desenvolvido para facilitar movimentação com empilhadeira e paleteira.',
    details:
      'Modelo indicado para aplicações que exigem apoio adicional e controle no manuseio. Combina praticidade de operação com construção confiável.',
    specs: ['Código: PMA 06', '2 entradas', 'Face simples com aba'],
    image: '/abaface%20simples.jpg',
    badge: 'Com aba',
  },
  {
    id: 'pma-07-quatro-entradas-reforcado',
    category: 'retornaveis',
    name: 'PMA 07 - Quatro Entradas Reforçado',
    description:
      'Palete com quatro entradas e reforço paralelo para movimentação com empilhadeiras em operações mais exigentes.',
    details:
      'Projetado para cargas com maior demanda de estabilidade. O reforço paralelo melhora a resistência estrutural e o desempenho em rotinas intensas.',
    specs: ['Código: PMA 07', '4 entradas', 'Reforço paralelo'],
    image: '/quatroentradacomrefor%C3%A7o.jpg',
    badge: 'Reforço paralelo',
  },
  {
    id: 'pma-08-embalagem',
    category: 'personalizados',
    name: 'PMA 08 - Embalagem Sob Medida',
    description:
      'Caixa de embalagem personalizada para proteção de peças, equipamentos e cargas especiais.',
    details:
      'Solução técnica desenvolvida conforme dimensão, peso e necessidade logística do cliente. Ideal para transporte seguro e organização da expedição.',
    specs: ['Código: PMA 08', 'Projeto personalizado', 'Aplicação industrial'],
    image: '/embalagem.jpg',
    badge: 'Sob medida',
  },
]

type Differential = {
  title: string
  description: string
  icon: LucideIcon
}

export const differentials: Differential[] = [
  {
    title: 'Madeira de origem responsável',
    description: 'Processos alinhados ao uso consciente de matéria-prima e foco em sustentabilidade operacional.',
    icon: Leaf,
  },
  {
    title: 'Durabilidade industrial',
    description: 'Produção orientada para resistência, estabilidade de carga e maior vida útil dos paletes.',
    icon: ShieldCheck,
  },
  {
    title: 'Entrega com agilidade',
    description: 'Atendimento eficiente para suprir demandas recorrentes de indústria, logística e agronegócio.',
    icon: Truck,
  },
  {
    title: 'Projetos personalizados',
    description: 'Desenvolvimento de embalagens sob medida para produtos técnicos, sensíveis ou fora do padrão.',
    icon: Boxes,
  },
  {
    title: 'Estrutura produtiva sólida',
    description: 'Experiência industrial desde 2006, com foco em consistência, escala e confiança comercial.',
    icon: Factory,
  },
  {
    title: 'Reposição planejada',
    description: 'Capacidade para atender operações contínuas com previsibilidade e suporte de longo prazo.',
    icon: TimerReset,
  },
]

type Stat = {
  label: string
  value: string
}

export const stats: Stat[] = [
  { label: 'Atuação industrial', value: 'Desde 2006' },
  { label: 'Segmentos atendidos', value: 'Indústria, logística e agro' },
  { label: 'Cobertura comercial', value: 'Empresas de todo o Brasil' },
]

type Testimonial = {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Mendes',
    role: 'Coordenador de logística, indústria alimentícia',
    quote:
      'A Paletes Monte Alto nos entregou padrão, resistência e prazo. Reduzimos perdas operacionais e melhoramos a organização do estoque.',
  },
  {
    name: 'Fernanda Azevedo',
    role: 'Compradora, distribuidora nacional',
    quote:
      'O atendimento é objetivo e a qualidade é consistente. Os paletes chegam com ótimo acabamento e se comportam muito bem no transporte.',
  },
  {
    name: 'Marcos Telles',
    role: 'Gerente industrial, setor metalmecânico',
    quote:
      'Solicitamos uma embalagem personalizada para equipamentos delicados e o projeto veio exatamente como precisávamos para embarque seguro.',
  },
  {
    name: 'Juliana Prado',
    role: 'Supervisora operacional, agronegócio',
    quote:
      'Encontramos um parceiro confiável para reposição contínua. Isso trouxe previsibilidade para nossa operação e menos interrupções no pátio.',
  },
]

type Highlight = {
  title: string
  description: string
  icon: LucideIcon
  accent: string
}

export const heroHighlights: Highlight[] = [
  {
    title: 'Paletes retornáveis',
    description: 'Projetados para ciclos repetidos de movimentação e armazenagem.',
    icon: PackageCheck,
    accent: 'from-yellow-400/30 to-yellow-100/0',
  },
  {
    title: 'Embalagens técnicas',
    description: 'Soluções sob medida para cargas especiais e operações críticas.',
    icon: Boxes,
    accent: 'from-blue-500/30 to-blue-100/0',
  },
]

export const floatingMetrics: Array<{ label: string; value: string }> = [
  { label: 'Ano de fundação', value: company.foundedYear },
  { label: 'Contato comercial', value: company.phones[0] },
  { label: 'Base operacional', value: 'Monte Alto - SP' },
]

export const footerLinks: Array<{ title: string; items: Array<{ label: string; href: string }> }> = [
  {
    title: 'Navegação',
    items: navigationItems,
  },
  {
    title: 'Produtos',
    items: [
      { label: 'Paletes retornáveis', href: '/?categoria=retornaveis#produtos' },
      { label: 'Paletes descartáveis', href: '/?categoria=descartaveis#produtos' },
      { label: 'Embalagens personalizadas', href: '/?categoria=personalizados#produtos' },
    ],
  },
]

export const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29747.411575775423!2d-48.5316834256836!3d-21.254580799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9441bd7a02aa1%3A0x2fb72c76f9739f9c!2sPaletes%20Monte%20Alto!5e0!3m2!1spt-BR!2sbr!4v1776433258344!5m2!1spt-BR!2sbr'

export const footerNote: ReactNode = (
  <>
    Demonstração criada para apresentar uma presença digital moderna, com foco em qualidade industrial,
    sustentabilidade e confiança comercial.
  </>
)