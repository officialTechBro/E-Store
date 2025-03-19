import { fetchProductById } from "@/utils/actions"
import Image from "next/image"
import ProductPrice from "@/components/global/product-price"
import BreadCrumb from "@/components/product-detail/bread-crumb"
import ProductRating from "@/components/product-detail/product-rating"
import AddToCart from "@/components/product-detail/add-to-cart"
import FavoriteToggleBtn from "@/components/products/favorite-toggle-btn"


const ProductsDetailPage = async (props: {params: Promise<{id: string}>}) => {
    const {id: productId} = await props.params
    const products = await fetchProductById(productId)
    const {name, image, company, description, price} = products


  return <section>
    <BreadCrumb name={name} />
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* first col - images */}
            <div className="relative h-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'
                    priority
                    className='w-full rounded-md object-cover'
                />
            </div>

        {/* second col - product info */}
            <div>
                <div className="flex gap-x-8 items-center">
                    <h1 className="capitalize text-3xl font-bold">{name}</h1>
                    <FavoriteToggleBtn productId={productId} />
                </div>
                <ProductRating productId={productId} />
                <h4 className="text-xl mt-2">{company}</h4>
                <div className="bg-muted p-2 rounded mt-3 max-w-[100px]">
                    <ProductPrice value={price} className="text-primary tracking-widest" />
                </div>
                <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
                <AddToCart productId={productId} />
            </div>

    </div>
  </section>
}
export default ProductsDetailPage