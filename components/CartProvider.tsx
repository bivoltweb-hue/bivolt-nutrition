'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react'
import { products } from '@/lib/products'

type CartItem = {
  slug: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (slug: string) => void
  removeItem: (slug: string) => void
  decreaseItem: (slug: string) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)
const STORAGE_KEY = 'bivolt-nutrition-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((slug: string) => {
    setItems((current) => {
      const existing = current.find((item) => item.slug === slug)
      if (existing) {
        return current.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...current, { slug, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((slug: string) => {
    setItems((current) => current.filter((item) => item.slug !== slug))
  }, [])

  const decreaseItem = useCallback((slug: string) => {
    setItems((current) =>
      current
        .map((item) =>
          item.slug === slug ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const product = products.find((entry) => entry.slug === item.slug)
      if (!product) return sum
      return sum + product.price * item.quantity
    }, 0)
  }, [items])

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({ items, addItem, removeItem, decreaseItem, clearCart, totalItems, subtotal }),
    [items, addItem, removeItem, decreaseItem, clearCart, totalItems, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
