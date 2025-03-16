import { fetchFeaturedProducts } from "@/utils/actions"
import EmptyList from "../global/empty-list"
import SectionTitle from "../global/section-title"
import ProductsGrid from "../products/products-grid"



const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts()

  if (products.length === 0) return <EmptyList />
  
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products = {products} />
    </section>
  )
}
export default FeaturedProducts