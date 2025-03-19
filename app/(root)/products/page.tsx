import ProductContainer from "@/components/products/product-container"

type ProductsPageProps =  {
  searchParams: {
    // layout?: string,
    search?: string
  }
}

const ProductsPage = ({searchParams}: ProductsPageProps) => {
  // const layout = searchParams.layout || 'grid'
  const search = searchParams.search || ''
  
  // return <ProductContainer layout={layout} search={search} />
  return <ProductContainer search={search} />
}
export default ProductsPage