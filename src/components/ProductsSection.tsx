import { motion } from 'framer-motion'
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { productCategories, products, type Product, type ProductCategory } from '../data/siteContent'
import { ProductModal } from './ProductModal'
import { SectionHeading } from './SectionHeading'

export function ProductsSection() {
  const location = useLocation()
  const [category, setCategory] = useState<ProductCategory>('todos')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const rawCategory = new URLSearchParams(location.search).get('categoria')
    const hasCategory = productCategories.some((item) => item.value === rawCategory)

    if (hasCategory) {
      setCategory(rawCategory as ProductCategory)
      return
    }

    setCategory('todos')
  }, [location.search])

  const filteredProducts = useMemo(() => {
    if (category === 'todos') {
      return products
    }

    return products.filter((product) => product.category === category)
  }, [category])

  return (
    <section id="produtos" className="scroll-mt-28 bg-[#F8FAFC] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfólio"
            title="Linhas de paletes e embalagens desenhadas para a rotina industrial"
            description="Selecione a categoria desejada e explore soluções voltadas para armazenagem, expedição, movimentação e proteção de cargas."
          />
          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex items-center gap-2 overflow-x-auto">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <SlidersHorizontal className="h-4 w-4" />
              </div>
              {productCategories.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold whitespace-nowrap transition ${
                    category === item.value
                      ? 'bg-[#F3D31B] text-[#0E2A88] shadow-[0_10px_22px_rgba(243,211,27,0.32)]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.11)]"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-50 sm:aspect-[4/3]">
                <img
                  src={product.image}
                  alt={`Placeholder do produto ${product.name}`}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 backdrop-blur">
                  {product.badge}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-6">
                <h3 className="font-display text-base text-slate-900 sm:text-2xl">{product.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-6 text-slate-600 line-clamp-3 sm:text-sm sm:leading-7 sm:line-clamp-none">{product.description}</p>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-3 inline-flex items-center gap-2 rounded-md border border-[#0E2A88]/20 px-3 py-2 text-sm font-semibold text-[#0E2A88] transition hover:border-[#0E2A88]/40 hover:bg-[#0E2A88]/5 sm:mt-5"
                >
                  Saiba Mais
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-md border border-slate-200 bg-white p-6 text-sm text-slate-600">
            Nenhum produto encontrado para esta categoria no momento.
          </div>
        ) : null}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  )
}