import ProductsGrid from './products-grid';
import ProductsList from './products-list';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import Link from 'next/link';

// type ProductsContainerProps = {
//   layout: string,
//   search: string
// }

const ProductContainer = async ({search}: {search: string}) => {
  const products = await fetchAllProducts({search})
  const totalProducts = products.length
  // const searchTerms = search ? `&search=${search}` : ''

  return <>
    {/* header */}
    <section>
      <div>
        <h1 className='font-medium text-lg'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h1>
      </div>
      <Separator className='mt-4' />
    </section>
    {/* products */}
    <div>
      {totalProducts === 0 ? <h5 className='text-2xl mt-16'>
        Sorry No products matches your search
      </h5> : <ProductsGrid products={products}/>}
    </div>
  </>
}
export default ProductContainer