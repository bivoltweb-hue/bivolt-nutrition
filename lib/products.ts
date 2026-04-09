export type Product = {
  slug: string
  name: string
  category: string
  price: number
  size: string
  shortDescription: string
  description: string
  benefits: string[]
  flavor?: string
  badge: string
}

export const products: Product[] = [
  {
    slug: 'whey-protein',
    name: 'Whey Protein Premium',
    category: 'Proteína',
    price: 149.9,
    size: '900g',
    flavor: 'Cookies & Cream, Creme Suíço e Morango Cremoso',
    shortDescription: 'Proteína de alta qualidade para recuperação e ganho de massa.',
    description:
      'O Whey Protein Premium da Bivolt Nutrition foi pensado para quem busca performance, praticidade e evolução consistente no treino.',
    benefits: ['23g de proteína por dose', 'Excelente pós-treino', 'Ajuda na recuperação muscular', 'Sabor premium'],
    badge: 'Mais vendido'
  },
  {
    slug: 'creatina',
    name: 'Creatina Monohidratada',
    category: 'Força',
    price: 89.9,
    size: '300g',
    shortDescription: 'Força, potência e consistência para sua rotina de treino.',
    description:
      'Creatina monohidratada para quem quer elevar desempenho, explosão e evolução no dia a dia.',
    benefits: ['100 porções', 'Mais força e explosão', 'Suporte à performance', 'Uso diário simples'],
    badge: 'Essencial'
  },
  {
    slug: 'pre-treino',
    name: 'Pré-Treino Boost Turbo',
    category: 'Energia',
    price: 99.9,
    size: '300g',
    flavor: 'Limonada Suíça',
    shortDescription: 'Energia e foco para treinos mais intensos.',
    description:
      'O pré-treino da Bivolt Nutrition entrega disposição, concentração e presença para encarar treinos de alta intensidade.',
    benefits: ['Mais energia', 'Mais foco', 'Ideal para rotina intensa', 'Sabor refrescante'],
    badge: 'Alto desempenho'
  }
]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
