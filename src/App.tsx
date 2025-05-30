import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { ProductWithStock } from './types/product'
import supabase from './config/supabaseClient'

function App() {
  const [products, setProducts] = useState<ProductWithStock[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          current_stock (quantity_on_hand),
          product_categories (category_name)
        `)
        .eq('is_deleted', false)
        .order('name')

      if (error) throw error

      setProducts(data.map(product => ({
        ...product,
        quantity_on_hand: product.current_stock?.[0]?.quantity_on_hand || 0
      })))
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            <ProductList 
              products={products} 
              loading={loading}
              onRefresh={fetchProducts}
            />
          </div>
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default App