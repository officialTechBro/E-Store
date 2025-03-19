'use server'
import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./zodSchema";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";


//helper function
const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) redirect('/')
    return user
}
const renderError = (error: unknown) => {
    console.log(error)
    return {
        message: error instanceof Error ? error.message : 'An error occured'
    }
}
const getAdminUser = async () => {
    const user = await currentUser()
    if (user?.id !== process.env.ADMIN_USER_ID) redirect('/')
    return user
}

/// end


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

// create product action
export const createProductAction = async(prevState: any, formData: FormData): Promise<{message: string}> => {
    const user = await getAuthUser()

    try {
        // const name = formData.get('name') as string
        // const company = formData.get('company') as string
        // const price = Number(formData.get('price') as string)
        // const image = formData.get('image') as File
        // const description = formData.get('description') as string
        // const featured = Boolean(formData.get('featured') as string)

        const rawData = Object.fromEntries(formData)
        // const validatedField = productSchema.parse(rawData)
        // const validatedField = productSchema.safeParse(rawData) 
        const validatedFields = validateWithZodSchema(productSchema, rawData)
        
        const file = formData.get('image') as File
        const validatedFile = validateWithZodSchema(imageSchema, {image: file})
        const fullPath = await uploadImage(validatedFile.image)

        await prisma.product.create({
            // data: {
            //     name,
            //     company,
            //     price,
            //     description,
            //     image: '/images/product-3.jpg',
            //     featured,
            //     clerkId: user.id
            // }

            data: {
                ...validatedFields,
                // image: '/images/hero4.jpg',
                image: fullPath,
                clerkId: user.id
            }
        })

        // return {message: 'product created'}
    } catch (error) {
        return renderError(error)
    }

    redirect('/admin/products')
}


//fetch Admin Product
export const fetchAdminProduct = async () => {
    await getAdminUser()
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return products
}

//delete product - Admin
export const deleteProductAction = async (prevState: {productId: string}) => {
    const {productId} = prevState
    await getAdminUser()

    try {
            const product = await prisma.product.delete({
                where: {
                    id: productId
                }
        })
        await deleteImage(product.image)
        revalidatePath('/admin/products')
        return {message: 'product removed'}
    } catch (error) {
        return renderError(error)
    }
}

// fetch product detail - Admin
export const fetchAdminProductDetails = async(productId: string) => {
    await getAdminUser()
    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })
    if (!product) redirect('/admin/products')
    return product
}

//update product details - Admin
export const updateProductAction = async(prevState: any, formData: FormData) => {
    await getAdminUser()

    try {
        const productId = formData.get('id') as string
        const rawData = Object.fromEntries(formData)
        const validatedFields = validateWithZodSchema(productSchema, rawData)
        
        await prisma.product.update({
            where: {id: productId},
            data: {...validatedFields}
        })
        revalidatePath(`/admin/products/${productId}/edit`)
        return {message: 'Product updated successfully'}    
    } catch (error) {
        return renderError(error)
    }
}


//update product details image - Admin
export const updateProductImageAction = async(prevState: any, formData: FormData) => {
    await getAdminUser()
    try {
        const image = formData.get('image') as File
        const productId = formData.get('id') as string
        const existingImage = formData.get('url') as string

        const validatedFile = validateWithZodSchema(imageSchema, {image})
        const fullPath = await uploadImage(validatedFile.image)
        await deleteImage(existingImage)
        
        await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                image: fullPath
            }
        })
         revalidatePath(`/admin/products/${productId}/edit`)
         return {message: 'Product image updated successfully'}
    } catch (error) {
        return renderError(error)
    }
    
}