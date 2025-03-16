import prisma from "./prisma";
import { redirect } from "next/navigation";

// fetch featured product
export const fetchFeaturedProducts = async () => {
    const products = await prisma.product.findMany({
        where: {
            featured: true
        }
    })
    return products
}

//fetch all product
export const fetchAllProducts = async ({search = ''}:{search:string}) => {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {name: {contains:search, mode: 'insensitive'}},
                {company: {contains:search, mode: 'insensitive'}},
            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return products
}

//find product by Id
export const fetchProductById = async (productId: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })
    if (!product) redirect('/products')
        return product
}